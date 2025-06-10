//Este archivo es para que puedan realizar los ejercicios sobre POO

class Animal
{
    constructor(weight, numeroPatas, color, altura, posicion)
    {
        this.peso = weight;
        this.numeroPatas = numeroPatas;
        this.color = color;
        this.altura = altura;
        this.estaVivo = true;
        this.posicion = posicion;
    }
    avanzar()
    {
        this.posicion += 1;
        console.log(this.posicion);
    }
    crecer()
    {
        this.altura += 10;
        this.peso += 2;

    }
    comer(comida)
    {
        console.log("estoy comiendo " + comida);
        //console.log(`estoy comiendo ${comida}`);
        this.peso += 4;
    }
}

let majolote = new Animal(50, 4, "Rosa", 15, 1);
