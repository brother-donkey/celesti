import { GamePiece, Placement, Surface, PlaceConfig, Size } from "./types";
import { getPosition } from "./placement";

const defaultConfig = {
	size: {
		height: 48,
		width: 48,
	},
};

export class Place implements GamePiece {
	view: HTMLElement;
	origin: Placement;
	size: Size;

	constructor(
		surface: Surface,
		public placement: Placement,
		public config: Partial<PlaceConfig> = defaultConfig
	) {
		config = { ...defaultConfig, ...config };
		this.size = config.size;
		this.view = document.createElement("div");
		this.view.classList.add("place");
		surface.view.appendChild(this.view);

		this.origin = getPosition(this.view);

		this.view.style.position = "absolute";
		this.view.style.top = `${placement.y}px`;
		this.view.style.left = `${placement.x}px`;

		this.view.style.width = `${this.size.width}px`;
		this.view.style.height = `${this.size.height}px`;
	}

	get center() {
		return {
			x: this.origin.x - this.size.width / 2,
			y: this.origin.y - this.size.height / 2,
		};
	}
}
