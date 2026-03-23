# Mars Rover Explorer

A web app to browse real photos taken by NASA's Mars rovers — Curiosity,
Opportunity, and Perseverance. Built as part of a JavaScript project to
practice API integration, DOM manipulation, and array methods.

---

## What it does

Pulls live photo data from NASA's Mars Rover Photos API and displays them
in a clean photo grid. You can narrow down photos by rover, camera type,
and date, or just scroll through and save the ones you like.

---

## Features

- Live photos from NASA's Mars Rover Photos API
- Filter by rover and camera type
- Sort by date (newest / oldest)
- Search by camera name or rover
- Save favorites (persisted via localStorage)
- Pagination for large photo sets
- Dark and light mode toggle
- Responsive across mobile, tablet, and desktop

---

## API

NASA Mars Rover Photos API  
`https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos`  
Free API key available at https://api.nasa.gov

---

## Running it locally

Clone the repo and open `index.html` in a browser. No installs needed.
```bash
git clone https://github.com/YOUR_USERNAME/mars-rover-explorer.git
cd mars-rover-explorer
# open index.html in your browser
```

To get higher API rate limits, grab a free key from api.nasa.gov
and replace `DEMO_KEY` in `script.js`.

---

## Project structure
```
mars-rover-explorer/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Tech used

- HTML, CSS, Vanilla JavaScript
- NASA Open APIs
- localStorage for favorites

---

## Screenshots

Coming soon once the UI is complete.
