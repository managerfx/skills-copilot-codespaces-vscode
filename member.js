function skillsMember() {
  var member = document.getElementById("member").value;
  var skill = document.getElementById("skill").value;
  var level = document.getElementById("level").value;
  var table = document.getElementById("skillsTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = member;
  cell2.innerHTML = skill;
  cell3.innerHTML = level;
}