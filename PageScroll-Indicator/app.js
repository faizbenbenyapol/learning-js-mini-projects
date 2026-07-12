const progress = document.querySelector('.progress');
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    // Get the scroll position and container heights
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Calculate scroll percentage
    const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    
    // Update the progress bar width
    progress.style.width = `${scrollPercent}%`;
    
    // Handle visibility of the progress indicator (since visibility is hidden by default in CSS)
    if (scrollTop > 0) {
        scrollIndicator.style.visibility = 'visible';
    } else {
        scrollIndicator.style.visibility = 'hidden';
    }
});