import { Surface } from "./types";
import { getBounds, getPosition } from "./placement";

const gameView = document.querySelector(".game-container") as HTMLElement;

export const surface: Surface = {
	bounds: getBounds(gameView),
	origin: getPosition(gameView),
	view: gameView,
};
