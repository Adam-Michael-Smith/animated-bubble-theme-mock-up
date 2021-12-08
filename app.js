// <-------------- LOADING HEADER TEXT -------------->

// select all text content from header;
const headerText = document.querySelector('h1');
const selectTextContent = headerText.textContent;

// make array of letters from string;
const splitTextContent = selectTextContent.split("");

// remove original header text to avoid duplication;
headerText.textContent = "";


// split header letters into separate span tags;
for(let i = 0; i < splitTextContent.length; i++){
    headerText.innerHTML += "<span>" + splitTextContent[i] + "</span>";
}

let letter = 0;
let count = setInterval(whenNext, 55);

function whenNext(){
    const spanElements = headerText.querySelectorAll('span')[letter];
    spanElements.classList.add('fade-letter');
    letter++;
    
    if (letter === splitTextContent.length){
        count = null;
        return;
    }
}

// <-------------- CONTACT ICONS: RIGHT: OPEN -------------->

const iconsRight = document.getElementsByClassName('iconsRight');
const iconsBoxInd = document.querySelectorAll('.box');

for (let i = 0; i < iconsRight.length; i++) {
  for(let j = 0; j < iconsBoxInd.length; j++){

  iconsBoxInd[j].addEventListener("mouseover", openRightIcons);

  function openRightIcons(){
  if(iconsBoxInd[j].style.width === "175px"){
    iconsBoxInd[j].style.right = "0px"; 
  } else{
    iconsBoxInd[j].style.right = "0px";
  }
}
}
}
// <-------------- CONTACT ICONS: RIGHT: CLOSE -------------->

for (let i = 0; i < iconsRight.length; i++) {
  for(let j = 0; j < iconsBoxInd.length; j++){

  iconsBoxInd[j].addEventListener("mouseout", closeRightIcons);

  function closeRightIcons(){
  if(iconsBoxInd[j].style.width === "175px"){
    iconsBoxInd[j].style.right = "175px";
  } else{
    iconsBoxInd[j].style.right = "-125px";
  }
}
}
}

// <-------------- SCROLL-TO BUTTON -------------->
const scrollButton = document.getElementById("scrollButton");
scrollButton.addEventListener("click", scrollPage);
function scrollPage(){
  window.scrollTo(0, 700);
}