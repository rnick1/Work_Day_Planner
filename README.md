# Workday Planner

## This repository is for my fifth homework assignment for the University of Washington Full-Stack Coding Bootcamp!

### The goal of this assignment is to utilize skills developed so far to create a workday planner.

## The Assignment:
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## What was done:

-The HTML layout and CSS style is based on code provided with the assignment.

-I used JavaScript, Web API's, and jQuery to grab the user inputs, place them in local storage, and retrieve them whenver the page loads. 

-The third party API that I chose to use was Moment.js to assist with the time aspect of the project.

-Each time the user opens or refreshes the webpage the time at the top of the page updates to reflect the current date and time. This in turn allowed me to update the time slots so that the text areas in the elapsed time blocks are greyed out and disabled.

## Here is the Workday Planner:

![image](https://github.com/rnick1/Work_Day_Planner/blob/main/Workday_Planner.png)

### Note: This application is live! The URL is: 