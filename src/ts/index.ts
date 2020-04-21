import { ossilateColor } from "./changes";
import { generatePlayers, randomRotation } from "./generate";
import { Place } from "./place";
import { getBoundedCenter, getRandomBoundedPlacement } from "./placement";
import { Player, player1 } from "./player";
import { surface } from "./surface";

const player1Size = Math.floor(Math.random() * 25) + 8;

// create player 1
new Player(getRandomBoundedPlacement(surface), surface, {
	size: {
		height: player1Size,
		width: player1Size,
	},
});

player1.view.classList.add("player-1");

player1.meander();

const centeredPlace = new Place(
	surface,
	getBoundedCenter(surface, { height: 88, width: 88 }),
	{ size: { height: 96, width: 96 } }
);

const places = [
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface)),
	new Place(surface, getRandomBoundedPlacement(surface), {
		size: { height: 192, width: 192 },
	}),
	centeredPlace,
];

places.forEach((place, i) => ossilateColor(place.view, (i + 1) * 1000));
ossilateColor(player1.view, 500);
// player1.meander();

const staticPlayers = generatePlayers(surface, places);

changeRotation();

function changeRotation() {
	let evenOdd = Math.floor(Math.random() * 3);
	setInterval(() => {
		if (evenOdd % 2 === 0) {
			player1.orbit(centeredPlace, randomRotation(), 44);
		} else if (evenOdd % 3 === 0) {
			player1.meander();
		} else {
			player1.orbit(
				places[Math.floor(Math.random() * 5)],
				randomRotation(),
				Math.floor(Math.random() * 88)
			);
		}
		evenOdd++;
	}, 7000);
}

// player1.stop();

setTimeout(() => {
	staticPlayers.forEach((player: Player, i) => {
		const direction =
			Math.floor(Math.random() * 2) % 2 === 0
				? "clockwise"
				: "counterclockwise";
		// player.move(player.origin);
		player.orbit(centeredPlace, direction, i * Math.random() * 25);
	});
}, 12000);
