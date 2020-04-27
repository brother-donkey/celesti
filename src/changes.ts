import { namedColors } from './colors';

export function getRandomNamedColor() {
	// There are 148 named HTML colors
	return namedColors[Math.floor(Math.random() * 148)];
}

export function ossilateColor(view: HTMLElement, interval: number) {
	setInterval(() => {
		const color = getRandomNamedColor();
		view.style.backgroundColor = color;
		view.style.borderColor = color;
	}, interval);
}
