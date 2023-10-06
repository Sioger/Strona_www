/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


const readPosts = JSON.parse(sessionStorage.getItem('readPosts')) || [];

// Funkcja do oznaczania przeczytanych postów
function markPostAsRead(postId) {
    if (!readPosts.includes(postId)) {
        readPosts.push(postId);
        sessionStorage.setItem('readPosts', JSON.stringify(readPosts));
    }
}

// Oznaczanie przeczytanych postów na stronie
document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.post');

    posts.forEach(function(post) {
        const postId = post.dataset.postId;

        if (readPosts.includes(postId)) {
            post.classList.add('read');
        }

        const postLink = post.querySelector('.post-link');
        postLink.addEventListener('click', function(event) {
            if (event.button === 0 || event.button === 1) { // Sprawdzenie, czy kliknięto lewym lub środkowym przyciskiem myszy
                event.preventDefault();
                post.classList.add('read');
                markPostAsRead(postId);
                window.location.href = postLink.getAttribute('href');
            }
        });
    });
});



