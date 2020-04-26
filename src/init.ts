const stylesheet = `
	.bouncer-container {
		margin: 0;
		padding: 0;
		max-width: 100%;
		min-height: 100vh;
		position: relative;
		background: white;
		overflow: hidden;
		background: indigo;
		transition: all 1s linear;
	}

	.bouncer-container * {
		box-sizing: border-box;
		border-width: 0.5rem !important;
		outline-width: 0.5rem !important;
	}

	.player-1 {
		animation-timing-function: cubic-bezier(0.17, 0.67, 0, 1.58) !important;
	}

	.player {
		height: 3rem;
		width: 3rem;
		border: 1px solid transparentize(slateblue, 0.75);
		background: transparentize(slateblue, 0.25);
		outline: 1px;
		position: absolute;
		transform-origin: center;
		border-radius: 100%;
	}

	.place {
		border: 1px solid transparentize(green, 0.75);
		background: transparentize(green, 0.25);
		border-radius: 100%;
		transition: all 1s linear;
	}

	@keyframes bouncer-orbit-clockwise {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes bouncer-orbit-counterclockwise {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(-360deg);
		}
	}
`;

export function init(defaultStyle: string = stylesheet) {
	const styleTag = document.createElement('style');
	styleTag.type = 'text/css';
	styleTag.appendChild(document.createTextNode(stylesheet));
	document.head.appendChild(styleTag);
}
