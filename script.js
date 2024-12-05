// Check if a section is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}

// Add the 'visible' class to sections when they're in the viewport
function handleScroll() {
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
        if (isElement
