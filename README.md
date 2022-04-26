# Target Boiletplate

## Project description

## Background:

The business is launching the Neo TV trade up proposition, where we are offering money off a new TV if you send us your old one to recycle.

The problem with this is that we already have the “delivery and recycling” option at checkout, which we usually charge £20 for, and this cannot be disabled just for this proposition as it’s now a legal requirement for us to always offer recycling services.

## Tools and Packages

1. npm installs (if errors occur use n to switch node versions to version 11.0.0) - https://www.npmjs.com/package/n
2. Run the Gulp command.
3. Paste main.js from /build into console :fire:

## Test

## The business requires a quick win to amend this area. Initial thoughts are:

1.       We identify when any of the attached SKUs are in cart WITH the trade in service type applied, and hide the “delivery and recycling” option

2.       We identify when any of the attached SKUs are in cart, and hide the “delivery and recycling” option

3.       If we can’t do either of the above, then we’ll need to show some kind of message when any of these SKUs are in cart, to say “for TV trade up select Delivery Only”

## Next steps:

Option 1: If we CAN hide the recycling delivery option, please use something like this (George to refine):
TV Trade-up: Free delivery, collection & recycling of your old TV is included with all options.

Option 2: If we CAN’T hide the recycling option, please use something like:
TV Trade-up: Free collection & recycling of your old TV is already included, so please select the delivery and/or installation services you require

[Copy provided by George]

Ideally we’ll hide the recycling option AND show the message, for complete clarity.

## Final test Approach:

->The logic does not require “delivery and recycling” option to be hidden anymore.

Instead just the banner at the bottom of the delivery option. Revised copy below.

TV Trade-up: Free delivery, collection & recycling of your old TV is included with all options (usually £20). Please select the delivery and/or installation options you need. Your old TV will be collected when we deliver your new one.

## QA Link - https://shop.samsung.com/uk/checkout/deliveryinfo?at_preview_token=0CLIBDZuhi08kVvEU9JZAIsfdKGAJyg5DsJ3XxNj67A&at_preview_index=1_2&at_preview_listed_activities_only=true

## Adobe Target Name:

Local:AB:SEUK220419:IM:Cart:TV Trade In:228
