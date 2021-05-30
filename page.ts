import { playCustom } from './src/custom';
import { playDefault } from './src/default';
import { universe } from './src/universe';

const defaultView = document.querySelector(
	'#default > .bouncer-container'
) as HTMLElement;
const customView = document.querySelector(
	'#custom > .bouncer-container'
) as HTMLElement;
const universeView = document.querySelector(
	'#universe > .bouncer-container'
) as HTMLElement;

playDefault(defaultView);

playCustom(customView, {
	staticBackground: 'white',
});

universe(universeView);
