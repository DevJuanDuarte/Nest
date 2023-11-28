import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  //Getters:
  public get imgUrl(): string {
    return `https://pokemon.com/${this.id}`;
  }

  constructor(public readonly id: number, public name: string) {
    console.log("Hola");
  }

  //Metodo:
  speak() {
    console.log(`${this.name.toUpperCase()}`);
  }

  onSpeak() {
    console.log(`${this.id}`);
  }

  async getMoves(): Promise<Move[]> {
    // return 10;
    const {data} = await axios.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4");
    console.log(data.moves);
    return data.moves;
  }
}

//Llama a la clase:
export const charmander = new Pokemon(4, "Charmander");

//Llama los metodos:
// charmander.speak();
// charmander.onSpeak();

// console.log(charmander.imgUrl);

charmander.getMoves();
