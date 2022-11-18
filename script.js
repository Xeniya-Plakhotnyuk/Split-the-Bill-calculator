const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTips")
buttonTip.addEventListener("click", showTip);

function showTip (e){
    e.preventDefault();
    tip.style.display = "block";
}

function calculateAmount(e){
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const person = document.querySelector("#person").value;
    const tips = document.querySelector("#tip").value;
    

    if( bill === ""|| person ==="" || person < 1 ){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please, enter your info!',
                 })
    }

    let amountPerPerson = bill/person;

    let tipPerPerson = (bill* tips)/person;

    let sumPerson = amountPerPerson+tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    sumPerson = sumPerson.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = sumPerson;

document.querySelector(".thanks").style.display = 'block';

}


gsap.from ("h1",{
    x:-500,
})

gsap.from("form", {
    y: -1000, delay: .5, duration: .7,
})

gsap.from("#showTotalAmountToPay",{
    y:1000, delay: .8, duration: .7,
})

