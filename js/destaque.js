const searchButton = document.getElementById('searchButton');
        const searchQuery = document.getElementById('searchQuery');
        searchButton.addEventListener('click', function() {
            const query = searchQuery.value.toLowerCase();
            const cards = document.querySelectorAll('.card');

            // Reduz o tamanho do campo de busca após a pesquisa
            searchQuery.style.width = query ? '150px' : '200px'; // Diminui a largura se houver algo na pesquisa

            cards.forEach(function(card) {
                const cardText = card.querySelector('.card-body').textContent.toLowerCase();
                if (cardText.includes(query)) {
                    card.style.display = 'block';  // Exibe o card
                } else {
                    card.style.display = 'none';   // Esconde o card
                }
            });

            if (query === '') {
                cards.forEach(function(card) {
                    card.style.display = 'block';  // Se a pesquisa estiver vazia, exibe todos os cards
                });
            }
        });