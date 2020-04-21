import { Place } from "./place";
import { getPosition, getRandomBoundedPlacement } from "./placement";
import {
	GamePiece,
	Moves,
	Placement,
	PlayerConfig,
	Size,
	Surface,
} from "./types";

const defaultConfig = {
	speed: 2,
	size: {
		height: 48,
		width: 48,
	},
};

let staggerCount = 0;

function getStaggerCounter() {
	const stagger = staggerCount;
	staggerCount++;
	if (staggerCount > 15) {
		staggerCount = 0;
	}
	return stagger;
}

export let player1: Player;

export class Player implements Moves, GamePiece {
	private _meandering = false;
	private _orbiting = false;
	private _meanderInterval: number;
	public view: HTMLElement;
	public origin: Placement;
	public size: Size;
	public speed: number;
	public _staggering: number;

	constructor(
		public placement,
		public readonly surface: Surface,
		config: Partial<PlayerConfig> = defaultConfig
	) {
		if (!player1) {
			player1 = this;
		}
		config = { ...defaultConfig, ...config };
		this.size = config.size;
		this.speed = config.speed;
		this.view = document.createElement("div");
		this.view.classList.add("player");
		this.surface.view.appendChild(this.view);
		this._staggering = getStaggerCounter();
		staggerCount++;

		this.origin = getPosition(this.view);

		this.move(placement);
		this.view.style.width = `${this.size.width}px`;
		this.view.style.height = `${this.size.height}px`;
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
			Math.min(this.surface.bounds.right - this.size.width, realX),
			this.surface.bounds.left
		);
		moveTo.y = Math.max(
			Math.min(this.surface.bounds.bottom - this.size.width, realY),
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
		staggerCount++;
		this._orbiting = true;
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
		this.view.style.animation = `orbit-${direction} ${
			8 + this._staggering
		}s linear infinite`;
	}
}
