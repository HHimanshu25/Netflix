window.addEventListener('load', () => {
  document.querySelectorAll('.down-but').forEach(function (el) {
    el.classList.remove('rotate');
  });
});


let downshift=(val)=>{
  document.querySelector(`.quin${val}`).classList.toggle('ques-out')
  document.querySelector(`.r${val}`).classList.toggle('rotate')
  document.querySelector(`.r${val}`).classList.toggle('rorev')
}


