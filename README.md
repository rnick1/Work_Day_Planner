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

## Possible improvements:

-Take steps to reduce the use of regular Web API's and replace with more jQuery.

-Reduce the amount of code throught the use of loops.

## Here is the Intro page:

![image](https://github.com/rnick1/Coding_Quiz/blob/main/assets/Intro.png)

### Note: This application is live! The URL is: 


# Work_Day_Planner
# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use a library like [Moment.js](https://momentjs.com/) to work with dates and times. `Moment.js` has historically been the most popular date/time library but is no longer supported by its developers. However, you can still use it for this project, or you can look into one of the following alternatives:

  * [Luxon](https://moment.github.io/luxon/)
  * [Day.js](https://day.js.org/)
  * [date-fns](https://date-fns.org/)
  * [js-Joda](https://js-joda.github.io/js-joda/)

Whichever library you choose, be sure to read the documentation carefully!

## Acceptance Criteria
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
## Mock-Up

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses the Moment.js library to work with date and time