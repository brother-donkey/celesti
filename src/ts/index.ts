import { Surface, Placement, Rect } from "./types";
import { Player } from "./Player";
import { getBounds, getPosition, getRandomBoundedPlacement } from "./placement";

const gameView = document.querySelector(".game-container") as HTMLElement;
const playerView = document.createElement("div");
playerView.classList.add("player");
gameView.appendChild(playerView);

const surface: Surface = {
	bounds: getBounds(gameView),
	origin: getPosition(gameView),
	view: gameView,
};

const player = new Player(
	getPosition(playerView),
	getRandomBoundedPlacement(surface),
	playerView,
	surface
);

player.meander();

setTimeout(() => {
	player.stop();
}, 8000);

setTimeout(() => {
	player.meander();
}, 3000);
