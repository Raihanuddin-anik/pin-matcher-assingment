// notify section remove
document.getElementById('match').style.display = 'none';
document.getElementById('nomatch').style.display = 'none'

// generate pin

document.getElementById("generate_pin").addEventListener("click",function(){
    const randomNum = Math.random()*9000;
    const randomNumInt = parseInt(randomNum);
//    console.log(randomNumInt)
      const createNum = document.getElementById("pin_holder");
      createNum.value = randomNumInt;
})
// get all number in input field
function getNumber(X){
    document.getElementById("allValue").value = document.getElementById("allValue").value + X;
    
}

//** Single Clear Handler */
function singleClearHandler() {
    const inputBox = document.getElementById('allValue');
        deleteLastInput = inputBox.value;
    inputBox.value = deleteLastInput.substring(0, deleteLastInput.length - 1);
}
// clear all Handler
 
function AllClearHandler(){
    document.getElementById('allValue').value = '';
    
}
// match pin
function matchPin(){
    const createNum = document.getElementById("pin_holder").value;
    const inputBox = document.getElementById('allValue').value;
     if(createNum == inputBox){
        document.getElementById("pin_holder").value = '';
        document.getElementById('allValue').value = '';
        document.getElementById("generate_pin").innerText = "Pin Match";
        document.getElementById("generate_pin").style.backgroundColor = "green";
        document.getElementById("match").style.display = "block"
     }
     else{
        document.getElementById("pin_holder").value = '';
        document.getElementById('allValue').value = '';
        document.getElementById("generate_pin").innerText = "Worng Pin";
        document.getElementById("generate_pin").style.backgroundColor = "red"; 
        document.getElementById("nomatch").style.display = "block";
        
     }
}