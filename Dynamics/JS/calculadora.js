
const var1 =2;
const var2=10;

class Calculadora{

    suma(var1,var2)
    {
      let resultado = var1 + var2;
      console.log("La suma de " + var1 + " y " + var2 + " es: " + resultado);  
    }  

    resta(var1,var2)
    {
        let resultado = var1 - var2;
        console.log("La resta de " + var1 + " y " + var2 + " es: " + resultado);

    }

    mulplicacion(var1,var2)
    {
       let resultado = var1 * var2;
       console.log("La multiplicacion de " + var1 + " y " + var2 + " es: " + resultado);

    }

    division(var1,var2)
    {
        let resultado = var1 / var2;
        console.log("La division de " + var1 + " y " + var2 + " es: " + resultado);
    }
}

let casio = new Calculadora ()

casio.suma(var1,var2);
casio.resta(var1,var2);
casio.mulplicacion(var1,var2);
casio.division(var1,var2);


