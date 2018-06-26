import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input';

class MainStat extends PolymerElement {
	static get template() {
		return html`
	<style>
		:host {
			display: flex;
		}
		.circle {
			width: 50px;
			height: 50px;
			border: 20px solid var(--main-stat-colour, red);
			border-radius: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-right: 10px;
		}
		.mainStat {
			width: 80%;
			text-align: center;
			margin-top: -30%;
			--paper-input-container-underline: {
				display: none;
			}
			--paper-input-container-disabled: {
				opacity: 1;
			}
		}
		.secondaryStat {
			width: 20%;
			--paper-input-container-disabled: {
				opacity: 1;
			}
		}
		h2 {
			margin: 0;
		}
		label {
			font-size: 12px;
		}
		.flexColumn {
			display: flex;
			flex-direction: column;
		}
		.flex {
			display: flex;
		}
	</style>

	<div class="circle">
		<paper-input class="mainStat" disabled$="[[readonly]]" required value="{{value}}"></paper-input>
	</div>
	<div class="flexColumn">
		<h2>[[stat]]</h2>
		<div class="flex">
			<label>Saving Throw</label>
			<paper-input class="secondaryStat" disabled$="[[readonly]]" value="{{value2}}"></paper-input>
		</div>
	</div>
	`;
	}

	static get properties() {
		return {
			stat: String,
			value: {
				type: Number,
				value: 0
			},
			readonly: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			}
		};
	}
}

window.customElements.define('main-stat', MainStat);
