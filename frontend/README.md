# Countries Explorer App

A React-based web application for exploring countries around the world. Users can search for countries, filter by region, mark favorites, and view detailed information about each country.

## Live Demo
https://y3-s1-af-assignment2.vercel.app/

## Features

- User authentication (name-based login)
- Search countries by name
- Filter countries by region
- Add/remove countries to favorites
- Responsive design
- Detailed country information view
- Persistent favorites using localStorage
- Dark/Light theme support

## Tech Stack

- React 18
- React Router v6
- Tailwind CSS
- Jest & React Testing Library
- Vite
- REST Countries API

## Project Structure

```
frontend/
├── components/           # React components
├── context/             # Context providers
├── services/            # API services
├── __tests__/          # Test files
└── public/             # Static assets
```

## API Integration

The application uses the REST Countries API v3.1. Main endpoints used:

- `GET /all` - Fetch all countries
- `GET /name/{name}` - Search country by name
- `GET /region/{region}` - Filter countries by region
- `GET /alpha/{code}` - Get country by code

## Setup and Installation

1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Run tests:
```bash
npm test
```

## Testing

The application includes both unit and integration tests:

- Unit tests for components using Jest and React Testing Library
- Integration tests for navigation and data flow
- Mock services for API testing

Run tests with :
  npm test 


## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Environment Variables

No environment variables are required as the API is publicly accessible.

## Deployment

The application is deployed on Vercel.

## Usage Instructions

1. Login with your name
2. Browse countries on the home page
3. Use the search bar to find specific countries
4. Filter countries by region using the dropdown
5. Click the heart icon to add/remove favorites
6. Click on a country card to view detailed information
7. Use the "Show Favorites" button to view your favorite countries
8. Click "Back to Home" to return to the main list


