const { Pool} = require('pg');
const inquirer = require('inquirer');
require('dotenv').config();

const pool = new Pool(
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: 'localhost',
        database: process.env.DB_NAME
    },
    console.log(`Connected to the database.`)
)

pool.connect()

const initialPromptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'initialOptions',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View all Departments',
                    value: 'VIEW_DEPARTMENTS',
                },
                {
                    name: 'View all Roles',
                    value: 'VIEW_ROLES',
                },
                {
                    name: 'View all Employees',
                    value: 'VIEW_EMPLOYEES',
                    
                },
                {
                    name: 'Add a department',
                    value: 'ADD_DEPARTMENT',
                },
                {
                    name: 'Add a Role',
                    value: 'ADD_ROLE',
                },
                {
                    name: 'Add an Employee',
                    value: 'ADD_EMPLOYEE',
                },
                {
                    name: 'Update Employee Role',
                    value: 'UPDATE_EMPLOYEE_ROLE',
                },
                {
                    name: 'Quit',
                    value: 'QUIT',
                },
            ]
        }
    ]).then((res) => {
        if (res === 'VIEW_DEPARTMENTS') {
            viewDepartments();
        } else if (res === 'VIEW_ROLES') {
            viewRoles();
        } else if (res === 'VIEW_EMPLOYEES') {
            viewEmployees();
        } else if (res === 'ADD_DEPARTMENT') {
            addDepartment();
        } else if (res === 'ADD_ROLE') {
            addRole();
        } else if (res === 'ADD_EMPLOYEE') {
            addEmployee();
        } else if (res === 'UPDATE_EMPLOYEE_ROLE'){
            updateEmployeeRole();
        } else {
            pool.end();
        }
    })
}
initialPromptUser();

const viewDepartments = () => {
    console.log('Viewing Departments');

    const sql = `SELECT * FROM department`;

    pool.query(sql, (err, {rows}) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
    })
}

const viewRoles = () => {
    console.log('Viewing Roles');

    const sql = `SELECT * FROM roles`;

    pool.query(sql, (err, {rows}) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
    })
}

const viewEmployees = () => {
    console.log('Viewing Employees');

    const sql = `SELECT * FROM employee`;

    pool.query(sql, (err, {rows}) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
    })
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?'
        },
    ]).then((res) => {

        const sql = `INSERT INTO department SET ?`

        pool.query(sql, {
            name: res.departmentName
        },
        (err, res) => {
            if (err) {
                console.log(err)
            }
            console.table(res);
    })
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary for this role?'
        },
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?'
        },
    ]).then((res) => {
        const sql = `INSERT INTO roles SET ?`;

        pool.query(sql, {
            title: res.roleName,
            salary: res.roleSalary,
            // department_id
        },
        (err, res) => {
            if (err) {
                console.log(err);
            }
            console.table(res);
    });
    });
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: `What is the employee's first name?`,
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the employee's last name?",
        },
        {
            type: 'input',
            name: 'employeeRole',
            message: "What is the employee's role?",
        },
        {
            type: 'input',
            name: 'manager',
            message: "Who is the employee's manager?",
        },
    ]).then((res) => {
        const sql = `INSERT INTO employee SET ?`

        pool.query(sql, {
            first_name: res.first_name,
            last_name: res.last_name,
            //role_id
            //manager_id
        }, 
        (err, res) => {
            if (err) {
                console.log(err)
            }
            console.table(res);
    });
    });
}