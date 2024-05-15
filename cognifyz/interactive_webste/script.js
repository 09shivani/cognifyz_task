const postsContainer = document.getElementById('posts-container');
const postsList = document.getElementById('posts-list');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const li = document.createElement('li');
            const title = document.createElement('h2');
            const body = document.createElement('p');

            title.textContent = post.title;
            body.textContent = post.body;

            li.appendChild(title);
            li.appendChild(body);
            postsList.appendChild(li);
        });
    })
    .catch(error => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Sorry, something went wrong. Please try again later.';
        postsContainer.appendChild(errorMessage);
        console.error('Error fetching posts:', error);
    });
