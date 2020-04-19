import { Surface, Placement, Rect } from "./types";
import { Player } from "./player";
import {
	getBounds,
	getPosition,
	getRandomBoundedPlacement,
	getBoundedCenter,
} from "./placement";
import { Place } from "./place";

const gameView = document.querySelector(".game-container") as HTMLElement;

const surface: Surface = {
	bounds: getBounds(gameView),
	origin: getPosition(gameView),
	view: gameView,
};

const player1 = new Player(getRandomBoundedPlacement(surface), surface);
const player2 = new Player(getRandomBoundedPlacement(surface), surface);

// setTimeout(() => {
// 	player.stop();
// }, 8000);

// setTimeout(() => {
// 	player.meander();
// }, 3000);

// const places = [];

// for (let i = 0; i < 16; i++) {
// 	places.push(new Place(surface, getRandomBoundedPlacement(surface), 88, 88));
// }

const centeredPlace = new Place(
	surface,
	getBoundedCenter(surface, { height: 88, width: 88 }),
	{ height: 96, width: 96 }
);

player1.orbit(centeredPlace, "clockwise", 44);
player2.orbit(centeredPlace, "counterclockwise", 88);
