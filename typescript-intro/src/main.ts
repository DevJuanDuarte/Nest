import "./style.css";
// import { setupCounter } from "./counter.ts";
// import { charmander } from "./bases/03-classes.ts";
import { charmander } from "./bases/06-decorators2.ts";



document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${charmander.name}
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
