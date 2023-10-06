// Pobierz referencje do pola wyszukiwania i przycisku
const searchInput = document.querySelector('.form-control');
const searchButton = document.querySelector('#button-search');
const posts = document.querySelectorAll('.post');

// Funkcja obsługująca wyszukiwanie
function searchPosts() {
    // Pobierz wpisaną frazę wyszukiwania
    const searchTerm = searchInput.value.toLowerCase();

    // Przejdź przez wszystkie posty
    for (const post of posts) {
        const postTitle = post.querySelector('.card-title').textContent.toLowerCase();

        // Sprawdź, czy tytuł postu zawiera wpisaną frazę
        if (postTitle.includes(searchTerm)) {
            // Podświetl post
            post.style.backgroundColor = 'yellow';

            // Przejdź do strony postu
            const postLink = post.querySelector('.btn');
            if (postLink) {
                window.location.href = postLink.href;
                return; // Zatrzymaj iterację, gdy znajdziesz pierwszy pasujący post
            }
        } else {
            // Usuń podświetlenie z pozostałych postów
            post.style.backgroundColor = 'transparent';
        }
    }
}

// Dodaj obsługę zdarzenia dla przycisku wyszukiwania
searchButton.addEventListener('click', searchPosts);

// Dodaj obsługę zdarzenia dla wciśnięcia klawisza Enter w polu wyszukiwania
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchPosts();
    }
});
