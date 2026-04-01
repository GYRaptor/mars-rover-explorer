# NASA APOD Explorer

A web app that displays daily space images using NASA's Astronomy Picture of the Day (APOD) API.  
Built as part of a JavaScript project to practice API integration, DOM manipulation, and array methods.

---

## Project Overview

NASA APOD Explorer allows users to explore daily astronomical images provided by NASA. Users can browse, search, sort, and save their favorite images through an interactive and responsive interface.

This project was built as part of a graded assignment for practicing JavaScript and web development concepts.

---

## Features

### Core Features
- Fetches real-time data from NASA APOD API
- Displays images or videos with title, date, and description
- Responsive grid layout for different screen sizes
- Loading indicator during API calls

### Interactive Features
- Search by image title using `filter()`
- Sort images by date using `sort()`
- Save favorites using `localStorage`
- Date picker to view APOD for a specific day
- Random image loading using API count parameter

### UI Features
- Dark and light mode toggle
- Smooth animations and hover effects
- Clean and modern card-based layout

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- NASA Open API

---

## API Used

**NASA Astronomy Picture of the Day (APOD) API**

Endpoint:
```
https://api.nasa.gov/planetary/apod
```

The API provides daily space images along with metadata such as title, explanation, date, and media type.

---

## Project Structure
```
nasa-apod-explorer/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/GYRaptor/nasa-apod-explorer.git
```

2. Navigate to the project folder:
```bash
cd nasa-apod-explorer
```

3. Open `index.html` in your browser

---

## 🔑 API Key Setup

The project requires a NASA API key.

To run this project:
1. Visit https://api.nasa.gov
2. Generate a free API key
3. Replace the API key in `script.js`

---

## 🧠 Concepts Used

- Fetch API for asynchronous data retrieval
- DOM manipulation
- Event handling
- Array higher-order functions:
  - `map()`
  - `filter()`
  - `sort()`
- Local storage for saving favorites
- Responsive web design

---

## Challenges Faced

- Handling both image and video media types
- Managing asynchronous API responses
- Designing a responsive user interface
- Preventing excessive API calls

---

## Future Improvements

- Pagination or infinite scroll
- Debounced search functionality
- Dedicated favorites page
- Deployment on hosting platforms
- Progressive Web App support

---

## Conclusion

This project helped me understand how to work with APIs, handle real-time data, and build a responsive user interface using JavaScript.

---

## Author

**Gyanendra Singh**  
GitHub: https://github.com/GYRaptor