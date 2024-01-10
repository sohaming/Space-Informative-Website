document.addEventListener("DOMContentLoaded", function() {
    const animateText = document.querySelector(".animate-text");

    // Function to check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll event
    function handleScroll() {
        if (isInViewport(animateText)) {
            animateText.classList.add("animate");
            window.removeEventListener("scroll", handleScroll);
        }
    }

    // Initial check when the page loads
    handleScroll();

    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);
});
