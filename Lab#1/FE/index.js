function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button
var submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener('click', function(event){
  event.preventDefault();
  createEmployee();
});

// TODO
// add event listener to delete button
var tableBody = document.getElementById('dataTable');
tableBody.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-danger')) {
    deleteEmployee();
  }
});

// TODO
function createEmployee (){
  // get data from input field
  var empName = (document.querySelector("#name")).value;
  var empId = (document.querySelector("#id")).value;
  const newEmployee = { id: empId, name: empName};
  // send data to BE
  fetch('http://localhost:3000/api/v1/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEmployee)
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  // call fetchEmployees
  fetchEmployees()
  location.reload();
}

// TODO
function deleteEmployee (){
  // get id
  var row = event.target.closest('tr');
  var idCell = row.querySelector('td');
  var id = idCell.textContent;
  // send id to BE
  fetch('http://localhost:3000/api/v1/employee/' + id, {
    method: 'DELETE'
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  // call fetchEmployees
  fetchEmployees()
  location.reload();
}

fetchEmployees()
