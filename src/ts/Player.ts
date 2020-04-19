import { Moveable, GamePiece, Placement, Rect, Surface } from "./types";
import { getPlacementFromObject, getRandomBoundedPlacement } from "./placement";

export class Player implements Moveable, GamePiece {
	private _meandering: false;
	private _meanderInterval: number;

	constructor(
		public readonly origin: Placement,
		public placement,
		public readonly view: HTMLElement,
		public readonly surface: Surface,
		public speed: number = 2,
		public width = 48,
		public height = 48
	) {
		this.move(placement);
		this.view.style.width = `${width}px`;
		this.view.style.height = `${height}px`;
		this.view.style.transition = `all ${this.speed}s linear`;
	}

	public move(moveTo: Placement) {
		this.fitToBounds(moveTo);

		const transformedX = Math.round(moveTo.x - this.origin.x);
		const transformedY = Math.round(moveTo.y - this.origin.y);
		this.placement = {
			x: transformedX,
			y: transformedY,
		};
		this.view.style.transform = `translate(${transformedX}px, ${transformedY}px)`;
	}

	public fitToBounds(moveTo: Placement) {
		const realX = moveTo.x + this.surface.origin.x;
		const realY = moveTo.y + this.surface.origin.y;
		moveTo.x = Math.max(
			Math.min(this.surface.bounds.right - this.width, realX),
			this.surface.bounds.left
		);
		moveTo.y = Math.max(
			Math.min(this.surface.bounds.bottom - this.width, realY),
			this.surface.bounds.top
		);
	}

	public meander(extremely: number = 1) {
		if (this._meandering) {
			return;
		}

		this._meanderInterval = setInterval(() => {
			this.move(getRandomBoundedPlacement(this.surface, extremely));
		}, this.speed * 1000);
	}

	public stop() {
		this._meandering = false;
		clearInterval(this._meanderInterval);
	}
}
