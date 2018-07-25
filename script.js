window.addEventListener('load', () => {
  var divs = document.querySelectorAll('div');
  divs.forEach((element) => {
    var checkbox = element.querySelector('input');
    element.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
      element.classList.toggle('checked');
    });
  });
});
