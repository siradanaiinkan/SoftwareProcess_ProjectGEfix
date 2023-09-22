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
    //เปลียนสี topbar
    homeElement.style.color = "#FFE881";
    homeElement.style.borderColor = "#FFE881";
    let otherElement = [assignmentElement, personalElement, assessmentElement];
    setColor(otherElement);
    //
}
function assignment() {
    //เปลียนสี topbar
    assignmentElement.style.color = "#FFE881";
    assignmentElement.style.borderColor = "#FFE881";
    let otherElement = [homeElement, personalElement, assessmentElement];
    setColor(otherElement);
    //
}
function personal() {
    //เปลียนสี topbar
    personalElement.style.color = "#FFE881";
    personalElement.style.borderColor = "#FFE881";
    let otherElement = [homeElement, assignmentElement, assessmentElement];
    setColor(otherElement);
    //
}
function assessment() {
    //เปลียนสี topbar
    assessmentElement.style.color = "#FFE881";
    assessmentElement.style.borderColor = "#FFE881";
    let otherElement = [homeElement, assignmentElement, personalElement];
    setColor(otherElement);
    //
}
// Drop-down Profile Menu
 function toggleMenu() {
    let dropdownMenu = document.getElementById("menu");
    dropdownMenu.classList.toggle("open-menu");
}
