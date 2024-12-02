// Write a JavaScript function convertGBPtoEUR
    function convertGBPtoEUR(pounds) {
       let euros = pounds * 1.21;
        return euros
    }
// that takes in a specified amount in £, 
// and converts it to € using a given exchange rate. 
// The function should return the converted amount.

// Write another function convertGBPtoUSD 
    function convertGBPtoUSD (pounds) {
        let usd = pounds * 1.27;
        return usd
    }
// that takes in a specified amount in £, 
// and converts it to $ using a given exchange rate. 
// It should behave in a very similar way to the previous function.

// Write a function convertGBPToCurrency 
    function convertGBPToCurrency (type, pounds) {
        let conversion = pounds;
        if (type == "USD") {
          conversion = convertGBPtoUSD(pounds);
            console.log(type);
            console.log(pounds);
        }
        else if (type == "EUR") {
           conversion = convertGBPtoEUR(pounds);
        }
        else {
            conversion = null;
        }
        return conversion
    }
// which takes in both a currency code ("EUR" or "USD") 
// and an amount of £ to convert. 
// It should, based on which code has been entered, use one of your previously written functions to return the correct conversion. 
// If an unknown code is entered, it should return null.