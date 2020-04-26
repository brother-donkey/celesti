import { namedColors } from './colors';

function randomColor() {
	// There are 148 named HTML colors
	return namedColors[Math.floor(Math.random() * 148)];
}

export function ossilateColor(view: HTMLElement, interval: number) {
	setInterval(() => {
		const color = randomColor();
		view.style.backgroundColor = color;
		view.style.borderColor = color;
	}, interval);
}
