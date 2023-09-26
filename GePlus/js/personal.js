function getInfortap(
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
  function profileInformation() {
    getInfortap(
      document.querySelector(".information"),
      document.querySelector("#information"),
      document.querySelector(".group"),
      document.querySelector("#group")
    );
  }
  function profileGroup() {
    getInfortap(
      document.querySelector(".group"),
      document.querySelector("#group"),
      document.querySelector(".information"),
      document.querySelector("#information")
    );
  }
  profileInformation();
