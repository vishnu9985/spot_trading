 console.log("=== News Fetcher === ");
//news fetcher project api key 5529ea051c742eaa88d6e1a86c6d788
let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-06-12&sortBy=publishedAt&apiKey=5529ea051c742eaa88d6e1a86c6d788";

//let url = "https://newsapi.org/v2/everything?q=tesla&from=2025-08-12&sortBy=publishedAt&apiKey=5529ea051c742eaa88d6e1a86c6d788";


const fetchBtn = document.getElementById("fetchBtn");
const newsDiv = document.getElementById("news");

if (fetchBtn && newsDiv) {
    fetchBtn.addEventListener("click", function() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let articles = Array.isArray(data.articles) ? data.articles : [];
                let output = "<h3>News Articles</h3><ul>";
                articles.forEach(article => {
                    output += `<li>
                        <h4>${article.source && article.source.name ? article.source.name : "No Source Name"}</h4>
                        <p>Author: ${article.author ? article.author : "Unknown"}</p>
                        <p>Title: ${article.title ? article.title : "No Title"}</p>
                        <a href="${article.url}" target="_blank">${article.url ? "Read Article" : "No URL"}</a>
                    </li>`;
                });
                output += "</ul>";
                newsDiv.innerHTML = output;
            })
            .catch(error => {
                console.error(error);
                newsDiv.innerHTML = "<p>Error fetching news.</p>";
            });
    });
} else {
    console.error('Required DOM elements not found.');
}
