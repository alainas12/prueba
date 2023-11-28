function dividirNumeros(numero1, numero2){
    try {
        var resultadoDivision = numero1/numero2;
    } catch (error) {
        return "Error:" + error.message;
    }
    
    
    return resultadoDivision;
}
var resultadoDivision = dividirNumeros(2,0);
console.log(resultadoDivision);