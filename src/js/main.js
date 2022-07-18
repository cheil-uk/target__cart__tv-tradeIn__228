// ==========================================================================
//  This is a boilerplate to use for target activities
//
//	URL example: add in url of project for visibility here
// ==========================================================================

// ==========================================================================
// Scripts, helper widgets - import below
// ==========================================================================

var cheillondon = cheillondon || {};

cheillondon.targetBoilerplate = (function () {

	'use strict';

	var main = {

		// ==========================================================================
		// Variables and config Properties add below
		// ==========================================================================


		//Init
		init: function () {
			main.doEverythingTimeout();
		},


		// ==========================================================================
		// Checking jQuery
		// ==========================================================================
		doEverythingTimeout: function () {
			var _self = this;

			console.log('XXX - doEverythingTimeout');

			setTimeout(function () {
				if (window.$) {
					console.log('doEverythingTimeout - jQuery loaded');
					main.kickoff();
					// main.tagging();
					main.appendNewStyle();

				} else {
					console.log('no jquery')
					_self.doEverythingTimeout();
				}
			}, 6000)
		},


		// ==========================================================================
		// Adding style
		// ==========================================================================
		appendNewStyle: function () {

			/* FYI: the CSS code is in separated file, in SCSS format that generates the CSS file. After, the gulp file finds the [CSS] and replaces with minified code from file */

			//To insert minified inline string uncomment this variable and paste here
			//Else, use default uncommented variable
			// var _css = '';

			var _css = '[[CSS]]';

			//
			// Adding style definitions to DOM
			// --------------------------------------------------------------------------
			var _head = document.head || document.getElementsByTagName('head')[0],
				_style = document.createElement('style');

			_style.type = 'text/css';
			if (_style.styleSheet) { // This is required for IE8 and below.
				_style.styleSheet.cssText = _css;
			} else {
				_style.appendChild(document.createTextNode(_css));
			}
			_head.appendChild(_style);

		},



		// ==========================================================================
		// When page is already loaded we need to add the new elements
		// ==========================================================================
		kickoff: function () {

		console.log('we have kickoff') // this is purely for testing
    const cartWrappers = document.querySelectorAll('.delivery-info-description-wrapper');

    const spreadsheetSkus = [
					"RF23R62E3SR/EU","RF50A5002S9/EU","RF23R62E3B1/EU","RF24R7201B1/EU","RF24R7201SR/EU","RF65A967FS9/EU","RF65A967FB1/EU","RF65A977FB1/EU","RF65A977FSR/EU","RF23BB860EQNEU","RB34A6B2ECS/EU","RB34A6B2ECE/EU","RB34A6B2E22/EU","RB34A6B2E12/EU","RB34A6B2E48/EU","RB38A7B53S9/EU","RB38A7B53B1/EU","RB38A7B6BB1/EU","RL38A776ASR/EU","RB38T633ESA/EU","RB38T602CS9/EU","RB38T602CWW/EU","RB38T605DB1/EU","RL4363SBASL/EU","RL4363SBAB1/EU","RB36R8839SR/EU","RB36R8899SR/EU","RZ32A74A501/EU","RR39A74A301/EU","RZ32A74A5CE/EU","RZ32A74A5CS/EU", "RR39A74A3CE/EU",

					"RR39A74A3CL/EU","RZ32A74A5CL/EU","RR39A74A322/EU","RZ32A74A522/EU","RZ32A74A512/EU","RZ32A74A541/EU","RZ32A74A539/EU","RZ32A74A548/EU","RR39A74A312/EU","RR39A74A339/EU","RR39A74A341/EU","RR39A74A348/EU","RS67A8810S9/EU","RS67A8811S9/EU","RS68A8820S9/EU","RS68A8830S9/EU","RS68A8830B1/EU","RS68A8840B1/EU","RH68B8830S9/EU","RH68B8830B1/EU","RS6HA8880S9/EU","RH69B8931S9/EU","RH69B8031S9/EU","RH69B8941S9/EU","RH69B8931B1/EU","RS6HA8891SL/EU",

					"DV90T6240LH/S1","DV90T6240LN/S1","DV90T8240SH/S1","DV90BB9445GBS1","DV90BB9445GHS1","DV90T8240SX/S1",

					"WD10T654DBH/S1","WD10T654DBN/S1","WD90T984DSH/S1","WD90T984DSX/S1","WW11BB744DGES1","WW10T684DLH/S1","WW10T684DLN/S1","WW11BB944DGHS1","WW11BB944DGBS1","WW90T854DBH/S1","WW90T854DBX/S1","WW90T986DSH/S1","WW90T986DSX/S1",
				]

        cartWrappers.forEach((cartWrapper) => { // Loop through each cartWrapper

            for (const skus in spreadsheetSkus) { // Loop through each sku
            const currentCartSku = cartWrapper.querySelector('.info-left-code');
                if (Object.hasOwnProperty.call(spreadsheetSkus, skus)) { // Check if sku is in spreadsheet
                const spreadsheetSkuValue = spreadsheetSkus[skus];
                    if ( currentCartSku.innerText === spreadsheetSkuValue ) {
                        const tvTradeInContainer = document.createElement('div');
                        tvTradeInContainer.classList.add('tv-trade-in-container');
                        tvTradeInContainer.innerHTML =
                        `<p><strong>Trade Up</strong> : Delivery ,collection and recycling of your old Samsung appliance is included for free with the ‘Delivery Only’ option . Please select another if you would like any additional services</p>`;
                        cartWrapper.append(tvTradeInContainer);
                    }
                }
            }
        });



		},


		// ==========================================================================
		// Set Events
		// ==========================================================================
		setEvents: function (elm = '') {

			console.log('XXX - setEvents: ' + elm);

			switch (elm) {
				case 'modal':
					//code to open modal;
					break;
				case 'financePopup':
				//code to open something else;
				default:
					break;
			}



		},

		resizeWindow: function () {
			// as new elements added to panel we need to resize window to activate amend height of Product Panels
			setTimeout(function () {
				$(window).resize();
				console.log('window resized');
			}, 100);
		},

		tagging: function () {
			function addTagging(el, attrs) {
            for(let key in attrs) {
            el.setAttribute(key, attrs[key]);
            }
        }

        function tagging(data) {
            s.linkTrackVars = "eVar41,events";
            s.linkTrackEvents = "scAdd,scView";
            s.events = "scAdd,scView";
            s.eVar41 = data;
            s.tl(this, 'o');
        };
        const cartWrappers = document.querySelectorAll('.delivery-info-description-wrapper');
								const continueBtn = document.querySelector(".cx-summary-continueBtn");

        cartWrappers.forEach((cartWrapper) => {
            cartWrapper.querySelectorAll('.info-right-checkbox-wrapper').forEach((x) => {
															const input = x.children[0].children[0];
															const inputText = x.children[0].children[1].innerText
															addTagging(input,
															{ "data-omni-type"    : "microsite",
																			"ga-ac"           : "pd buying tool",
																			"ga-ca"           : "option input"
															});
															input.onclick = () => {
																tagging(input.getAttribute('data-omni-type'));
															}
											})
        })

								addTagging(continueBtn,{
									"data-omni-type"  : "microsite",
									"ga-ac"           : "pd buying tool",
									"ga-ca"           : "option input"
								})

								continueBtn.onclick = () => {
										tagging(continueBtn.getAttribute('data-omni-type'));
									}
		},


	};
	return {
		main: main
	};

})();

cheillondon.targetBoilerplate.main.init();

