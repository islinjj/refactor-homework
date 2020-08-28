const employeeTest = require('ava');
const { Employee } = require('../src/employee');

employeeTest('should return name and type when create instance of Employee given a employee', t => {
    const employee = new Employee('vicky', 'manager');
    t.is(employee.toString(), 'vicky (manager)');
});

employeeTest('should thrown error when create instance of Employee given a employee with error type', t => {
    t.throws(()=> new Employee('vicky', 'unknown'),'Employee cannot be of type unknown');
})
