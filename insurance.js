/**
 *   @author King, Daniel
 *   @version 0.0.1
 *   @summary Code demonstration: Selection logic  :: created: 05.10.2017
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');
let continueResponse;
let numPolicy, numAccidents,age;
let firstName,lastName,dueDate;


/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setPolicy();
        setLastName();
        setFirstName();
        setAge();
        setAccidents();
        printTotalBill();
        setContinueResponse();
        return main(); //recursion
    }
}

main();

/**
 * @method
 * @desc continueResponse mutator
 * @returns {method}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}

function setPolicy() {
   numPolicy = Number(PROMPT.question(`\nPlease enter your Policy Number `));
}

function setFirstName() {
    firstName = PROMPT.question(`\nPlease enter your first name `);
}
function setLastName() {
    lastName = PROMPT.question(`\nPlease enter your last name `);
}
function setAge() {
    const currentYear=2018;
    age = Number(PROMPT.question(`\nPlease enter the year you were born `));
    age=currentYear-age;
    if (age<15){
        console.log('Invalid age');
        setAge();
    }
}
function setAccidents(){
    numAccidents=Number(PROMPT.question('\nPlease enter the number of accidents you had in the last three years. '));
    if (numAccidents<0){
        console.log('Invalid Number');
        setAccidents();
    }
}

function calcPrice(){
    const basePrice=100,lowAgePrice=20,medAgePrice=10,highAgePrice=30,accidentPrice=50;
    if (age<30){
        return basePrice+lowAgePrice+(numAccidents*accidentPrice);
    }
    else if (age<45){
        return basePrice+medAgePrice+(numAccidents*accidentPrice);
    }
    else{
        return basePrice+highAgePrice+(numAccidents*accidentPrice);
    }
}
function printTotalBill(){
    console.log('Hello '+firstName+' '+lastName+', Policy Number '+ numPolicy);
    console.log('Your monthly premium is '+calcPrice());
}