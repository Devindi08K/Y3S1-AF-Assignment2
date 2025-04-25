[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/mNaxAqQD)

#Countries Explorer App

     A React-based web application for exploring countries around the world. Users can search for countries, filter by region, mark favorites, and view detailed information about each country.

#Live Demo

    https://y3-s1-af-assignment2.vercel.app/

#Features

    User authentication (name-based login)

    Search countries by name

    Filter countries by region

    Add/remove countries to favorites

    Responsive design

    Detailed country information view

    Persistent favorites using localStorage

    Dark/Light theme support

#Tech Stack

    React 18

    React Router v6

    Tailwind CSS

    Jest & React Testing Library

    Vite

    REST Countries API

#Project Structure

    frontend/

    ├── components/           # React components

    ├── context/             # Context providers
    
    ├── services/            # API services
    
    ├── __tests__/          # Test files
    
    └── public/             # Static assets

#API Integration

    The application uses the REST Countries API v3.1. Main endpoints used:

        GET /all - Fetch all countries
        
        GET /name/{name} - Search country by name
        
        GET /region/{region} - Filter countries by region
        
        GET /alpha/{code} - Get country by code

#Setup and Installation

        Clone the repository

Install dependencies:

        npm install

Run development server:

        npm run dev

Build for production:

        npm run build

Run tests:

    npm test

#Testing

    The application includes both unit and integration tests:
    
    Unit tests for components using Jest and React Testing Library
    
    Integration tests for navigation and data flow
    
    Mock services for API testing
    
    Run tests with : npm test

#Available Scripts

    npm run dev - Start development server
    
    npm run build - Build for production
    
    npm run preview - Preview production build
    
    npm test - Run tests
    
    npm run test:watch - Run tests in watch mode

#Environment Variables

    No environment variables are required as the API is publicly accessible.

#Deployment

    The application is deployed on Vercel.

#Usage Instructions

    Login with your name

    Browse countries on the home page
    
    Use the search bar to find specific countries  
    
    Filter countries by region using the dropdown
    
    Click the heart icon to add/remove favorites
    
    Click on a country card to view detailed information
    
    Use the "Show Favorites" button to view your favorite countries

    Click "Back to Home" to return to the main list
