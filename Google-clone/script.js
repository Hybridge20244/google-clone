const input = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const luckyBtn = document.getElementById("luckyBtn");

// Buscar con Google
searchBtn.addEventListener("click", () => {
    const query = input.value.trim();
    if (query !== "") {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

// Me siento con suerte
luckyBtn.addEventListener("click", () => {
    const query = input.value.trim();
    if (query !== "") {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
    }
});

// Enter para buscar
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});
