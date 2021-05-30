import { playCustom } from './src/custom';
import { playDefault } from './src/default';
import { universe } from './src/universe';
import { wanderer } from './src/wanderer';

const defaultView = document.querySelector(
	'#default > .bouncer-container'
) as HTMLElement;
const customView = document.querySelector(
	'#custom > .bouncer-container'
) as HTMLElement;
const universeView = document.querySelector(
	'#universe > .bouncer-container'
) as HTMLElement;
const wandererView = document.querySelector(
	'#wanderer > .bouncer-container'
) as HTMLElement;

playDefault(defaultView);

playCustom(customView, {
	staticBackground: 'white',
});

universe(universeView);
wanderer(wandererView);
