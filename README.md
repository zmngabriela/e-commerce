# E-Commerce Project

## Overview
This is an e-commerce website built using modern web technologies to provide a smooth shopping experience. The project is still in progress, with future plans to develop a custom backend.

## Technologies Used
  React with Redux for state management.
  TypeScript for static typing.
  Styled-components for dynamic styling.
  Jest and React Testing Library for testing (currently a work in progress).
  Formik and Yup for form management and validation.
  Platzi Fake Store API for product and user data.

## Features
  Fetches products and user data from the Platzi Fake Store API.
  Implements JWT authentication, including token storage and session handling.
  Custom-built features such as:
  Newsletter subscription.
  Order creation simulation.
  Mocked product images for a consistent visual experience.
  Pagination implementation for better data fetching performance.

## Challenges Faced
During development, several challenges were encountered and solved:

  ### JWT Authentication & Security:
  Learning JWT authentication significantly improved my understanding of data fetching, middlewares, and social network security.
  Since the API is a third-party service, I had to adapt to its authentication flow.

  ### Token Handling:
  The refresh and access tokens are stored on the client side to allow session retrieval. To enhance security, I chose to store them in the application state instead of local storage to prevent XSS attacks, at the cost of losing the session on page reload.

  ### Order Creation & Mocking:
  The API does not support order creation, so I had to mock responses to simulate the order process.
  Product size variations also needed to be simulated, an area that still requires improvement.

## Future Plans
Improve the product size selection and variation system.
Implement a custom backend using Java.
Enhance testing coverage.
Improve UI/UX design.

## Live Demo
The project is deployed on Vercel and can be accessed here: [E-Commerce Live Demo](https://e-commerce-opal-seven-34.vercel.app/)

## Installation & Setup
To run the project locally, follow these steps:

  ### Clone the repository
  git clone https://github.com/your-repository-link.git

  ### Navigate into the project directory
  cd e-commerce

  ### Install dependencies
  npm install

  ### Start the development server
  npm start

## Scripts
  The project includes the following npm scripts:

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }

# Contributions
Contributions and suggestions are welcome! If you want to improve or extend the project, feel free to fork the repository and submit a pull request.

This project is part of my portfolio as a junior developer, showcasing my ability to work with React, TypeScript, and API integrations while continuously learning new backend technologies.
