# beeminder-action-board
Easily submit predefined data points

## What it does
Action Board is a simple client-side application that interacts with Beeminder to define common data point submissions and submit them with a single click. 

## What it solves
I have an exercise commitment on Beeminder. I submit one data point for each set of reps that I perform, with the number of reps in the value field and the name of the exercise in the optional comment field. 

Problems:
1. Since my sets usually have a fixed number of repetitions, I find it annoying to have to retype the same numbers over and over. 
2. Typing the exercise name over and over is annoying.
3. When exercising, using the mouse to click a button is much easier than sitting down to type.

## How it works
The app asks for your Beeminder authentication token, which you can get from https://www.beeminder.com/api/v1/auth_token.json. This is saved in Local Storage. 

From there, you will be presented with an empty Action Board. You can create predefined Actions using the menu, which will populate on the Action Board as clickable tiles. Clicking on an Action tile will immediately send that data point to Beeminder. You can edit and remove Actions as well. 

## Is it safe?
This app is as safe as your browser. In the worst-case scenario, if you have software or extensions that have permission to read everything on your web page, your Beeminder API key may be compromised. An attacker could use this key to charge you arbitrary amounts of money using the Beeminder API. Thankfully, this worst-case scenario is mitigated by the fact that Beeminder processes those credit card charges, and they will gladly cancel the charges upon request via email. **Bottom line:** Use a safe browser.
