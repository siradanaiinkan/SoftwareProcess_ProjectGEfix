let homeElement = document.querySelector('.home');
let assignmentElement = document.querySelector('.assignment');
let personalElement = document.querySelector('.personal');
let assessmentElement = document.querySelector('.assessment');
//เปลียนสีของ topbar box อื่นๆนอกจากที่เลือก
function setColor(otherElement) {
    otherElement.forEach(element => {
        element.style.color = "#ffffff";
        element.style.borderColor = "#ebebeb00";
    });
}
// get html css js
function getHtml(selectedElement, otherElements) {
  // เเสดงหน้าโหลด
  document.getElementById('loading').style.display = 'block';
  // เปลี่ยนสี topbar
  selectedElement.style.color = "#FFE881";
  selectedElement.style.borderColor = "#FFE881";
  // เปลี่ยนสี topbar boxอื่น
  setColor(otherElements);
  // get name 
  const pageName = selectedElement.classList[0]; 
  fetch(`${pageName}.html`)
      .then(response => response.text())
      .then(data => {
          document.getElementById('loading').style.display = 'none'; // ปิดหน้าโหลด
          document.getElementById('content').innerHTML = data; //เอาเนื้อหาใน data ไปแสดง
          const parser = new DOMParser(); //ใช้แปลง HTML 
          const doc = parser.parseFromString(data, 'text/html');//แปลง data ที่เป็น .html 
          const head = document.querySelector('head'); //head ของtopbar.html
          const scripts = doc.querySelectorAll('script'); //js จาก data
          const stylesheets = doc.querySelectorAll('link[rel="stylesheet"]'); //css จาก data
          scripts.forEach(script => { // เอาjs ใส่ใน head
              const newScript = document.createElement('script');
              newScript.src = script.getAttribute('src');
              head.appendChild(newScript);
          });
          stylesheets.forEach(stylesheet => { // เอาcss ใส่ใน head
              const newStylesheet = document.createElement('link');
              newStylesheet.rel = 'stylesheet';
              newStylesheet.href = stylesheet.getAttribute('href');
              head.appendChild(newStylesheet);
          });
      });
}
// topbar Menu
function home() {
  const otherElements = [assignmentElement, personalElement, assessmentElement];
  getHtml(homeElement, otherElements);
}

function assignment() {
  const otherElements = [homeElement, personalElement, assessmentElement];
  getHtml(assignmentElement, otherElements);
}

function personal() {
  const otherElements = [homeElement, assignmentElement, assessmentElement];
  getHtml(personalElement, otherElements);
}

function assessment() {
  const otherElements = [homeElement, assignmentElement, personalElement];
  getHtml(assessmentElement, otherElements);
}
// Drop-down Profile Menu
 function toggleMenu() {
    let dropdownMenu = document.getElementById("menu");
    dropdownMenu.classList.toggle("open-menu");
}
