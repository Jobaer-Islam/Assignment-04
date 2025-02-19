
function calculateVAT( price ) {
    if(typeof price != "number" || price < 0){
        return "Invalid";
    }
    return price * 0.075;   
}
 const result =  calculateVAT(1500);
 console.log(result);
