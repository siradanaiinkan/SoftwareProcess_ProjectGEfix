let homeElement = document.querySelector('.home');
let assignmentElement = document.querySelector('.assignment');
let personalElement = document.querySelector('.personal');
let assessmentElement = document.querySelector('.assessment');
//เปลียนสีของ topbarElement อื่นๆนอกจากที่เลือก
function setColor(otherElement) {
    otherElement.forEach(element => {
        element.style.color = "#ffffff";
        element.style.borderColor = "#ebebeb00";
    });
}
// topbar Menu
function home() {
    //เเสดงการโหลด
    document.getElementById('loading').style.display = 'block';
    //เปลียนสี topbar
    homeElement.style.color = "#FFE881";
    homeElement.style.borderColor = "#FFE881";
    let otherElement = [assignmentElement, personalElement, assessmentElement];
    setColor(otherElement);
    fetch('home.html')
    .then(response => response.text())
    .then(data => {
      // ซ่อน loading หลังจากโหลดเสร็จ
      document.getElementById('loading').style.display = 'none';
      document.getElementById('content').innerHTML = data;
    });
    //
}
function assignment() {
    document.getElementById('loading').style.display = 'block';
    //เปลียนสี topbar
    assignmentElement.style.color = "#FFE881";
    assignmentElement.style.borderColor = "#FFE881";
    let otherElement = [homeElement, personalElement, assessmentElement];
    setColor(otherElement);
    fetch('assignment.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('content').innerHTML = data;
    });
    //
}
function personal() {
    document.getElementById('loading').style.display = 'block';
    //เปลียนสี topbar
    personalElement.style.color = "#FFE881";
    personalElement.style.borderColor = "#FFE881";
    let otherElement = [homeElement, assignmentElement, assessmentElement];
    setColor(otherElement);
    fetch('personal.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('content').innerHTML = data;
    });
    //
}
function assessment() {
    document.getElementById('loading').style.display = 'block';
    //เปลียนสี topbar
    assessmentElement.style.color = "#FFE881";
    assessmentElement.style.borderColor = "#FFE881";
    let otherElement = [homeElement, assignmentElement, personalElement];
    setColor(otherElement);
    fetch('assessment.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('content').innerHTML = data;
    });
    //
}
// Drop-down Profile Menu
 function toggleMenu() {
    let dropdownMenu = document.getElementById("menu");
    dropdownMenu.classList.toggle("open-menu");
}
