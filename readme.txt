Damovie Hub
=============

Damovie Hub is a React.js application that allows users to browse and explore movies using the Movie Database API. It consists of two main views: "Login" and "Movie Listing."

Features
--------

- Login (Public View):
  - Replicates the design provided in Figma, using similar colors and styles.
  - Contains three inputs: email (validated as a valid email address), password (minimum 7 characters), and a checkbox for accepting the terms and conditions (all inputs are required).
  - The "Create Account" button is disabled until all conditions are met.
  - Upon successfully completing the form, the "Create Account" button calls the `guest_session` endpoint.
  - The endpoint returns a token that enables access to the "Movie Listing" view, automatically redirecting the user to it.
  - After 120 seconds (for ease of testing) the token will expire and the user will have to login again.

- Movie Listing (Private View):
  - Accessible only after obtaining the token in the "Login" view.
  - Includes the following tabs (each with its corresponding endpoint): 
    - Latest
    - Now Playing
    - Popular
    - Top Rated
    - Upcoming 
  - The selected button is highlighted when clicked (the default state being the "Now Playing" view).
  - Hovering over a movie poster displays details such as title, release year, description, and rating.
  - Pagination is implemented as shown in the design:
    - If on the first page, the left arrow should be disabled.
    - If on the last page, the right arrow should be disabled.

Technologies Used
-----------------

The main technologies used in this project are:

- React.js: Version 18.2.0
- React Router: Version 6.16.0
- Redux: Version 4.2.1
- React Redux: Version 8.1.3
- Redux Toolkit: Version 1.9.7
- Redux Persist: Version 6.0.0
- Axios: Version 1.5.1
- React Hook Form: Version 7.47.0
- React Tabs: Version 6.0.2
- Classnames: Version 2.3.2
- Dotenv: Version 16.3.1
- TypeScript: Latest version
- Vite: Version 4.4.5

Development Dependencies
------------------------

The project also uses various development dependencies for linting, formatting, and building:

- ESLint: Version 8.0.1
- Prettier: Version 3.0.3
- TypeScript ESLint: Version 6.4.0
- PostCSS: Version 8.4.31
- Autoprefixer: Version 10.4.16
- Sass: Version 1.69.3
- Tailwind CSS: Version 3.3.3

Getting Started
---------------

To get started with Damovie Hub, follow these steps:

1. Clone the repository: `git clone https://github.com/JacqueEvanderVentura/damovie-hub.git`
2. Install dependencies using Yarn: `yarn install`
3. Start the development server: `yarn dev`
4. Open your browser and navigate to `http://localhost:5173/` to access the application.

Thank you very much!
---------------------

In advance of the result of this test, thank you very much for the opportunity to put my skills into play, sadly some inconveniences popped up during the development of this test, hence the sacrifice of some features (even if not required by the ruleset PDF). 

I had lots of fun developing this project, specifically developing the rating system! 

If you'd prefer to test the project with me so that I can show the hidden perks of the project do not fret and ask, whenever and wherever :)

Here is the deployed link: `https://dacodes-hub.netlify.app/`