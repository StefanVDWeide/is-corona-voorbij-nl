# is-corona-voorbij-nl
A web app which keeps track of the current corona (covid-19) situation in The Netherlands and gives a a very clear answer to the question:

`Is corona voorbij?`

Or for the non-dutch readers:

`Is corona over?`

## Where can I find the app?
The app used to be hosted on: [http://iscoronavoorbij.nl/](http://iscoronavoorbij.nl/) but since Corona is actually over (and I didn't feel like paying for the domain), it is down. Let's hope we don't need it anymore :) 

## Where does the data come from?
The data for the number cards comes from [Worldometers](https://www.worldometers.info/coronavirus/) and the data for the chart come from [Johns Hopkins University](https://www.jhu.edu/). Both datasets are retrieved via the [disease.sh API](https://github.com/disease-sh/API)
## How is the app built?
The front end is made with Vue.js and Bootstrap for the styling. The backend is a super simple Express server which really only serves the html entrypoint for Vue.js

## Why did you build this? 
The domain name was still availble and it's always good to practice :)
## To-Do's
 - Optimize styling of the chart on the home page. Currently it isn't very easy to read
 - Finish this README.md
