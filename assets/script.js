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
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Input Validation Example</title>
// </head>
// <body>
//   <!-- Input box -->
//   <input type="text" id="myInput" placeholder="Enter something here">
  
//   <!-- Button -->
//   <button onclick="checkInput()">Submit</button>
  
//   <!-- Error message area -->
//   <p id="errorMsg" style="color:red;"></p>

    function checkInput() {
      let inputBox = document.getElementById("emailinput").value;
      let errorMsg = document.getElementById("errorMsg");

      if (inputBox.trim() === "") {
        errorMsg.textContent = "⚠️ First fill empty box!";
      } else {
        errorMsg.textContent = ""; // clear error
        // alert("You entered: " + inputBox);
      }
    }
  
    function checkInput2() {
      let inputBox = document.getElementById("emailinput2").value;
      let errorMsg = document.getElementById("errorMsg2");

      if (inputBox.trim() === "") {
        errorMsg.textContent = "⚠️ First fill empty box!";
      } else {
        errorMsg.textContent = ""; // clear error
        // alert("You entered: " + inputBox);
      }
    }
  

