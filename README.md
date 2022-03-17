# Tech Test

## Plan

- Create folder structure with CRA
- Test out fetching from the API
    - Create async function using fetch api to test
    - Pass in search term as a param and ensure get back expected results
- Link to frontend 
    - Create input field to search and first check it logs correctly
        - useState to monitor changes of the input
- Responsiveness
    - Create a low fidelity wireframe for web, and mobile/ipad
    - Use provided colours ( #FAF8D4, #EBDCCB, #C3BAAA, #91818A, #B2A3B5)


## Key points from problem

- To use React library
- Create a search page for different drinks to help bartenders learn ingredients
- Have a back-end search API `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<SEARCH_TERM>` where `<SEARCH_TERM>` is the name of a drink a bartender might enter.

### Expected functionality

- At minimum, should return results for "Margarita", "Old fashioned" or "Negroni" (These may be good for testing)
- Search page should render image of each result, name of cocktail and at least two ingredients
- Responsive (mobile and web)
- Should stick to existing colour palette be visually appealing (plan out before coding).
- Intuitive and easy to use.

Extension tasks
- Come back to these if have time.

## Responses to questions:

### What more would you do if you spent more time on it? (this is an opportunity to explain your thinking and approach further)

A: After ticking off the responsiveness, ideally would like to have added more search functionality, such as the amount of results to display, amount of ingredients to display. Then, could have moved on to adding the option to favourite drinks.


### Explain why you took the approach that you did? e.g. why did you pick a particular library (or none at all)?

A: I chose to use React library as it was specified within the brief, and it's a quick an easy way to get a frontend site up and running. As well, it's great for creating additional components as this is what React was made for, so it would make it incredibly easy to add more functionality on top of the app as times goes along.

### Are there any known issues you'd like to flag?

A: Currently doesn't have a button to search with. This may put people off instead of searching for something when ready to search.

### How would you improve the API that you used?

A: To be more semantic in what the JSON object contains (i.e. key value pairs were confusing at first).

### If you were building a production API from scratch, what are some considerations you'd need to factor in?

A: My first consideration would be who is going to access this API, and what infomation would be required from it. I would try to make it easy to understand by being explicit in what routes give back what type of data. If someone using it wasn't very code savvy, I would try to make the documentation as clear and as easy to use as possible.

--------

# Instructions

## Problem Brief

Dear Candidate,

Thank you for applying to the world-famous Sam's Bar. As you are no doubt aware, we are one of the finest speakeasy
cocktail bars in the country and are looking to modernise our technology. We are particularly interested in React, and
want you to show off your skills!

Recently, we've recruited some new bartenders. While they are very keen to learn, they are forgetful - often forgetting
the key ingredients. As a result, we think a search page for the different drinks we sell would help the bartenders learn
and remember all the different cocktails and their ingredients.

Conveniently, we already have a back-end search API, but unfortunately we have no-one to implement a front-end! Therefore,
the code you write will be almost exclusively front-end.

The search endpoint available for you to use is:
`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<SEARCH_TERM>`
where `<SEARCH_TERM>` is the name of a drink a bartender might enter (You will not need an API key for this - our endpoint
is open and publicly available).

A vague written document for other endpoint functionality exists [here](https://www.thecocktaildb.com/api.php).

## Expected Behaviour

Your search page should return results if a bartender enters 'Margarita', 'Old fashioned', or 'Negroni'.
This is a fully working API, with a comprehensive database, so feel free to explore other search terms too.

Further:
* The search page should render an image of each result, along with the name of the cocktail, and at least two of its
key ingredients.
* It should be responsive - the application could be used on the bar's full-sized desktop computer, or on our bartenders'
mobile phones or iPads.
* It should be visually appealing. Sam's Bar has a good reputation as a trendy place, and our apps should be the same.
  * Our colour palette can be found [here](https://coolors.co/faf8d4-ebdccb-c3baaa-91818a-b2a3b5).
* It should be easy to use and intuitively laid out.

Extension tasks:
* Allow the bartender to filter by 'Alcoholic' vs 'Non-alcoholic', for our tee-total patrons.
* Make use of the additional data returned in search results. What can you add to the UI to make our bartender's lives
easier?
* Add some automated testing, to ensure features do not break as we add more functionality in the future.

## Write-up

In your README, please answer the following questions in full. We'll talk about them in the meeting directly after.

* What more would you do if you spent more time on it? (this is an opportunity to explain your thinking and approach further)
* Explain why you took the approach that you did? e.g. why did you pick a particular library (or none at all)?
* Are there any known issues you'd like to flag?
* How would you improve the API that you used?
* If you were building a production API from scratch, what are some considerations you'd need to factor in?

## Submission

Your code, along with written answers to the questions under `Write-up` should be committed to the specified repository
no later than 1hr 30 after receipt of this problem brief.