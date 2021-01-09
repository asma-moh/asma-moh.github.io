
function success() {
  if (document.getElementById("inputUserName").value === "" && document.getElementById("inputAppName").value === "") {
    document.getElementById('searchBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
  } else {
    document.getElementById('searchBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;
  }
}


function filterTable() {
  const query = q => document.querySelectorAll(q);
  const filters = [...query('th input')].map(e => new RegExp(e.value, 'i'));
  query('tbody tr').forEach(row => row.style.display =
    filters.every((f, i) => f.test(row.cells[i].textContent)) ? ' ' : 'none');
  document.getElementById('tableBody').style.display = 'table-row-group';
  document.getElementById('tableHeader').style.display = 'table-row';

}

function removeProperty() {
  var tableBody = document.getElementById('tableBody');
  var tableHead = document.getElementById('tableHeader');
  var cell = tableBody.getElementsByTagName('tr');

  document.getElementById('inputUserName').value = "";
  document.getElementById('inputAppName').value = "";

  for (var i = 0; i < cell.length; i++) {
    cell[i].removeAttribute('style');
  }
  tableBody.removeAttribute('style');
  tableHead.removeAttribute('style');
  document.getElementById('searchBtn').disabled = true;
  document.getElementById('resetBtn').disabled = true;
}

var checks = document.querySelectorAll('.getIndex');

checks.forEach(function (check) {
  check.addEventListener('click', checkIndex);
})

function checkIndex(event) {
  var index = Array.from(checks).indexOf(event.target);
  var tbody = document.getElementById('tableBody').getElementsByTagName("tr");
  var trow = tbody[index];
  var tlist = trow.getElementsByClassName('roleList')[0];

  var roles = document.getElementById("roles");
  var li = document.createElement("li");
  if (roles.value == "") {
    roles.classList.add("isEmpty");
  } else {
    roles.classList.remove("isEmpty");
    li.setAttribute('id', roles.value);
    li.appendChild(document.createTextNode(roles.value));
    tlist.appendChild(li);
  }
}
