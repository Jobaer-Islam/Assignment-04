function  willSuccess( marks ) {
    if( !Array.isArray( marks ) ){
        return "Invalid" ;
    }
    let p = 0;
    let f = 0;
    for( let i = 0; i < marks.length; i++ ){
        if( marks[i] >= 50){
            p++;
        }else{
            f++;
        }
    }
    return p > f;

}
const mark = willSuccess( "100 , 100");
console.log(mark)