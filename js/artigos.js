const searchButton = document.getElementById('searchButton');
const searchQuery = document.getElementById('searchQuery');
const articlesList = document.getElementById('articlesList');

// Reduz o tamanho do campo de pesquisa após a pesquisa
searchButton.addEventListener('click', function () {
    const query = searchQuery.value.toLowerCase();
    
    // Diminui a largura do campo de pesquisa após a pesquisa
    searchQuery.style.width = query ? '150px' : '300px';

    const articles = articlesList.querySelectorAll('.media');

    articles.forEach(function (article) {
        const title = article.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            article.style.display = 'block';  // Exibe o artigo
        } else {
            article.style.display = 'none';   // Esconde o artigo
        }
    });

    // Se a pesquisa estiver vazia, exibe todos os artigos
    if (query === '') {
        articles.forEach(function (article) {
            article.style.display = 'block';
        });
    }
});