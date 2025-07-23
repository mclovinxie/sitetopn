function searchRankings(jsonFile, lang) {
  const query = document.getElementById("search-input").value.toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "🔍 Searching...";

  fetch(jsonFile)
    .then((res) => res.json())
    .then((data) => {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.country.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        resultsContainer.innerHTML = lang === "zh" ? "没有找到结果。" : "No results found.";
        return;
      }

      resultsContainer.innerHTML = "<ol>" + filtered.map(item => 
        `<li>${item.name} (${item.country}) - ${item.population.toLocaleString()}</li>`
      ).join("") + "</ol>";
    });
}
