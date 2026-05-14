# Country Explorer (React + Vite)

A responsive React app that lets you **search countries by name** and **filter by region**, then view details for a selected country.

## Features

- 🔎 Search countries by name
- 🗺️ Filter countries by region
- 🌓 Light/Dark theme toggle
- 📄 Country details page
- ✅ Built with React Router for page navigation

## Tech Stack

- React (Vite)
- React Router DOM
- TailwindCSS (with Vite integration)
- react-icons

## Project Structure

- `src/App.jsx` – App routes + state (theme, search query, selected country)
- `src/Components/` – Reusable UI components (Header, Inputs, Country list, Country info)
- `src/Data/data.json` – Countries dataset
```

## Notes

- The app uses `BrowserRouter` routes:
  - `/` – Search + filtered country list
  - `/country` – Details for the selected country

