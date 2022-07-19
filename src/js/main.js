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
					// main.trackElementMutations();
					main.appendNewStyle();
					// main.trackElementMutations();

					$(document).on('change', function() {
						setTimeout(() => {
							main.kickoff();
						}, 1000)
					});

				} else {
					console.log('no jquery')
					_self.doEverythingTimeout();
				}
			}, 1500)
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
    const cartWrappers = document.querySelectorAll('.cart-item__services');


    const spreadsheetSkus = [
    	"RF23R62E3SR/EU","RF50A5002S9/EU","RF23R62E3B1/EU","RF24R7201B1/EU","RF24R7201SR/EU","RF65A967FS9/EU","RF65A967FB1/EU","RF65A977FB1/EU","RF65A977FSR/EU","RF23BB860EQNEU","RB34A6B2ECS/EU","RB34A6B2ECE/EU","RB34A6B2E22/EU","RB34A6B2E12/EU","RB34A6B2E48/EU","RB38A7B53S9/EU","RB38A7B53B1/EU","RB38A7B6BB1/EU","RL38A776ASR/EU","RB38T633ESA/EU","RB38T602CS9/EU","RB38T602CWW/EU","RB38T605DB1/EU","RL4363SBASL/EU","RL4363SBAB1/EU","RB36R8839SR/EU","RB36R8899SR/EU","RZ32A74A501/EU","RR39A74A301/EU","RZ32A74A5CE/EU","RZ32A74A5CS/EU", "RR39A74A3CE/EU",

			"RR39A74A3CL/EU","RZ32A74A5CL/EU","RR39A74A322/EU","RZ32A74A522/EU","RZ32A74A512/EU","RZ32A74A541/EU","RZ32A74A539/EU","RZ32A74A548/EU","RR39A74A312/EU","RR39A74A339/EU","RR39A74A341/EU","RR39A74A348/EU","RS67A8810S9/EU","RS67A8811S9/EU","RS68A8820S9/EU","RS68A8830S9/EU","RS68A8830B1/EU","RS68A8840B1/EU","RH68B8830S9/EU","RH68B8830B1/EU","RS6HA8880S9/EU","RH69B8931S9/EU","RH69B8031S9/EU","RH69B8941S9/EU","RH69B8931B1/EU","RS6HA8891SL/EU",

			"DV90T6240LH/S1","DV90T6240LN/S1","DV90T8240SH/S1","DV90BB9445GBS1","DV90BB9445GHS1","DV90T8240SX/S1",

			"WD10T654DBH/S1","WD10T654DBN/S1","WD90T984DSH/S1","WD90T984DSX/S1","WW11BB744DGES1","WW10T684DLH/S1","WW10T684DLN/S1","WW11BB944DGHS1","WW11BB944DGBS1","WW90T854DBH/S1","WW90T854DBX/S1","WW90T986DSH/S1","WW90T986DSX/S1",
    ];

    const termsandconditions = "By proceeding to purchase and take advantage of this promotion, you accept the following: The trade-up discount you receive is an incentive to recycle and to purchase a new Samsung appliance or television; it is not a trade-in value for the recycled appliance or television. Recycled appliances and televisions are non-returnable and have a zero value. If you return the appliance or television you purchased for a refund (for any reason) you will not receive any amount or value for your recycled appliance or television. You will be required to fully uninstall (including disconnecting and draining of water, where applicable) your appliance or television and make sure it is ready for collection at the same time we deliver your new appliance or television. We reserve the right to refuse the delivery if you fail to do so. A surcharge equal to the amount of the discount you received will apply if you do not recycle or have your appliance or television ready for recycling. Offer cannot be combined with multi-buy promotions for Home Appliances. Each household may only recycle one of each type of product and will receive only one trade-up discount for each product type recycled."


			cartWrappers.forEach((cartWrapper) => { // Loop through each cartWrapper
							const wrapperMessaging = cartWrapper.querySelector('.service-item__applied-message');
							const tradeInContainer = cartWrapper.parentElement.querySelector('.cart-item__services');
							const currentCartSku = cartWrapper.parentElement.querySelector('.cart-item__sku').innerText;
							const removeBtn = tradeInContainer.querySelector('.action-button')
							let tradeInName = tradeInContainer.querySelector('.service-item__name')
							let tradeInMessage = tradeInContainer.querySelector('.service-item__applied-message')
							// console.log();

						removeBtn.onclick = (e) => {
							e.preventDefault()
							cartWrapper.querySelector('.service-item').style.display = 'none'
						}


							for (const skus in spreadsheetSkus) { // Loop through each sku
											if (Object.hasOwnProperty.call(spreadsheetSkus, skus)) { // Check if sku is in spreadsheet aka the array above
											const spreadsheetSkuValue = spreadsheetSkus[skus];
															if ( currentCartSku === spreadsheetSkuValue ) {
																			if (wrapperMessaging === null ) {
																							cartWrapper.querySelector('.service-item').style.display = 'none'
																							const tradeInContainer = cartWrapper.querySelector('.service-item');
																							tradeInContainer.querySelector('.service-item__name').innerText = 'Trade-Up';
																							tradeInContainer.querySelector('.service-item__description').innerText = 'DA Trade-up'
																			} else {
																							const paragraph = document.createElement('p');
																							paragraph.innerText = termsandconditions;
																							paragraph.style.cssText = `
																							font-size: 12px;
																							font-style: italic;
																							padding-top: 5px;
																							font-weight: bold;
																							font-family: 'SamsungOne700';
																							`
																							tradeInName.innerText = "Trade-Up"
																							tradeInMessage.innerText = "Your trade-up discount has been successfully applied"
																							wrapperMessaging.append(paragraph);
																			}
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

			const continueBtn = document.querySelector(".order-summary__btn")
			addTagging(continueBtn,{
				"data-omni-type"  : "microsite",
				"ga-ac"           : "pd buying tool",
				"ga-ca"           : "option input"
			})

			continueBtn.onclick = () => {
					tagging(continueBtn.getAttribute('data-omni-type'));
				}
		},

		trackElementMutations: function () {

			const spreadsheetSkus = [
   	"RF23R62E3SR/EU","RF50A5002S9/EU","RF23R62E3B1/EU","RF24R7201B1/EU","RF24R7201SR/EU","RF65A967FS9/EU","RF65A967FB1/EU","RF65A977FB1/EU","RF65A977FSR/EU","RF23BB860EQNEU","RB34A6B2ECS/EU","RB34A6B2ECE/EU","RB34A6B2E22/EU","RB34A6B2E12/EU","RB34A6B2E48/EU","RB38A7B53S9/EU","RB38A7B53B1/EU","RB38A7B6BB1/EU","RL38A776ASR/EU","RB38T633ESA/EU","RB38T602CS9/EU","RB38T602CWW/EU","RB38T605DB1/EU","RL4363SBASL/EU","RL4363SBAB1/EU","RB36R8839SR/EU","RB36R8899SR/EU","RZ32A74A501/EU","RR39A74A301/EU","RZ32A74A5CE/EU","RZ32A74A5CS/EU", "RR39A74A3CE/EU",

			"RR39A74A3CL/EU","RZ32A74A5CL/EU","RR39A74A322/EU","RZ32A74A522/EU","RZ32A74A512/EU","RZ32A74A541/EU","RZ32A74A539/EU","RZ32A74A548/EU","RR39A74A312/EU","RR39A74A339/EU","RR39A74A341/EU","RR39A74A348/EU","RS67A8810S9/EU","RS67A8811S9/EU","RS68A8820S9/EU","RS68A8830S9/EU","RS68A8830B1/EU","RS68A8840B1/EU","RH68B8830S9/EU","RH68B8830B1/EU","RS6HA8880S9/EU","RH69B8931S9/EU","RH69B8031S9/EU","RH69B8941S9/EU","RH69B8931B1/EU","RS6HA8891SL/EU",

			"DV90T6240LH/S1","DV90T6240LN/S1","DV90T8240SH/S1","DV90BB9445GBS1","DV90BB9445GHS1","DV90T8240SX/S1",

			"WD10T654DBH/S1","WD10T654DBN/S1","WD90T984DSH/S1","WD90T984DSX/S1","WW11BB744DGES1","WW10T684DLH/S1","WW10T684DLN/S1","WW11BB944DGHS1","WW11BB944DGBS1","WW90T854DBH/S1","WW90T854DBX/S1","WW90T986DSH/S1","WW90T986DSX/S1",
    ];
			 const cartWrappers = document.querySelectorAll('.cart-item__services');
				cartWrappers.forEach((cartWrapper) => {
					const tradeInContainer = cartWrapper.parentElement.querySelector('.cart-item__services');
					const cartSku = cartWrapper.parentElement.querySelector('.cart-item__sku').innerText;
					// Select the node that will be observed for mutations
							const targetNode = tradeInContainer

							// Options for the observer (which mutations to observe)
							const config = { attributes: true, childList: true, subtree: true };

							// Callback function to execute when mutations are observed
							const callback = function(mutationsList, observer) {
											// Use traditional 'for loops' for IE 11
											for(const mutation of mutationsList) {
															if (mutation.type === 'childList' && cartSku.includes(spreadsheetSkus)) {
																// console.log(mutation.target.parentElement)
																			mutation.target.parentElement.style.display = 'none'
															}
															else if (mutation.type === 'attributes' && cartSku.includes(spreadsheetSkus)) {
																				mutation.target.parentElement.style.display = 'none'
															}
											}
							};

							// Create an observer instance linked to the callback function
							const observer = new MutationObserver(callback);

							// Start observing the target node for configured mutations
							observer.observe(targetNode, config);

							// Later, you can stop observing
							// observer.disconnect();
				});

		},


	};
	return {
		main: main
	};

})();

cheillondon.targetBoilerplate.main.init();

