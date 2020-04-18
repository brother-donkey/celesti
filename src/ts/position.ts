export function getPosition(gameView: HTMLElement): Placement {
	const surfacePosition = gameView.getBoundingClientRect();
	return {
		x: Math.round(surfacePosition.left),
		y: Math.round(surfacePosition.top),
	};
}
