import { GamePiece, Placement, Surface, Size } from "./types";
import { getPosition } from "./placement";

export class Place implements GamePiece {
	view: HTMLElement;
	origin: Placement;

	constructor(
		surface: Surface,
		public placement: Placement,
		public size: Size
	) {
		this.view = document.createElement("div");
		this.view.classList.add("place");
		surface.view.appendChild(this.view);

		this.origin = getPosition(this.view);

		this.view.style.position = "absolute";
		this.view.style.top = `${placement.y}px`;
		this.view.style.left = `${placement.x}px`;

		this.view.style.width = `${size.width}px`;
		this.view.style.height = `${size.height}px`;
	}

	get center() {
		return {
			x: this.origin.x - this.size.width / 2,
			y: this.origin.y - this.size.height / 2,
		};
	}
}
