// Toggle Hamburger
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const close_btn = document.getElementById('closeBTN');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close_btn.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightbox_image = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const images = document.querySelectorAll('.gallery-container .images img');
let currentIdx = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.classList.remove('hidden');
    currentIdx = index;
    lightbox_image.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

next.addEventListener('click', () => {
  currentIdx = (currentIdx + 1) % images.length;
  lightbox_image.src = images[currentIdx].src;
});

prev.addEventListener('click', () => {
  currentIdx = (currentIdx - 1 + images.length) % images.length;
  lightbox_image.src = images[currentIdx].src;
});

// Scroll View
const explore_gallery = document.getElementById('explore_gallery');
const gallery = document.getElementById('gallery');

explore_gallery.addEventListener('click', () => {
  window.scrollTo ({
    top: gallery.offsetTop - 100,
    behavior: 'smooth'
  });
})

// Array key
const scrollUp = document.getElementById('scrollUp');
const scrollDown = document.getElementById('scrollDown');

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
});

scrollDown.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

// Get all filter buttons
const links = document.querySelectorAll('.menu a');
const imageContainers = document.querySelectorAll('.gallery-container .images');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    links.forEach(l => l.classList.remove('active'));

    link.classList.add('active');

    const filter = link.getAttribute('data-filter');

    imageContainers.forEach(container => {
      if (filter === 'gallery' || container.classList.contains(filter)) {
        container.style.display = 'block'; 
      } else {
        container.style.display = 'none'; 
      }
    });
  });
});

// Search Inputs (Desktop & Sidebar)
const searchInputs = document.querySelectorAll('.search-box input, .sidebar-search input');
const galleryImages = document.querySelectorAll('.gallery-container .images');

function filterByCategory(category) {
  const lowerCaseCategory = category.toLowerCase();

  galleryImages.forEach(image => {
    if (lowerCaseCategory === 'all' || lowerCaseCategory === '' || lowerCaseCategory === 'gallery') {
      image.style.display = 'block';
    } 
    else if (image.classList.contains(lowerCaseCategory)) {
      image.style.display = 'block'; 
    } 
    else {
      image.style.display = 'none'; 
    }
  });
}

searchInputs.forEach(input => {
  input.addEventListener('input', (e) => {
    filterByCategory(e.target.value.trim());
  });
});

