function changetab(tabName) {
    var i, tabcontent, button;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    button = document.getElementsByClassName("button");
    for (i = 0; i < button.length; i++) {
      button[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
}
changetab('search');