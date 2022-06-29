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
					main.appendNewStyle();

				} else {
					console.log('no jquery')
					_self.doEverythingTimeout();
				}
			}, 900)
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

  //just the button to trigger button, so could be created anywhere really

  const daAndTvSkus = [
			"RF23R62E3SR/EU","RF50A5002S9/EU","RF23R62E3B1/EU","RF24R7201B1/EU","RF24R7201SR/EU","RF65A967FS9/EU","RF65A967FB1/EU","RF65A977FB1/EU","RF65A977FSR/EU","RF23BB860EQNEU","RB34A6B2ECS/EU","RB34A6B2ECE/EU","RB34A6B2E22/EU","RB34A6B2E12/EU","RB34A6B2E48/EU","RB38A7B53S9/EU","RB38A7B53B1/EU","RB38A7B6BB1/EU","RL38A776ASR/EU","RB38T633ESA/EU","RB38T602CS9/EU","RB38T602CWW/EU","RB38T605DB1/EU","RL4363SBASL/EU","RL4363SBAB1/EU","RB36R8839SR/EU","RB36R8899SR/EU","RZ32A74A501/EU","RR39A74A301/EU","RZ32A74A5CE/EU","RZ32A74A5CS/EU", "RR39A74A3CE/EU",

			"RR39A74A3CL/EU","RZ32A74A5CL/EU","RR39A74A322/EU","RZ32A74A522/EU","RZ32A74A512/EU","RZ32A74A541/EU","RZ32A74A539/EU","RZ32A74A548/EU","RR39A74A312/EU","RR39A74A339/EU","RR39A74A341/EU","RR39A74A348/EU","RS67A8810S9/EU","RS67A8811S9/EU","RS68A8820S9/EU","RS68A8830S9/EU","RS68A8830B1/EU","RS68A8840B1/EU","RH68B8830S9/EU","RH68B8830B1/EU","RS6HA8880S9/EU","RH69B8931S9/EU","RH69B8031S9/EU","RH69B8941S9/EU","RH69B8931B1/EU","RS6HA8891SL/EU",

			"DV90T6240LH/S1","DV90T6240LN/S1","DV90T8240SH/S1","DV90BB9445GBS1","DV90BB9445GHS1","DV90T8240SX/S1",

			"WD10T654DBH/S1","WD10T654DBN/S1","WD90T984DSH/S1","WD90T984DSX/S1","WW11BB744DGES1","WW10T684DLH/S1","WW10T684DLN/S1","WW11BB944DGHS1","WW11BB944DGBS1","WW90T854DBH/S1","WW90T854DBX/S1","WW90T986DSH/S1","WW90T986DSX/S1",
 		]

			const creatingEleFun = (eleName = '', className = '') => { // this creates the elements aka divs the 2nd arg will be the name of your div element
				eleName = document.createElement(eleName)
				eleName.classList.add(className)
				return eleName
			}

    function insertAfter(newNode, referenceNode) {
     //Where referenceNode is the node you want to put newNode after. If referenceNode is the last child within its parent element, that's fine, because referenceNode.nextSibling will be null and insertBefore handles that case by adding to the end of the list.
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
			}

    const cartSkus = document.querySelectorAll('.cart-item__sku')

    cartSkus.forEach((cartSku) => {

    daAndTvSkus.forEach((mySkus) => {
    if (cartSku.innerText === mySkus ) {

      const cartItems = document.querySelectorAll('.cart-item');

      cartItems.forEach((cartItem, x) => {
      const modelCode = cartItem.getAttribute('data-modelcode')
							if (modelCode === mySkus ) {

											const a = document.createElement('a')
											a.classList.add('trigger__popUp');
											a.innerText = 'Learn more';

											const mainDiv         = creatingEleFun('div', 'service-item');
											const iconDiv         = creatingEleFun('div', 'service-item__icon');
											const anchorLinkPopup = creatingEleFun('div', 'link__popup');
											const popup           = creatingEleFun('div', 'popup__pricepromise__modal');
											const popupInner      = creatingEleFun('div', 'popupInner');
											const close           = creatingEleFun('div', 'close');
											const content         = creatingEleFun('div', 'content');

											iconDiv.innerHTML = `
											<cx-media format="TokoMain" class="service-item__icons ng-star-inserted is-initialized"><img src="https://p1-smn2-api-cdn.shop.samsung.com/medias/icon-regular-service-trade-in.png?context=bWFzdGVyfGltYWdlc3wxMzk5fGltYWdlL3BuZ3xoYTYvaDZkLzg4MTk5MzU3Mzk5MzQvaWNvbi1yZWd1bGFyLXNlcnZpY2UtdHJhZGUtaW4ucG5nfDNlNjYyYjg1OWExMjQzNzBlYjlhNGE2NTY0MWNhMWFlNjIzNDVhOWM2MmYxZTY3NjdmOWY3MTE2YzFjZmI2ZjU" alt="trade in icon" class="ng-star-inserted"><!----></cx-media>
											`
											const contentContainer = creatingEleFun('div', 'service-item__details');
											contentContainer.innerHTML = `
											<h4 class="service-item__name">Trade Up</h4>
												<div class="service-item__description ng-star-inserted">
														<p>By proceeding to purchase and take advantage of this promotion, you accept the following: The trade-up discount you receive is an incentive to recycle and to purchase a new Samsung appliance or television; it is not a trade-in value for the recycled appliance or television. Recycled appliances and televisions are non-returnable and have a zero value. If you return the appliance or television you purchased for a refund (for any reason) you will not receive any amount or value for your recycled appliance or television. You will be required to fully uninstall (including disconnecting and draining of water, where applicable) your appliance or television and make sure it is ready for collection at the same time we deliver your new appliance or television. We reserve the right to refuse the delivery if you fail to do so. A surcharge equal to the amount of the discount you received will apply if you do not recycle or have your appliance or television ready for recycling. Offer cannot be combined with multi-buy promotions for Home Appliances. Each household may only recycle one of each type of product and will receive only one trade-up discount for each product type recycled.</p>
												</div>
											`
											// anchorLinkPopup.append(a)

											mainDiv.append(iconDiv, contentContainer)
											popup.style.display = 'none';

											popup.append(popupInner)
											popupInner.append(close, content)

											insertAfter(mainDiv, cartItem)
											insertAfter(popup, mainDiv)
											// contentContainer.append(anchorLinkPopup)
									}
							})
      }
    })
  })

    const cartItems = document.querySelectorAll('.service-item')

    cartItems.forEach((cartItem, x) => {

      if (cartItem.innerText.includes('Trade In') && cartItem.style.display !== 'none') {

      const a = document.createElement('a')
      a.classList.add('trigger__popUp');
      a.innerText = 'Learn more';

      const mainDiv         = creatingEleFun('div', 'service-item');
      const iconDiv         = creatingEleFun('div', 'service-item__icon');
      const anchorLinkPopup = creatingEleFun('div', 'link__popup');
      const popup           = creatingEleFun('div', 'popup__pricepromise__modal');
      const popupInner      = creatingEleFun('div', 'popupInner');
      const close           = creatingEleFun('div', 'close');
      const content         = creatingEleFun('div', 'content');

      iconDiv.innerHTML = `
      <cx-media format="TokoMain" class="service-item__icons ng-star-inserted is-initialized"><img src="https://p1-smn2-api-cdn.shop.samsung.com/medias/icon-regular-service-trade-in.png?context=bWFzdGVyfGltYWdlc3wxMzk5fGltYWdlL3BuZ3xoYTYvaDZkLzg4MTk5MzU3Mzk5MzQvaWNvbi1yZWd1bGFyLXNlcnZpY2UtdHJhZGUtaW4ucG5nfDNlNjYyYjg1OWExMjQzNzBlYjlhNGE2NTY0MWNhMWFlNjIzNDVhOWM2MmYxZTY3NjdmOWY3MTE2YzFjZmI2ZjU" alt="trade in icon" class="ng-star-inserted"><!----></cx-media>
      `
      const contentContainer = creatingEleFun('div', 'service-item__details');
      contentContainer.innerHTML = `
      <h4 class="service-item__name">Trade Up</h4>
      <div class="service-item__description ng-star-inserted">
							<p>Please note: The discount you receive is an incentive to recycle and to purchase a new Samsung device or appliance; it is not a trade-in value for the recycled device or appliance. Recycled device or appliance are non-returnable and have a zero value. If you return your purchased device or appliance for a refund (for any reason) you will not receive any amount or value for your recycled device or appliance.</p>
      </div>
      `
      // anchorLinkPopup.append(a)
      mainDiv.append(iconDiv, contentContainer)
      popup.style.display = 'none';
      popup.append(popupInner)
      popupInner.append(close, content)
      insertAfter(mainDiv, cartItem)
      insertAfter(popup, mainDiv)
      // contentContainer.append(anchorLinkPopup)

      // console.log(contentContainer.parentElement)
      contentContainer.parentElement.style.display = 'none'

      }
    })

					function sendBuyData315(data) {
						s.linkTrackVars = "eVar41,events";
						s.linkTrackEvents = "scAdd,scView";
						s.events = "scAdd,scView";
						s.eVar41 = data;
						s.tl(this, 'o');
				};

					const learnmoreCTA = document.querySelector('.trigger__popUp');

					$(learnmoreCTA).bind('click', function () {
					sendBuyData315($(this).attr('learnmore'))
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

	};
	return {
		main: main
	};

})();

cheillondon.targetBoilerplate.main.init();

