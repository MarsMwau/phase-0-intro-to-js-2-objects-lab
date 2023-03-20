// Write your solution in this file!
let employee = {
    name : 'Kilua',
    streetAdress : 57885
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    return {
        ...employee,
        [key]: value, 
    };
}
    let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', 89976);
    
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', 45689);

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  updatedEmployee = deleteFromEmployeeByKey(employee, 'name');

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
}