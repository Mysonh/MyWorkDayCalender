var today = moment();
$("#currentDay"). text(today.format("dddd, MMM Do, YYYY"));


var saveBtn = document.getElementsByName("saveBtn");
saveBtn.onclick = saveData


function saveData(){
    var input = document.getElementById('data')
    localStorage.setItem('10am', input.value);
   var storedValue = JSON.parse(localStorage.getItem('10am'));
}
function saveData(){
    var input = document.getElementById('data')
    localStorage.setItem('10am', input.value);
   var storedValue = JSON.parse(localStorage.getItem('11am'))
}
function saveData(){
    var input = document.getElementById('data')
    localStorage.setItem('10am', input.value);
   var storedValue = JSON.parse(localStorage.getItem('12pm'))
}
function saveData(){
    var input = document.getElementById('data')
    localStorage.setItem('10am', input.value);
   var storedValue = JSON.parse(localStorage.getItem('01pm'))
}
function saveData(){
    var input = document.getElementById('data')
    localStorage.setItem('10am', input.value);
   var storedValue = JSON.parse(localStorage.getItem('02pm'))
}
function saveData(){
    var input = document.getElementById('data')
    localStorage.setItem('10am', input.value);
   var storedValue = JSON.parse(localStorage.getItem('03pm'))
}
function saveData(){
    var input = document.getElementById('data')
    localStorage.setItem('10am', input.value);
   var storedValue = JSON.parse(localStorage.getItem('04pm'))
   
};

 




