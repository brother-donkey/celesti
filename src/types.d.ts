export interface CelestialBody {
	readonly origin: Placement;
	readonly view: HTMLElement;
}

export interface Size {
	height: number;
	width: number;
}

export interface Mover {
	placement: Placement;
	speed: number;
}

export interface Surface extends CelestialBody {
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

export interface PlayerConfig {
	size: Size;
	speed: number;
	color: string;
}

export interface PlaceConfig {
	size: Size;
	color: string;
}
