 document.getElementById('searchBtn').addEventListener('click', function() {
            let searchTerm = document.getElementById('search').value.toLowerCase();
            let cards = document.querySelectorAll('.card');
            cards.forEach(function(card) {
                let title = card.getAttribute('data-title').toLowerCase();
                if (title.includes(searchTerm)) {
                    card.classList.add('small');  // Aplica a redução de tamanho
                } else {
                    card.classList.remove('small');  // Remove a redução de tamanho
                }
            });
        });