import { Player } from "./types";

export function readPlacement(object: Player) {
	const placement = Object.assign(object.origin);
	const regexp = /translate\((-?[\d|\.]*)\w*,?\s?(-?[\d|\.]*)\w*\)/;
	const transform = object.view.style.transform;
	let matches = regexp.exec(transform);
	if (!matches) {
		return;
	}
	const [_, x, y] = matches;
	if (x) {
		try {
			placement.x = Math.floor(parseFloat(x));
		} catch {
			console.log(placement.x);
		}
	}
	if (y) {
		try {
			placement.x = Math.floor(parseFloat(x));
		} catch {
			console.log(placement.x);
		}
	}
}
