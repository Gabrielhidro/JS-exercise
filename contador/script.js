const btns = document.querySelectorAll(".btn")
const number = document.querySelector(".number")
let count = 0


btns.forEach(function(btn){
    btn.addEventListener("click", handleClick)
})

function handleClick (event){
    const btnClass = event.currentTarget.classList

    if(btnClass.contains("increase")){
        console.log(count++);;
    }
    else if(btnClass.contains("decrease")){
        count--;
    }
    else {
        count = 0
    }

    number.innerHTML = count

    if(count < 0){
        number.style.color = "red";
    }
    else if(count > 0){
        number.style.color = "green";
    }
    else {
        number.style.color = "black";
    }
}

