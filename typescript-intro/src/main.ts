import "./style.css";
// import { setupCounter } from "./counter.ts";
// import { charmander } from "./bases/03-classes.ts";
import { charmander } from "./bases/04-injection.ts";



document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h1>Hola ${charmander.name}</h1>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
