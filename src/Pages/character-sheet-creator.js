import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input';
import '../Components/main-stat.js';
import '../shared-styles.js';

class CharacterSheetCreator extends PolymerElement {
	static get template() {
		return html`
	<style include="shared-styles">
		:host {
			display: block;
		}
		.strength {
			--main-stat-colour: red;
		}
		.dexterity {
			--main-stat-colour: green;
		}
		.constitution {
			--main-stat-colour: orange;
		}
		.intelligence {
			--main-stat-colour: blue;
		}
		.wisdom {
			--main-stat-colour: yellow;
		}
		.charisma {
			--main-stat-colour: purple;
		}
		.flexInline {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.flexInline>* {
			display: flex;
			flex-grow: 1;
		}
	</style>

	<div class="card">
		<h1>[[title]]</h1>
		<div class="flexInline">
			<main-stat class="strength" stat="Strength"></main-stat>
			<main-stat class="dexterity" stat="Dexterity"></main-stat>
			<main-stat class="constitution" stat="Constitution"></main-stat>
			<main-stat class="intelligence" stat="Intelligence"></main-stat>
			<main-stat class="wisdom" stat="Wisdom"></main-stat>
			<main-stat class="charisma" stat="Charisma"></main-stat>
		</div>
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

window.customElements.define('character-sheet-creator', CharacterSheetCreator);
