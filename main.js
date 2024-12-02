//Program Title

document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("guessIs").style.display = "none";
document.getElementById("guessed").style.display = "none";

let chances = 10;
let randomNumber = Math.floor(Math.random() * 100);

function btnClicked() {
  //WHATEVER THIS LET STUFF IS CALLED
  document.getElementById("guessIs").style.display = "block";
  document.getElementById("instructions").style.display = "none";
  getResponse(document.getElementById("inputNumber").value);
  document.getElementById("guessed").style.display = "block";

  document.getElementById("guessed").innerHTML += `              <p>
  ${document.getElementById("inputNumber").value}
</p>
`;
  changeChances();
}

function getResponse(number) {
  if (number.length === 0) {
    //IF number IS LEFT BLANK
    document.getElementById("guessIs").innerHTML = `      <p>
          <strong
            >Please guess a number</strong
          >
        </p>
        `;
    document.body.style.background = "rgb(170, 170, 170)";
  } else if (number > randomNumber) {
    document.getElementById("guessIs").innerHTML = `      <p>
          <strong
            >Your guess is too high.</strong
          >
        </p>
        `;
    document.body.style.background = "rgb(136, 0, 0)";
  } else if (number < randomNumber) {
    document.getElementById("guessIs").innerHTML = `      <p>
          <strong
            >Your guess is too low.</strong
          >
        </p>
        `;
    document.body.style.background = "rgb(136, 0, 0)";
  } else if (number == randomNumber) {
    document.getElementById("guessIs").innerHTML = `      <p>
          <strong
            >Your guess is right!</strong
          >
        </p>
        `;
    document.getElementById("inputNumber").style.borderColor = "green";
    document.getElementById("chances").style.display = "none";
    document.body.style.background = "green";
  }
}

function randomResponse() {
  let randNum = Math.random();
  if (randNum <= 0.2) {
    document.getElementById("guessIs").innerHTML = `      <p>
      <strong
           >guessIs: Without a Doubt.</strong
       >
       </p>
        `;
  } else if (randNum <= 0.4) {
    document.getElementById("guessIs").innerHTML = `      <p>
          <strong
               >guessIs: As I see it, yes.</strong
           >
           </p>
            `;
  } else if (randNum <= 0.6) {
    document.getElementById("guessIs").innerHTML = `      <p>
              <strong
                   >guessIs: Concentrate and ask again.</strong
               >
               </p>
                `;
  } else if (randNum <= 0.8) {
    document.getElementById("guessIs").innerHTML = `      <p>
      <strong
           >guessIs: Don't count on it.</strong
       >
       </p>
        `;
  } else {
    document.getElementById("guessIs").innerHTML = `      <p>
          <strong
               >guessIs: Outlook not so good,</strong
           >
           </p>
            `;
  }
}

function changeChances() {
  chances--;
  if (chances == 0) {
    document.getElementById("chances").innerHTML = `      <p>
  <strong>You have no more chances left. The number was ${randomNumber}</strong>
</p>
`;
    document.getElementById("btn").style.display = "none";
    document.getElementById("inputNumber").style.display = "none";
    document.getElementById("guessIs").style.display = "none";
  } else {
    document.getElementById("chances").innerHTML = `      <p>
  <strong>You have ${chances} chances left.</strong>
</p>
`;
  }
}
