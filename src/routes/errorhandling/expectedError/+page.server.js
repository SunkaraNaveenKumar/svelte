import { error } from '@sveltejs/kit';

export function load() {
	throw error(420, 'Enhance your calm'); 
    // if we dont +error.js file than this 420 Enhance your calm message will be shown on the ui
}
