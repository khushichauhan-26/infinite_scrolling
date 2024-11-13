// script.js

// Function to create new image items
function createImageItem() {
    const item = document.createElement('div');
    item.classList.add('item');

    const img = document.createElement('img');
    img.src = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`;
    img.alt = 'Random Image';
    img.style.width = '100%';
    img.style.borderRadius = '5px';

    item.appendChild(img);
    return item;
}

// Function to fetch new images
function fetchData() {
    const contentContainer = document.getElementById('content');
    for (let i = 0; i < 5; i++) { // Load 5 new images each scroll
        const newImageItem = createImageItem();
        contentContainer.appendChild(newImageItem);
    }
}

// Function to handle infinite scroll
function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchData();
    }
}

// Initial data load
fetchData();

// Scroll event listener
window.addEventListener('scroll', handleScroll);
