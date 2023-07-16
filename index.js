let employee = {
    name:"sam",
    streetAddress: "11 BroadWay"
} 
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newKey = { ...employee}
    newKey[key] = value;
    return newKey;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value;
return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newKey = { ...employee}
    delete newKey[key]
    return newKey
    }
function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key]
    return employee
    }



  

