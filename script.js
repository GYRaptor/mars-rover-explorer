const API_KEY = "Aj4ZZNvf65Rdd6Yt1lfuoaIK3gRr6MUXVht46XRW";


let apodData = [];
let filteredData = [];

// FETCH DATA
async function fetchAPOD() {
  showLoader(true);

  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`
    );

    const data = await res.json();

    apodData = data;
    filteredData = data;

    displayData(filteredData);

  } catch (err) {
    console.log("Error:", err);
  }

  showLoader(false);
}

// DISPLAY DATA
function displayData(data) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No results found</p>";
    return;
  }

  data.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const formattedDate = new Date(item.date).toDateString();

    card.innerHTML = `
      <h3>${item.title}</h3>

      ${
        item.media_type === "image"
          ? `<img src="${item.url}" alt="${item.title}">`
          : `<iframe src="${item.url}" allowfullscreen></iframe>`
      }

      <p>${formattedDate}</p>
      <p>${item.explanation.slice(0, 120)}...</p>

      <div class="btns">
        <a href="${item.hdurl}" target="_blank">
          <button>View HD</button>
        </a>

        <button onclick="saveFavorite(${index})">Save</button>
      </div>
    `;

    container.appendChild(card);
  });
}

// SEARCH
document.getElementById("searchInput").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  filteredData = apodData.filter(item =>
    item.title.toLowerCase().includes(value)
  );

  displayData(filteredData);
});

// SORT
document.getElementById("sortSelect").addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === "new") {
    filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (value === "old") {
    filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  displayData(filteredData);
});

// DATE FILTER
document.getElementById("datePicker").addEventListener("change", async (e) => {
  const date = e.target.value;

  showLoader(true);

  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
  );

  const data = await res.json();

  filteredData = [data];
  displayData(filteredData);

  showLoader(false);
});

// FIXED FAVORITES FUNCTION
function saveFavorite(index) {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];

  favs.push(apodData[index]);

  localStorage.setItem("favorites", JSON.stringify(favs));
  alert("Saved!");
}

// THEME TOGGLE
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "🌞";
  } else {
    themeBtn.textContent = "🌙";
  }
});

// LOADER
function showLoader(state) {
  document.getElementById("loader").style.display = state ? "block" : "none";
}

// INIT
fetchAPOD();