import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';

class CharacterSheet extends PolymerElement {
	static get template() {
		return html`
	<style include="shared-styles">
		:host {
			display: block;
			padding: 10px;
		}
	</style>

	<div class="card">
		<div class="circle">[[number]]</div>
		<h1>[[title]]</h1>
		<slot></slot>
	</div>
	`;
	}

	static get properties() {
		return {
			number: Number,
			title: String
		};
	}
}

window.customElements.define('character-sheet', CharacterSheet);
