# ValorantStats

[ValorantStats](https://charlesyjchen.github.io/ValorantStats/) is a website that takes user-inputted game data for Valorant games and visualizes game statistics for each user. 

## **Technical Workflow**
HTML, CSS, and JavaScript (jQuery) were used to create and format the webpage allowing form data submission and displaying chart statistics from Google Sheets. Upon submitting user-inputted data, an AJAX call is made to a Google Sheets script macro, and the form data is written to a public Google Sheet. Charts within the Google Sheet will update instantly, but the embedded charts on the webpage are will automatically refresh every five minutes after data submission.

## **Usage**
- Visit the [ValorantStats](https://charlesyjchen.github.io/ValorantStats/) webpage and submit data from a recent game
- Toggle the chart displayed by selecting horizontal and vertical axis values
- If data was submitted, the charts will automatically refresh data after five minutes

## **Creator**
[Charles Chen](https://github.com/charlesyjchen)
