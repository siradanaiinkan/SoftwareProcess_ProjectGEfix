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
function toggleWeek(clickedElement) {
    const WeekOpening = clickedElement.nextElementSibling;
    WeekOpening.classList.toggle("open");
}
