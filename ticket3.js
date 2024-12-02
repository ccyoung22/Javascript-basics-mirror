/* --- MVP 1 --- */

//Develop a JavaScript function applyDiscount 
// that calculates the final price after applying a 10% discount on single purchases over £20. 
//This function should help increase the average purchase value by offering an immediate incentive.

/* --- Customer Change --- */
//BookNook need to make more money, so the discounts function needs to change. 
// applyDiscount should now only apply the discount to the overspend above £20

function applyDiscount (price) {
    if (price > 20) {
        discount = ((price -20)/ 100) * 10; // price minus 20 to account for the new overspend criteria
        newPrice = price - discount;
        return newPrice;
    }
    else {
        return price;
    }
}

/* --- MVP 2 --- */

// Create a function calculateLoyaltyPoints 
// that awards points based on the purchase amount, 
// where every dollar spent earns 1 point if no discount is applied. 
// This function aims to build a foundation for a future loyalty program.

// Setting a global variable to store loyalty points
loyaltyPoints = 0;

function calculateLoyaltyPoints (price) {
    if (price <= 20) {
        loyaltyPoints += Math.floor(price); // rounding down to add a point for every full dollar spent
        return loyaltyPoints;
    } 
    return loyaltyPoints;
}

