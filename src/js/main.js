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
					main.tagging();
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
    "QE85QN900ATXXU","QE75QN900ATXXU","QE65QN900ATXXU","QE85QN800ATXXU","QE75QN800ATXXU","QE65QN800ATXXU","QE75QN700ATXXU","QE65QN700ATXXU","QE55QN700ATXXU",

    "QE85QN95AATXXU","QE75QN95AATXXU","QE65QN95AATXXU","QE55QN95AATXXU","QE85QN94CATXXU","QE75QN94AATXXU","QE65QN94AATXXU","QE55QN94AATXXU","QE50QN94AATXXU","QE43QN94AATXXU","QE98QN90AATXXU","QE85QN90AATXXU","QE75QN90AATXXU","QE65QN90AATXXU","QE55QN90AATXXU","QE50QN90AATXXU","QE43QN90AATXXU","QE85QN85AATXXU","QE75QN85AATXXU","QE65QN85AATXXU","QE55QN85AATXXU",

    "QE85QN900BTXXU","QE75QN900BTXXU","QE65QN900BTXXU","QE85QN800BTXXU","QE75QN800BTXXU","QE65QN800BTXXU","QE75QN700BTXXU","QE65QN700BTXXU","QE55QN700BTXXU",

    "QE85QN95BATXXU","QE75QN95BATXXU","QE65QN95BATXXU","QE55QN95BATXXU","QE85QN90BATXXU","QE75QN90BATXXU","QE65QN90BATXXU","QE55QN90BATXXU","QE50QN90BATXXU","QE43QN90BATXXU","QE85QN85BATXXU","QE75QN85BATXXU","QE65QN85BATXXU","QE55QN85BATXXU"
    ];


        cartWrappers.forEach((cartWrapper) => { // Loop through each cartWrapper

            for (const skus in spreadsheetSkus) { // Loop through each sku
            const currentCartSku = cartWrapper.querySelector('.info-left-code');
                if (Object.hasOwnProperty.call(spreadsheetSkus, skus)) { // Check if sku is in spreadsheet
                const spreadsheetSkuValue = spreadsheetSkus[skus];
                    if ( currentCartSku.innerText === spreadsheetSkuValue ) {
                        const tvTradeInContainer = document.createElement('div');
                        tvTradeInContainer.classList.add('tv-trade-in-container');
                        tvTradeInContainer.innerHTML =
                        `<p><strong>TV Trade-up:</strong> Free delivery, collection & recycling of your old TV is included with all options (usually £20). Please select the delivery and/or installation options you need. Your old TV will be collected when we deliver your new one.</p>`;
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

