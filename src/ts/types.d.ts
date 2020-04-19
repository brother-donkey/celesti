export interface GamePiece {
	readonly origin: Placement;
	readonly view: HTMLElement;
}

export interface Moveable {
	placement: Placement;
	speed: number;
}

export interface Surface extends GamePiece {
	bounds: Rect;
}

export interface Rect {
	top: number;
	left: number;
	bottom: number;
	right: number;
}

export interface Placement {
	x: number;
	y: number;
}
