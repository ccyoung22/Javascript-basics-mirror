// // Develop a JavaScript function applyDiscount
//  that calculates the final price after applying a 10 % discount on single purchases over £20.
//  This function should help increase the average purchase value by offering an immediate incentive.

console.log("hello world");

function applyDiscount(originalPrice) {
  if (originalPrice > 20) {
    return originalPrice * (1 - 0.1);
  } else {
    return "Only purchases over £20 are eligable for a discount";
  }
}

//Create a function called calculateLoyaltyPoints
function calculateLoyaltyPoints(purchasePrice, discount) {
  let customerSpend = purchasePrice;

  if (discount === false) {
    let loyaltyPoints = customerSpend;
    return loyaltyPoints;
  } else if (discount === true) {
    return "Discounted items are not eligable for loyalty points";
  }
}

//that takes in the purchase amount
//and returns 1 loyalty point for every dollar spent
//that checks to see that no discount was applied

function newApplyDiscount(amountSpent) {
  if (amountSpent > 20) {
    let overSpend = amountSpent - 20;
    let finalPrice = overSpend * (1 - 0.1) + 20;
    return finalPrice;
  } else {
    return "Only purchases over £20 are eligable for a discount";
  }
}

//Create a function called new Appply Discount ✅
//Take in the amount spent ✅
//create an if statement for spend over £20
//Work out the overspend after 20
//declare a variable for overspend (amountspent - 20)
//discount the overspend by 10%
//declare final price that add 20 back to the overspend back onto
