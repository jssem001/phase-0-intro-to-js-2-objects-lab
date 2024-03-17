// Write your solution in this file!
let employee = {};
employee.Name = 'Joshua';
employee.streetAdress = 'Miotoni ln';

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateemployee = { ...employee };
    updateemployee[key] = value;

    return updateemployee;
    // Code to return new, updated menu object goes here
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value; //Why are we using bracket notation here?

    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const updateemployee = { ...employee};
    delete updateemployee[key];
    return updateemployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}