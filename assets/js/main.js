let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove("open");
      this.getElementsByClassName("icon")[0].innerHTML = "+";
    } else {
      for (let x = 0; x < acc.length; x++) {
        acc[x].classList.remove("open");
        acc[x].nextElementSibling.style.maxHeight = null;
        acc[x].getElementsByClassName("icon")[0].innerHTML = "+";
      }

      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.toggle("open");
      this.getElementsByClassName("icon")[0].innerHTML = "-";
    }
  });
}
