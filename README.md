# sample-js-test-suite
A test suite for a simple JavaScript website to test its frameworks and descibe tests about it 

# Description:
- The web-application contains an input field for date and the “Day of the week” button.
- When a user types a date and clicks the button, the alert with day of week is shown.
- Users can clear typed data using the “x” button on the right side of the input field.
- Users can close the alert using the “x” button.
## Supported date formats:
* DD.MM.YYYY
* DD-MM-YYYY
* DD/MM/YYYY

# Justification for Testing Procedures
#### Note: Due to unfamiliarity with Jest, in the interest of time, this test suite only contains simple unit tests. If more time was available, I would have performed additional UI testing with Selenium. 



### Unit Tests

Examining this application, it was clear to see that a lot could go wrong with the user input, considering that it mostly relied on clean input to work. The edge cases, focusing on actual cases a user might do, for the text input are: 

- Null Input/Empty Input 
- Other Date Format - (e.g. YYYY/MM/DD, MM/DD/YYYY, MM/DD/YY ...)
- Non-Integer - float, long, double (e.g. "1./01/2012")
- Multiple Slashes/Dots/Dashes (e.g.  "07..03..2023")
- No Slashes/Dots/Dashes (e.g. "07032023" "07 03 2023")
- Mix of Slashes/Dots/Dashes (e.g. "07/03-2023")
- Only one day symbol (e.g. "1/12/2023")
- Only one month symbol (e.g. "01/1/2023")
- Inputing a single number (e.g. "1")
- Inputing a String of the date (e.g. "23rd September 2023")
- Typing any Day/Month/Year value with a higher or lower than the allowed (e.g. 0, -1, 9999, 305...)
- Dates that do not exist (e.g. "30/02/2023" or "31/04/2023")
- Dates connected to leap years (e.g. "29/02/2016")

### Integration/End-To-End Tests
Depening on the implementation of the application, there might be integration betwen a database or some other service and the buttons to send the 
calendar request. For example if the submission of the button is querying some external service about the date, precess of the button in quick succession might bring about unexpected rules. Scenarios that will need to be tested through techniques like mocking and integration testing include:

- Pressing the 'x' button multiple times  
- Pressing the 'x' button when there is nothing in the input box or no alert window 
- Trying to subsequently press the 'Day of the Week' button multiple times

As mentioned above, such tests are not in the test suite due to lack of knowledge about the inner workings of the program and lack of familiarity with mocking and integration testing JavaScript frameworks. 

*The javascript application is in actuality a very simplified function only to illustrate the testing principles I desired*

# How to run the test suite:
To run the test suite, one needs to ensure they have Node.js and the testing framework Jest installed on their computer. 

To install Jest, you will have to run: 
 ```css
npm install --save-dev jest
```
Afterward, to run the test suite, you would need to run the command
```css
npm test
```
which is going to look for all the `*.test.js` files in the current directory.

If any issues arise, make sure all Node.js is installed along with Jest. 







