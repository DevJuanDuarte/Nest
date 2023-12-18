//DECORADORES:
//Para poder utilizar los decoradores se debe modificar el archivo ts.config y agregar el campo dentro de compilerOptions con estado en true: "experimentalDecorators": true

//2.Creamos la clase con el mismo constructor al cual se le va a aplicar la clase, en este caso con el constructor de la clase Pokemon.
class NewPokemon {
  constructor(public readonly id:number, public name:string) {}

  speak(){
    console.log('NO QUIERO SALIR');
  }

  scream(){
    console.log('Dejame quieto!!!');
  }
}

//3. Se crea la funcion que es una funcion que tiene otra funcion, ahi recibimos la clase que podemos llamar para expandir la clase a la que le aplicamos el decorador.
const MyDecorator = ()=>{
  return (target:Function)=>{
    // console.log(target);
    return NewPokemon;
  }
}

//1.Se escribe el nombre del decorador en la clase o metodo que se quiere usar.
@MyDecorator()
export class Pokemom {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}`);
  }

  speak() {
    console.log(`${this.name} , ${this.name}`);
  }
}

export const charmander = new Pokemom(4, "Charmander ");

charmander.scream();
charmander.speak();
