const divNeKadarKaldi = document.querySelector(".neKadarKaldi")
const divKalanSure = document.querySelector(".kalanSure")
const divVakitGeldi = document.querySelector(".vakitGeldi")

const inputDay = document.getElementById("day")
const inputHour = document.getElementById("hour")
const inputMinute = document.getElementById("minute")
const inputSecond = document.getElementById("second")

const form = document.querySelector("#form")
const dateInput = document.querySelector("#date")

const resetButton = document.getElementById("reset")
const recalculateButton = document.getElementById("recalculate")

//////
const second = 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24;

//////

///// min value atama
const minValue = new Date().toISOString().split("T")[0]
dateInput.setAttribute("min",minValue)
/////

form.addEventListener("submit",submitForm)
resetButton.addEventListener("click",showScreen)

function submitForm(e){
    e.preventDefault();
    if(dateInput.value == ""){
        alert("Lütfen Tarih Seçiniz!")
        console.log("Hata")
    }
    else{
        calculateDate()
    }
}

function calculateDate(){


   const clear = setInterval(() => {

        const choosenDate = new Date(dateInput.value).getTime()
        const now = new Date().getTime();
        const beetweenDate = choosenDate-now;
    
        const days = Math.floor(beetweenDate/day);
        const hours = Math.floor((beetweenDate%day)/hour);
        const minutes = Math.floor((beetweenDate%hour)/minute);
        const seconds = Math.floor((beetweenDate%minute)/second);
    
        valueYerlestirme(days,hours,minutes,seconds)
        if(beetweenDate<0){
            showVakitGeldi();
            clearInterval(clear);
        }


    }, 1000);

    showScreen();


}

function valueYerlestirme(d,h,m,s){
    inputDay.textContent = d;
    inputHour.textContent = h;
    inputMinute.textContent = m;
    inputSecond.textContent = s;
}


function showScreen(){

    divNeKadarKaldi.classList.toggle("d-none");
    divKalanSure.classList.toggle("d-none");
}
function showVakitGeldi(){
    divVakitGeldi.classList.toggle("d-none")
    divNeKadarKaldi.classList.add("d-none")
    divKalanSure.classList.add("d-none")
}

recalculateButton.addEventListener("click",()=>{
    divNeKadarKaldi.classList.remove("d-none")
    divKalanSure.classList.add("d-none")
    divVakitGeldi.classList.add("d-none")
})