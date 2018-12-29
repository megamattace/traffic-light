## Traffic Light Excercise

This is an excercise in event handling. The goal is to implement event handlers in `main.js` to create a functioning traffic light.

### Instructions

There is no need to edit `index.html` or `main.css`. All work should be done in `main.js` where sever sections are stubbed out to be implemented.

1. Create a reference to all buttons and lights
   - Use [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
2. Write your functions to switch the lights
   - The css is already written, all you need to do is add the class `lit` to one of the lights to turn it on
   - Use the documentation for [classlist](https://developer.mozilla.org/en/docs/Web/API/Element/classList) for ideas on how to accomplish this
3. Create you [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on each of the buttons

### Bonus

Hide the `slow` button and add the functionality to `stop` that the lights will cycle first yellow and then red.

Using [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) is probably the easiest way to accomplish this.
