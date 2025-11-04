window.addEventListener('load', () => {
  document.querySelectorAll('.down-but').forEach(function(el) {
    el.classList.remove('rotate');
  });
});

function handleDownButClick(event) {
  event.currentTarget.classList.toggle('rotate');
}

document.querySelectorAll('.down-but').forEach(function(el) {
  el.addEventListener('click', handleDownButClick);
});