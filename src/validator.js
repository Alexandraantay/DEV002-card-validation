const validator = {
  isValid: function (creditCardNumber) {
    let reverseNumber = creditCardNumber.split("").reverse()
    console.log("entro a is valid" + reverseNumber);
    let result = 0;
    for (let i = 0; i < reverseNumber.length; i++) {
      if ((i + 1) % 2 === 0) {
        let resultadopordos = reverseNumber[i] * 2
        console.log("primer digito por dos" + resultadopordos)
        if (resultadopordos >= 10) {
          //arrayNumber[i]=arrayNumber[i].toString();
          let resultadosuma = resultadopordos - 9;
          console.log(reverseNumber[i], resultadosuma);
          result += parseInt(resultadosuma)
          console.log("suma de dígitos" + result)
        }
        else {
          result += resultadopordos
          console.log("digitos por dos" + result)
        }
      }
      else {
        result += parseInt(reverseNumber[i])
        console.log("posición" + result)
      }
    }
    console.log("resultado final" + result)
    if (result % 10 === 0) {
      return true;
    }
    else { return false }

  },


  maskify: function (creditCardNumber) {
    console.log(creditCardNumber)
    let lastNumbers = creditCardNumber.length;
    let maskNumbers = "";

    for (let i=0; i<lastNumbers-4; i++){
      maskNumbers += "#";
    }
    return maskNumbers + creditCardNumber.substring(lastNumbers-4, lastNumbers)
  }
  }


export default validator;
