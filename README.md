# SBA 320H - The Bones of a Cool Donation Site - Working with Colorado 501(c)(3) Data 
## A React Web Application Project

![filetree](src/assets/images/filetree.png)


# Technologies Used

- **HTML**: Used for structuring the content of the web application.
- **CSS**: Used for styling the web application, including layout, colors, and fonts.
- **JavaScript**: Used for adding interactivity and functionality to the web application.
- **React**: A JavaScript library for building user interfaces. Used to create the components and manage the state of the application.
  - **useContext**: A React hook used for managing global state across the application.
  - **useReducer**: A React hook used for managing complex state logic in the application.
- **Fetch API**: Used to make asynchronous requests to the external data source (Colorado Non-Profit Data API) and retrieve data.
- **LocalStorage**: Used to store donor information in the user's browser.
- **GitHub**: Used for version control and collaboration. Frequent commits were made to track the progress of the project.
- **Netlify**: Used for hosting the web application and making it accessible online.

# Requirements
Your application must meet these requirements to pass (this it your Minimum Viable Product):

- [X] Built with HTML, CSS, JavaScript, REACT (useContext and/or useReducer hooks).
- [X] Hosted on Heroku or Netlify.
- [X] Frequent commits to GitHub.
- [X] A README.md file in your GitHub repository with:
    - [X] Explanations of the technologies used.
    - [X] Explanations of the approach taken.
    - [X] A link to your live site.
    - [ ] Usage instructions, if relevant.
    - [X] Unsolved problems.
- [X] Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.

## Bonus Features
The following are not required:

- [ ] Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc.
- [X] Look into localstorage so you can save data to the user's browser.

## Approach

I investigated several APIs, checked their endpoints, and allowed the data to shape what the application would become. I then started to set up my original App.jsx file. (I worked with a different API for a couple of days, but found its data disappointing. I then switched to the State of Colorado API and created my ColoradoApi.js file.) I referenced the React Documentation, as well as watched a number of YouTube videos to get the data flowing. I left all of the old files just in case I couldn't get the new setup to run properly. The goal was to set up a donation site using Stripe, but getting the MVP was paramount.

## Unsolved Problems

The donation component doesn't actually allow any real donations yet. I built it as a placeholder, then spent way too much time making it look less ugly. It did serve as an inspiration to utilize local storage, however. I definitely need more iterations on every single piece of this project. I would like to group the non-profits together in a smarter way, but that may mean using a different API. I can follow the documentation and implement a feature, but I still struggle with writing from scratch.

## Live Site

You can view the live site here: [Easy Philanthropy](https://incomparable-flan-935910.netlify.app/)

### Notes on finding an API 
[Finding an API](https://ps-react-curriculum.herokuapp.com/320/project/#-finding-an-api)

### Extra: Want your own domain name?
You can also host your GitHub pages with your own domain name.
Here is a walkthrough from namecheap, one web hosting service.
If you choose to do this, it is best to save it for last so that you know you have time to finish the project's requirements.


