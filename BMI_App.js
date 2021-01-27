{
    // variable declarations

    let today = document.getElementById("date");
    let Calculate = document.getElementById("Calculate");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let text = document.getElementById("text");

    // to display time
    var time = new  Date(Date.now());
    time = time.toLocaleTimeString();
    today.innerHTML = "Time: " + time ;

    // function to calculate Bmi and dsiplay total
    Calculate.onclick = function (){
        let total = (weight.value/height.value/ height.value) * 10000;
        total = total.toFixed(1);
        if(isNaN(weight.value) || weight.value === ""){
            weight.style.border = "1px solid red";
            alert("please provide a valid number");
            weight.value = "";
            height.value = "";
        }

        else if(isNaN(height.value) || height.value === "") {
            height.style.border = "1px solid red";
            alert("please provide a valid number");
            weight.value = "";
            height.value = "";
        }
        else {

        }

        if (total <= 18.5){
            text.style.backgroundColor = "white";
            text.innerHTML = "Your BMI is " + total + " , you are Underweight, this can lead to anorexia. <br/> Try to maintain a healthy diet.";
        }

        else if (total > 18.5 && total < 24.9){
            text.style.backgroundColor = "white";
            text.innerHTML = "Your BMI is " + total + " , you have a healthy weight, keep it up and monitor regularly.";
        }

        else if (total >= 24.9){
            text.style.backgroundColor = "white";
            text.innerHTML = "Your BMI is " + total + " , you are overweight. <br/> Try to maintain a healthy diet and some exercise to keep fit.";
            
        }
        else{

        }
    }
}