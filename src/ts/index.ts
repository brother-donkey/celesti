import { getPosition } from "./position";
import { Player, Surface, Placement, Rect } from "./types";
import { readPlacement } from "./placement";

const gameView = document.querySelector(".game-container") as HTMLElement;
const playerView = document.createElement("div");
playerView.classList.add("player");
gameView.appendChild(playerView);

const playerWidth = 64;
const playerHeight = 64;

const surface: Surface = {
	bounds: getBounds(),
	origin: getPosition(gameView),
	view: gameView,
};

const player: Player = {
	origin: getPosition(playerView),
	placement: getPosition(playerView),
	view: playerView,
};

move(player, { x: 0, y: 0 });
readPlacement(player);

function getBounds(): Rect {
	const raw = gameView.getBoundingClientRect();
	return {
		left: Math.round(raw.left),
		right: Math.round(raw.right),
		bottom: Math.round(raw.bottom),
		top: Math.round(raw.top),
	};
}

function move(object: Player, moveTo: Placement) {
	fitToBounds();

	const transformedX = Math.round(moveTo.x - object.origin.x);
	const transformedY = Math.round(moveTo.y - object.origin.y);
	object.view.style.transform = `translate(${transformedX}px, ${transformedY}px)`;

	function fitToBounds() {
		const realX = moveTo.x + surface.origin.x;
		const realY = moveTo.y + surface.origin.y;
		moveTo.x = Math.max(
			Math.min(surface.bounds.right - playerWidth, realX),
			surface.bounds.left
		);
		moveTo.y = Math.max(
			Math.min(surface.bounds.bottom - playerWidth, realY),
			surface.bounds.top
		);
	}
}
