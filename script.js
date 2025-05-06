// Load theme preference from localStorage when the page loads
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('theme-dark');
    }
  };
  
  // Toggle between light and dark theme
  // Save the current theme in localStorage
  function toggleTheme() {
    document.body.classList.toggle('theme-dark');
    const isDark = document.body.classList.contains('theme-dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  // Trigger bounce animation when the user clicks the button
  function triggerAnimation(element) {
    // Remove the class to reset animation
    element.classList.remove('bounce');
  
    // Force reflow to allow re-adding the class (restarts the animation)
    void element.offsetWidth;
  
    // Add the class to start the bounce animation
    element.classList.add('bounce');
  }
  