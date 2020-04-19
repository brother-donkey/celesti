import { Player } from "./player";
import { Placement, Rect, Surface, Size } from "./types";

export function getRandomBoundedPlacement(
	surface: Surface,
	multiplier = 1
): Placement {
	return {
		x: Math.random() * surface.bounds.right * multiplier,
		y: Math.random() * surface.bounds.bottom * multiplier,
	};
}

export function getBoundedCenter(
	surface: Surface,
	objectSize: Size
): Placement {
	return {
		x: (surface.bounds.right - surface.bounds.left - objectSize.width / 2) / 2,
		y: (surface.bounds.bottom - surface.bounds.top - objectSize.height) / 2,
	};
}

export function getPlacementFromObject(object: Player, relativeToPage = false) {
	const placement = Object.assign(object.placement);
	const regexp = /translate\((-?[\d|\.]*)\w*,?\s?(-?[\d|\.]*)\w*\)/;
	const transform = object.view.style.transform;
	let matches = regexp.exec(transform);
	if (!matches) {
		return object.placement;
	}
	const [_, x, y] = matches;

	if (x) {
		try {
			placement.x = Math.floor(parseFloat(x));
		} catch {
			console.log(`parsing x:${x} failed.`);
		}
	}
	if (y) {
		try {
			placement.y = Math.floor(parseFloat(y));
		} catch {
			console.log(`parsing y:${y} failed.`);
		}
	}

	if (relativeToPage) {
		return {
			x: placement.x + object.origin.x,
			y: placement.y + object.origin.y,
		};
	}

	return {
		x: placement.x,
		y: placement.y,
	};
}

export function getPosition(gameView: HTMLElement): Placement {
	const surfacePosition = gameView.getBoundingClientRect();
	return {
		x: Math.round(surfacePosition.left),
		y: Math.round(surfacePosition.top),
	};
}

export function getBounds(gameView: HTMLElement): Rect {
	const raw = gameView.getBoundingClientRect();
	return {
		left: Math.round(raw.left),
		right: Math.round(raw.right),
		bottom: Math.round(raw.bottom),
		top: Math.round(raw.top),
	};
}
