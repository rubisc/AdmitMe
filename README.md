# College Tracker

#### Intro
College Tracker is an app designed for international high school students that are interested in applying to colleges in the U.S. Many bright students abroad speak English, but are intimidated by the American application process because they know very little about it. College Tracker will showcase a list of some undergraduate institutions for students to browse through.


#### ERD
*Nota bene: this should be a one to many relationship
![ERD](./readmeImages/project4erd.png)

#### Some additional information...
The purpose of this app is for students to stay informed and organized by having access to a colleges' application requirements and deadlines. Applying to college can be a stressful time because there are many things to juggle at once, and it can become tricky keeping track of it all--College Tracker allows students to have a space to store all of this information and easily access it on the go.

####Wireframes

####Check out the user stories for this project on my [Trello](https://trello.com/b/KNpmyhhc/wdi-sm-project-4)

####Technologies used:
+ Mongo DB
+ Express
+ Angular
+ Node.js
+ Authentication of some sort TBD

####Approach
As the ERD demonstrates, this app requires two models: student and college. Students will be able to log onto their account, browse colleges, filter by certain information, and add colleges to their personal college list.


####Stretch Goals
The following are features I would like to add to this app:

+ Expand the college model to include more application requirement information  
+ Display a checkbox on each task and allow students to check off what requirements they have already completed
+ Track progress of each application by displaying student's percentage of completed tasks
+ Include ability for students to add certain deadlines to their personal calendar (Gmail)
+ Include a My Notes section where students can save notes for themselves (reminders, brainstorming for essays, etc.)
+ Include information for early action and early decision


####Installation Instructions
1. `$ git clone git@github.com:rubisc/College_Tracker.git`
<br>
2. `$ npm install`
<br>
3. `$ node server`

####Link to App on Heroku
Stay tuned!
