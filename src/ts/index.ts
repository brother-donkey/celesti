import { playDefault } from "./default";
import { init } from "./init";

init();
const gameView = document.querySelector(".bouncer-container") as HTMLElement;
playDefault(gameView);
