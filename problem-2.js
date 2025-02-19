
function  validContact( contact ) {
    if(typeof contact !== 'string'){
        return "Invalid";
    }
    if(contact.length === 11 && contact[0] === '0' 
        && contact[1] === '1' && !contact.includes(' ')){
        return true;
        }
    
    return false;    
}
const cont = validContact("01819234567");
console.log(cont);
