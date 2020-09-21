
window.addEventListener('load', function () {

  var toggler = document.getElementsByClassName("folder");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".group").classList.toggle("active");
      this.classList.toggle("folder-down");
    });
  }

});