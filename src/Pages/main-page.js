import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '../my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

setRootPath(MainPageGlobals.rootPath);

class MainPage extends PolymerElement {
	static get template() {
		return html`
			<style>
				:host {
					--app-primary-color: #4285f4;
					--app-secondary-color: black;
					display: block;
				}

				app-drawer-layout:not([narrow]) [drawer-toggle] {
					display: none;
				}

				app-header {
					color: #fff;
					background-color: var(--app-primary-color);
				}

				app-header paper-icon-button {
					--paper-icon-button-ink-color: white;
				}

				.drawer-list {
					margin: 0 20px;
				}

				.drawer-list a {
					display: block;
					padding: 0 16px;
					text-decoration: none;
					color: var(--app-secondary-color);
					line-height: 40px;
				}

				.drawer-list a.iron-selected {
					color: black;
					font-weight: bold;
				}

				.testClass {
					--circle-colour: green;
				}
			</style>

			<app-location route="{{route}}" url-space-regex="^[[rootPath]]">
			</app-location>

			<app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
			</app-route>

			<app-drawer-layout fullbleed="" narrow="{{narrow}}">
				<app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
					<app-toolbar>Menu</app-toolbar>
					<iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
						<a name="characterSheetCreator" href="[[rootPath]]characterSheetCreator">Character Sheet Creator</a>
					</iron-selector>
				</app-drawer>

				<app-header-layout has-scrolling-region="">

					<app-header slot="header" condenses="" reveals="" effects="waterfall">
						<app-toolbar>
							<paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
							<div main-title="">Character Sheets</div>
						</app-toolbar>
					</app-header>

					<iron-pages selected="[[page]]" attr-for-selected="name" role="main">
						<character-sheet name="characterSheet" number="4" title="Character Sheet">
							<p>New Character Sheet!</p>
						</character-sheet>
						<character-sheet-creator name="characterSheetCreator" title="Character Sheet Creator"></character-sheet-creator>
					</iron-pages>
				</app-header-layout>
			</app-drawer-layout>
		`;
	}

	static get properties() {
		return {
			page: {
				type: String,
				reflectToAttribute: true,
				observer: '_pageChanged'
			},
			routeData: Object,
			subroute: Object
		};
	}

	static get observers() {
		return [
			'_routePageChanged(routeData.page)'
		];
	}

	_routePageChanged(page) {
		if (['characterSheetCreator'].indexOf(page) !== -1) {
			this.page = page;
		} else {
			this.set('routeData.page', 'characterSheetCreator');
		}

		if (!this.$.drawer.persistent) {
			this.$.drawer.close();
		}
	}

	_pageChanged(page) {
		switch (page) {
			case 'characterSheetCreator':
			default:
				import('./character-sheet-creator');
				break;
		}
	}
}

window.customElements.define('main-page', MainPage);
