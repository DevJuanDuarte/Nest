//DECORADORES: Son son funciones que depende donde se use expande una clase, un metodo o una propiedad.
//2. Se crea la clase con las propiedades que tiene la clase a la que vamos a expandir
export class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  speak(){
    console.log('No quiero salir!');
  }

  scream(){
    console.log('Dejame aqui!');
  }
}

//1. Se crea el decorador, en este caso es una funcion que retorna otra funcion.
const MyDecorator = () => {
  return (target: Function) => {
    //Retornamos la clase la cual tiene las propiedades de la clase a la que vamos a expandir.
    return NewPokemon;
  };
};

//3. Se llama al decorador encima de la clase a la que vamos a modificar.
@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  speak() {
    console.log(`${this.name.toUpperCase()}`);
  }

  scream() {
    console.log(`${this.name} , ${this.name}`);
  }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.scream();
charmander.speak();
