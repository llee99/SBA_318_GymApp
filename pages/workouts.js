//let workouts = await fetch(`http://localhost:3500/workouts/`).then(resp => resp.json());

// API endpoint (replace with actual API URL)
const apiUrl = 'http://localhost:3500/workouts/';

// Fetch data from the API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Get the div to display the data
        const apiDataDiv = document.getElementById('api-data');

        // Loop through the data and create HTML elements
        data.forEach(item => {
            const post = document.createElement('div');
            post.innerHTML = `<h2>${item.title}</h2><h3>${item.category}</h3><p>${item.description}</p><p>${item.equipment}</p><p>${item.instructions}</p>`;
            apiDataDiv.appendChild(post);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
