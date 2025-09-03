function showPopup(score){
    document.getElementById("score").textContent = score;
    document.getElementById("popup-overlay").style.display = "flex";
}

function closePopup(){
    document.getElementById("popup-overlay").style.display = "none";
}

let targetColor = "";
let score = 0;
let time = 30;
let timer;

const colors = ["Red","Green","Blue","Yellow","Orange","Purple","Pink","Brown","Black","White","Gray","Cyan","Magenta","Lime","Maroon","Navy","Olive","Teal","Silver","Gold","Beige","Lavender","Turquoise","Indigo","Coral","Salmon","Khaki","Chocolate","Crimson","Plum"];

const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("target-color");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function shuffleArray(arr){
     let copy = [...arr];   // make a copy
     for(let i = copy.length - 1; i > 0; i--){
         const j = Math.floor(Math.random() * (i + 1));
         [copy[i], copy[j]] = [copy[j], copy[i]];
     }
     return copy;
}

function handleClick(clickedColor){
    if(clickedColor === targetColor){
        score++;
        scoreDisplay.textContent = score;
        createGrid();
    } else {
        // alert("Wrong color! Try again.");
        showWrongPopup();
    }
}

function createGrid(){
    grid.innerHTML = ""; 
    let shuffledColors = shuffleArray(colors);   // use shuffled copy
    targetColor = shuffledColors[Math.floor(Math.random()*16)];
    targetColorDisplay.textContent = targetColor;
    
    shuffledColors.forEach(color => {
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;
        box.addEventListener("click", () => handleClick(color));
        grid.appendChild(box);
    });
}

function startGame(){
    score = 0;
    time = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;
    createGrid();
    clearInterval(timer);

    timer = setInterval(() =>{
        time--;
        timeDisplay.textContent = time;
        if (time === 0) {
            clearInterval(timer);
            // alert("⏳ Time's up! Your score is: " + score);
            showPopup(score); 
        }
    }, 1000);
}
 
 function setDarkMode(){
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }

    function setLightMode(){
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }



function cancelGame() {
  clearInterval(timer); // stop timer
  grid.innerHTML = "";  // clear grid 
  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  targetColorDisplay.textContent = "#";
 // alert("❌ Game Cancelled!");
  document.getElementById("cancelPopupOverlay").style.display = "flex";
}
function closeCancelPopup() {
  document.getElementById("cancelPopupOverlay").style.display = "none";
}



function playAgain() {
   const cancelPopup = document.getElementById("cancelPopupOverlay");
  if (cancelPopup) {
    cancelPopup.style.display = "none";
  }

  // Timeup popup ko band karo
  const timeupPopup = document.getElementById("timeupPopupOverlay");
  if (timeupPopup) {
    timeupPopup.style.display = "none";
  }

  // Game start karo
  startGame();

}


// Show Wrong Popup
function showWrongPopup() {
  document.getElementById("wrongPopup").style.display = "flex";
}

// Close Wrong Popup
function closeWrongPopup() {
  document.getElementById("wrongPopup").style.display = "none";
}

 