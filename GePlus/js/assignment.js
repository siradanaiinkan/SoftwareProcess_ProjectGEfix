function getsearchtap(
  selectElement,
  selectContent,
  otherElement,
  otherContent
) {
  if (selectElement && otherElement) {
    // content
    otherContent.style.display = "none";
    selectContent.style.display = "block";

    // เปลี่ยนสี
    otherElement.classList.remove("active");
    selectElement.classList.add("active");
    selectElement.classList.remove("hover");
  }
}
function assignmentSearch() {
  getsearchtap(
    document.querySelector(".search"),
    document.querySelector("#search"),
    document.querySelector(".detailed"),
    document.querySelector("#detailed")
  );
}
function assignmentDetailed() {
  getsearchtap(
    document.querySelector(".detailed"),
    document.querySelector("#detailed"),
    document.querySelector(".search"),
    document.querySelector("#search")
  );
}
assignmentSearch();

function toggleCourse() {
  let dassignmentCourse = document.querySelector(".assignment-course-wrap");
  dassignmentCourse.classList.toggle("open");
}
function coursebotton() {
  const coursebotton = document.querySelector('.course-botton');
  if (coursebotton.style.transform !== 'rotate(180deg)') {
    coursebotton.style.transform = 'rotate(180deg)';
  } else {
    coursebotton.style.transform = 'rotate(0deg)';
  }
  toggleCourse()
}
toggleCourse();

