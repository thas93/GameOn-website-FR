function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");//pas camelCase 
const modalbg2 = document.querySelector(".bground2");
const error = document.getElementsByClassName("error");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById('form');
const firstN = document.getElementById('firstN');
const lastN = document.getElementById('lastN');
const eMail = document.getElementById('eMail');
const birthDate = document.getElementById('birthdate');
const qtyTournament = document.getElementById('quantity');
const locationSelect = document.getElementsByName('location');
/****************************************************************************************/
let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isBirthDateValidate = false;
let isTournamentValid = false;
let isLocationValid = false;
let isConditionValid = false;

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//************************************CLOSE-CROSS***************************************************************************
function closeCross() {
  modalbg.style.display = "none";
  document.querySelector("form").reset();
  window.location.reload();
}
document.getElementById("closecross").addEventListener("click", closeCross);

function closeCross2() {
  modalbg.style.display = "none";
  document.querySelector("form").reset();
  window.location.reload();
}
document.getElementById("closeButton").addEventListener("click", closeCross2);
//*************************************************************************************************

//**************************************CLOSE BUTTON***************************************************************************
function closeButton() {
  modalbg2.style.display = "none";
  document.querySelector("form").reset();
  window.location.reload();
}
document.getElementById("buttonClose").addEventListener("click", closeButton);
//*************************************************************************************************

//******************************************NAME CHECK****************************************************
function firstNameCheck() {
  const firstNvalue = firstN.value.trim();
  let nbrOfLetter = firstNvalue.length;
  
  if (/^[A-Za-z]{2,20}$/.test(firstNvalue)) {
    document.getElementById("fName").classList.add('hidden');
    document.getElementById("fName1").classList.add('hidden');
    document.getElementById("fName3").classList.add('hidden');
    firstN.classList.add('border-green');
    isFirstNameValid = true;
  }
  //On limite la longeur max du prénom à 20 lettres
  else if (nbrOfLetter > 20) {
    document.getElementById("fName3").classList.remove('hidden');
    firstN.classList.add('border-red');
    isFirstNameValid = false;
  }
  //On limite la longeur min du prénom à 2 lettres
  else if (firstNvalue === "" || nbrOfLetter < 2) {
    document.getElementById("fName").classList.remove('hidden');
    firstN.classList.add('border-red');
    isFirstNameValid = false;
  }
  //On vérifie que le champ ne contien que des lettres
  else if (!firstNvalue.match(/^[a-zA-Z]/) || !firstNvalue.match(/^[0-9]/)) {
    document.getElementById("fName1").classList.remove('hidden');
    firstN.classList.add('border-red');
    isFirstNameValid = false;
  }
}
//*************************************************************************************************

//***********************************************LAST NAME CHECK********************************************************************************

function lastNameCheck() {
  const lastNvalue = lastN.value.trim();
  let nbrOfLetter2 = lastNvalue.length;
 
  if (/^[A-Za-z]{2,20}$/.test(lastNvalue)) {
    document.getElementById("lName").classList.add('hidden');
    document.getElementById("lName1").classList.add('hidden');
    document.getElementById("lName2").classList.add('hidden');
    lastN.classList.add('border-green');
    isLastNameValid = true;
  }
  //On limite la longeur max du prénom à 20 lettres
  else if (nbrOfLetter2 > 20) {
    document.getElementById("lName2").classList.remove('hidden');
    lastN.classList.add('border-red');
    isLastNameValid = false;
  }
  //On limite la longeur min du nom à 2 lettres
  else if (lastNvalue === "" || nbrOfLetter2 < 2) {
    document.getElementById("lName").classList.remove('hidden');
    lastN.classList.add('border-red');
    isLastNameValid = false;
  }
  //On vérifie que le champ ne contien que des lettres
  else if (!lastNvalue.match(/^[a-zA-Z]/) || !lastNvalue.match(/^[0-9]/)) {
    document.getElementById("lName1").classList.remove('hidden');
    lastN.classList.add('border-red');
    isLastNameValid = false;
  }
  if (lastNvalue === "") {
    document.getElementById("lName").classList.remove('hidden');
    lastN.classList.add('border-red');
    isLastNameValid = false;
  }
  else if (!lastNvalue.match(/^[a-zA-Z]/)) {
    document.getElementById("lName1").classList.remove('hidden');
    lastN.classList.add('border-red');
    isLastNameValid = false;
  }
}
//*************************************************************************************************

//*****************************************MAIL CHECK******************************************************************************

function emailCheck() {
  const eMailValue = eMail.value.trim();
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

  if (eMailValue.match(emailRegExp)) {
    eMail.classList.add('border-green');
    document.getElementById("eMails").classList.add('hidden');
    console.log(eMailValue);
    isEmailValid = true;
  }
  else {
    document.getElementById("eMails").classList.remove('hidden');
    eMail.classList.add('border-red');
    isEmailValid = false;
  }
}
//*************************************************************************************************

//***********************************DATE OF BIRTH CHECK*******************************************************************

function birthDateCheck() {
  const birthDateValue = birthDate.value;
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/; 
  
  if (!birthDateValue.match(dateRegex)) {
    document.getElementById("birthdate").classList.remove('hidden');
    birthDate.classList.add('border-red');
    isBirthDateValidate = false;
  }
  else {
    birthDate.classList.add('border-green');
    isBirthDateValidate = true;
  }
}
//*************************************************************************************************

//***********************************************TOURNEMENT CHECK***************************************************************************

function tournementCheck() {
  const qtyTournamentValue = qtyTournament.value;
  let tournnamentString = qtyTournamentValue.toString();
  let quantityTr = tournnamentString.length;

  if (qtyTournamentValue === "" || quantityTr > 2) {
    document.getElementById("quantitys").classList.remove('hidden');
    qtyTournament.classList.add('border-red');
    isTournamentValid = false;
  }
  else if (quantityTr > 100) {
    document.getElementById("quantitys").classList.remove('hidden');
    qtyTournament.classList.add('border-red');
    isTournamentValid = false;
  }
  else {
    qtyTournament.classList.add('border-green');
    document.getElementById("quantitys").classList.add('hidden');
    isTournamentValid = true;
  }
}
//*************************************************************************************************

//***************************************LOCQTION CHECK*************************************************************************

function locationCheck() {

  var form_data = new FormData(document.querySelector("form"));
  if (!form_data.has("location[]")) {
    document.getElementById("selectLocation").classList.remove('hidden');
    isLocationValid = false;
  }
  else {
    document.getElementById("selectLocation").classList.add('hidden');
    isLocationValid = true;
  }
}
//*************************************************************************************************

//*********************************CONDITION CHECK******************************************************************

function conditionCheck() {
  if (checkbox1.checked) {  
    document.getElementById("selectCondition").classList.add('hidden');
    isConditionValid = true;
    console.log(isConditionValid);   
  }
  else {
    document.getElementById("selectCondition").classList.remove('hidden');
    isConditionValid = false;
    console.log(isConditionValid);
  }
}
//************************************************************************************************* */

//************************VALIDATION CHECK*******************************************************
form.addEventListener('submit', e => {
  e.preventDefault();
  firstNameCheck();
  lastNameCheck();
  emailCheck();
  birthDateCheck();
  tournementCheck();
  locationCheck();
  conditionCheck();
  if (isFirstNameValid && 
      isLastNameValid && 
      isEmailValid && 
      isBirthDateValidate && 
      isTournamentValid && 
      isLocationValid &&
      isConditionValid){
    document.getElementById('thanksModal').classList.remove('hidden');
    document.getElementById('content').classList.add('hidden');
  }
});


