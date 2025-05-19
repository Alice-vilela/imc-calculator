const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const wheight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    
    const bmi = (wheight / (height * height)).toFixed(1);
    
    const value = document.getElementById("value");
    let description = "";

    document.getElementById("infos").classList.remove("hidden"); 

    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        description = "Você está no peso ideal!";
    } else if (bmi > 25 && bmi <= 29.9) {
        description = "Atenção! Você está com sobrepeso!";
    } else if (bmi > 30 && bmi <= 34.9) {
        description = "Cuidado! Você está com obesidade moderada!";
    } else if (bmi > 35 && bmi <= 39.9) {
        description = "Cuidado! Você está com obesidade severa!";
    } else {
        description = "Cuidado! Você está com obesidade mórbida!";
    }

    value.textContent = bmi.replace(".", ",");
    document.getElementById("description").textContent = description;
});
