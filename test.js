var audio = new Audio("select_click.wav");
let buttons = document.querySelectorAll(".math");
let string = " ";

function playsound() {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

const InputType = document.querySelector("#input");

InputType.addEventListener("keydown",function(event){
  playsound()

  if (event.keyCode == 13){
    try{
      string = document.querySelector("#input").value
      string = eval(string);
      document.querySelector("#input").value = string;
    }catch{
      document.querySelector("#input").value = "Incorrect form!"
    }
  }
  
})

buttons.forEach((button) => {
  // assgin each "buttons" element to "button"
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      playsound();
      string = eval(string);
      document.querySelector("#input").value = string; // show value
    } else if (e.target.innerHTML == "C") {
      string = String(string).slice(0, -1);
      document.querySelector("#input").value = string;
    } else if (e.target.innerHTML == "CE") {
      playsound();
      string = String(string).slice(0, 0);
      document.querySelector("#input").value = string;
    } else {
      playsound();
      string = string + e.target.innerHTML;
      document.querySelector("#input").value = string;

    }
  });
});
