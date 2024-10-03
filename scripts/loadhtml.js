function loadHTML(filePath, elementId) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar o arquivo: ${filePath}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Erro:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  // Carregar o navbar na div com ID 'navbar-container'
  loadHTML("components/navbar/index.html", "navbar-container");

  // Carregar outro conteúdo, por exemplo, um footer (se precisar)
  // loadHTML("footer.html", "footer-container");
});
