# ShakeSearch

Welcome to the Pulley Shakesearch Take-home Challenge! In this repository,
you'll find a simple web app that allows a user to search for a text string in
the complete works of Shakespeare.

You can see a live version of the app at
https://pulley-shakesearch.herokuapp.com/. Try searching for "Hamlet" to display
a set of results.

In it's current state, however, the app is just a rough prototype. The search is
case sensitive, the results are difficult to read, and the search is limited to
exact matches.

## Your Mission

Improve the search backend. Think about the problem from the user's perspective
and prioritize your changes according to what you think is most useful.

To submit your solution, fork this repository and send us a link to your fork
after pushing your changes. The project includes a Heroku Procfile and, in its
current state, can be deployed easily on Heroku's free tier.

If you are stronger on the front-end, complete the react-prompt.md in this
folder.


### Implemented
1. The results include "play name" and "Act number"
    * Implemented "play name" retrieval in search. Tried doing it with Regex, since it was not working I have split the complete files into individual plays and the search is done in all the files.
    * Implemented "ACT" number search with regex and using other apis of suffixarray package. 
    

2. Changed the search function to a goroutine. 

3. Implemented case insensitive search.

4. Frontend is done with react and followed the provided design.

### What I could have done more
1. Convert the individual file search to go routines. Currently it is done via range over loop, I like to do via go routines and channels.
2. Implement Scene search
3. Implement pagination in both frontend and server side.
4. Improve the front-end design


