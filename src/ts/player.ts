import { Moves, GamePiece, Placement, Rect, Surface } from "./types";
import { getPosition, getRandomBoundedPlacement } from "./placement";
import { Place } from "./place";

export class Player implements Moves, GamePiece {
	private _meandering = false;
	private _orbiting = false;
	private _meanderInterval: number;
	public view: HTMLElement;
	public origin: Placement;

	constructor(
		public placement,
		public readonly surface: Surface,
		public speed: number = 2,
		public width = 48,
		public height = 48
	) {
		this.view = document.createElement("div");
		this.view.classList.add("player");
		this.surface.view.appendChild(this.view);

		this.origin = getPosition(this.view);

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

	public orbit(
		object: Place,
		direction: "clockwise" | "counterclockwise",
		distance = 44
	) {
		this._orbiting = true;
		// this.
		this.view.style.transform = ``;
		this.view.style.transformOrigin = `${object.size.width + distance}px ${
			object.size.height + distance
		}px`;
		this.view.style.top = `${
			object.placement.y - object.size.height / 2 - distance
		}px`;
		this.view.style.left = `${
			object.placement.x - object.size.width / 2 - distance
		}px`;
		this.view.style.animation = `orbit-${direction} 8s linear infinite`;
	}
}
