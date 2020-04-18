interface GamePiece {
	readonly origin: Placement;
	readonly view: HTMLElement;
}

interface Moveable {
	placement: Placement;
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

export interface Player extends GamePiece, Moveable {}

interface Placement {
	x: number;
	y: number;
}
