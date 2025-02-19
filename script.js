// Smooth scrolling for navigation links
// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {  // Ensure the target exists
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

.advertisement-item:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out;
}


function toggleDetails(card) {
    const details = card.querySelector('.details');
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
// JavaScript to handle animations on scroll
function revealTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const bounding = item.getBoundingClientRect();
        if (bounding.top <= window.innerHeight / 1.2 && bounding.bottom >= 0) {
            item.classList.add('in-view');
        } else {
            item.classList.remove('in-view');
        }
    });
}

window.addEventListener('scroll', revealTimelineItems);
window.addEventListener('load', revealTimelineItems);

