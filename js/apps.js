'use strict';

let tableDiv = document.getElementById('forTable');
let table = document.createElement('table');
tableDiv.appendChild(table);
let total = 0;
let employees = [];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



function tableHeader() {
  let headerContent = ['Name', 'Email', 'Department', 'Salary'];
  let trHeader = document.createElement('tr');
  table.appendChild(trHeader);
  let thHeader;
  for (let i = 0; i < headerContent.length; i++) {

    thHeader = document.createElement('th');
    thHeader.textContent = headerContent[i];
    trHeader.appendChild(thHeader);

  }
}


function Employee(name, email, department) {
  this.name = name;
  this.email = email;
  this.department = department;
  this.salary = getRandomInt(100, 500);
  employees.push(this);
}
Employee.prototype.render = function () {

  let renderArray = [this.name, this.email, this.department, this.salary];
  let trEmployee = document.createElement('tr');
  table.appendChild(trEmployee);
  let tdEmployee;

  for (let i = 0; i < renderArray.length; i++) {

    tdEmployee = document.createElement('td');
    tdEmployee.textContent = renderArray[i];
    trEmployee.appendChild(tdEmployee);
  }
  total = total + this.salary;

};

function addNewEmployee(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let department = event.target.department.value;

  let newEmployee = new Employee(name, email, department);

  // table.deleteRow(table.rows.length - 1);

  tableDiv.removeChild(pFooter);
  newEmployee.render();
  footer();
  setItem();

}
let pFooter;
function footer() {
  // let trFooter = document.createElement('tr');
  // table.appendChild(trFooter);
  // let tdFooter = document.createElement('td');
  // tdFooter.textContent = `Total: ${total}`;
  // trFooter.appendChild(tdFooter);

  pFooter = document.createElement('p');
  pFooter.textContent = `Total: ${total}`;
  tableDiv.appendChild(pFooter);

}

let form = document.getElementById('form');

function setItem() {
  localStorage.setItem('employees', JSON.stringify(employees));

}
function getItem() {

  let convert = localStorage.getItem('employees');
  if (convert) {
    employees = JSON.parse(convert);
    for (let i = 0; i < employees.length; i++) {

      // table.deleteRow(table.rows.length - 1);
      tableDiv.removeChild(pFooter);
      let renderArray = [employees[i].name, employees[i].email, employees[i].department, employees[i].salary];
      let trEmployee = document.createElement('tr');
      table.appendChild(trEmployee);
      let tdEmployee;

      for (let i = 0; i < renderArray.length; i++) {

        tdEmployee = document.createElement('td');
        tdEmployee.textContent = renderArray[i];
        trEmployee.appendChild(tdEmployee);
      }
      total = total + employees[i].salary;
      footer();
    }
  }

}
tableHeader();
footer();
form.addEventListener('submit', addNewEmployee);
getItem();
