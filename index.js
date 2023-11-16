const inquirer = require('inquirer');
const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'your_database_host',
  port: 'your_database_port',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
  startApp();
});

// Function to start the application
function startApp() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewAllDepartments();
          break;

        case 'View all roles':
          viewAllRoles();
          break;

        case 'View all employees':
          viewAllEmployees();
          break;

        case 'Add a department':
          addDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee();
          break;

        case 'Update an employee role':
          updateEmployeeRole();
          break;

        case 'Exit':
          connection.end();
          break;

        default:
          console.log('Invalid action');
          break;
      }
    });
}

// Implement the necessary functions (viewAllDepartments, viewAllRoles, etc.) based on your requirements.

// Example viewAllDepartments function:
function viewAllDepartments() {
  const query = 'SELECT * FROM departments';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

// Implement other functions (viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole) in a similar manner.
