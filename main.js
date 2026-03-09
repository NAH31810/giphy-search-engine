//Configuration
const apiKey = "viizSmiK6vy6ijnmS31pse54fWItvOnm";
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("user-input");
const gifcontainer = document.getElementById("results-container");
const clearBtn = document.getElementById("clear-btn");

// Search Function
async function getGifs() {
  const searchTerm = searchInput.value;

  // Safety: dont search if input is empty
  if (!searchTerm) {
    alert("Please enter search term first!");
    return;
  }
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=12&rating=g`;
  try {
    const response = await fetch(url);
    const content = await response.json();

    //Clear previous results
    gifcontainer.innerHTML = "";

    // Loop and Diaplay

    ConstantSourceNode.data.forEach((gif) => {
      let img = document.createElement("img");
      img.src = gif.images.fixed_height.url;
      img.alt = gif.title || "Giphy Result"; //Fallback if title is missing
      img.classList.add("gif-item");
      gifcontainer.appendChild(img);
    });
  } catch (error) {
    console.error("Search Error:", error);
  }
}
// Event Listeners
