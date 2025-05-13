"use strict";
//Navbar hides when scrolling
var scrollOn = window.pageYOffset;
window.onscroll = function(){
    var scrollOff = window.pageYOffset;
    if (scrollOn > scrollOff) {
        document.getElementById("menu").style.top = "0";
    }else{
        document.getElementById("menu").style.top = "-80px";
    }
    scrollOn = scrollOff;
}

//Gallery
// Array of image objects
const galleryImages = [{src: 'gallery/aiah.jpg'},
    {src: 'gallery/colet.jpg'},
    {src: 'gallery/gwen.jpg'},
    {src: 'gallery/jho.jpg'},
    {src: 'gallery/maloi.jpg'},
    {src: 'gallery/mikha.jpg'},
    {src: 'gallery/sheena.jpg'},
    {src: 'gallery/stacey.jpg'},
    {src: 'gallery/group1.jpg'},
    {src: 'gallery/group2.jpg'},
    {src: 'gallery/group3.jpg'},
    {src: 'gallery/group4.jpeg'}
];

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('galleryContainer');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    // Function to generate gallery items
    function createGalleryItems(images) {
        images.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt || `Gallery Image ${index + 1}`;

            galleryItem.appendChild(img);
            galleryContainer.appendChild(galleryItem);

            // Add click event for lightbox
            galleryItem.addEventListener('click', () => {
                lightboxImage.src = image.src;
                lightbox.style.display = 'flex';
            });
        });
    }

    // Generate the gallery
    createGalleryItems(galleryImages);

    // Close lightbox functionality
    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

// Calendar Setup
const calendarContainer = document.getElementById('calendarContainer');
const daysInMonth = 31; // Assuming a month with 31 days
const events = {
    6: ['BINIVerse: The First Solo Concert - Baguio City'],
    11: ['Cherry On Top Song Release'],
    12: ['Nasa Atin Ang Panalo Thanksgiving Concert'],
    14: ['BINIVerse: The First Solo Concert - Cebu City'],
    20: ['BINIVerse: The First Solo Concert - General Santos City'],
    27: ['KCON LA 2024 Pre Show'],
    28: ['KCON LA 2024: Panel Session']
};

// Function to create calendar
function createCalendar() {
    for (let day = 1; day <= daysInMonth; day++) {
        const calendarDay = document.createElement('div');
        calendarDay.classList.add('calendar-day');

        const dayNumber = document.createElement('h3');
        dayNumber.textContent = day;
        calendarDay.appendChild(dayNumber);

        // Add events for the day
        if (events[day]) {
            events[day].forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.classList.add('calendar-event');
                eventElement.textContent = event;
                calendarDay.appendChild(eventElement);
            });
        }

        calendarContainer.appendChild(calendarDay);
    }
}

// Generate the calendar
createCalendar();

