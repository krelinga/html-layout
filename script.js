window.addEventListener('load', () => {
  var divs = document.querySelectorAll('div');
  console.log(divs);
  divs.forEach((element) => {
    var checkbox = element.querySelector('input');
    element.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
    });
  });
});
