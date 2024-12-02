//Develop a JavaScript function displayTemperatureInCelsius 

function displayTemperatureInCelsius (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius
}


//(°F − 32) × 5/9
//(°C × 9/5) + 32

//that takes in a numerical Fahrenheit temperature reading 
//and converts it to Celsius, 
//returning the number representing the Celsius value.//

//Implement another function displayTemperatureInFahrenheit 

function displayTemperatureInFahrenheit (celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}



//that takes in a numerical Celsius temperature reading 
//and converts it to Farenheit, 
//returning the number representing the Farenheit value.//



//Create a function toggleTemperatureDisplay 

let isCelsius = true;
let currentTemperature = displayTemperatureInCelsius(1);


function toggleTemperatureDisplay () { 
    
    if(isCelsius == true) {
        let changeToF = displayTemperatureInFahrenheit(currentTemperature);
        isCelsius = false;
        console.log(currentTemperature);
        console.log(isCelsius);
        currentTemperature = changeToF;
        return `${changeToF} in Fahrenheit`;

    } else {
         let changeToC = displayTemperatureInCelsius(currentTemperature);
        isCelsius = true;
        currentTemperature = changeToC;
        return `${currentTemperature} in Celsius`;
    }

}



//that returns either Celsius or Fahrenheit depending on which was the last returned (if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa). 
//Start with a default of the last returned format being Celsius.//