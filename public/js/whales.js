// Function to add "active" class to the clicked menu item and scroll to the corresponding section
function scrollToSection(event) {
  event.preventDefault();

  // Remove "active" class from all menu items
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => item.classList.remove('active'));

  // Add "active" class to the clicked menu item
  event.target.classList.add('active');

  // Get the target section ID from the href attribute of the clicked menu item
  const targetSectionId = event.target.getAttribute('href').substring(1);

  // Scroll to the corresponding section
  const targetSection = document.getElementById(targetSectionId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Add click event listeners to all menu items
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => item.addEventListener('click', scrollToSection));

// Function to highlight the active menu item while scrolling
function highlightMenuItemOnScroll() {
  const sections = document.querySelectorAll('.section');

  // Loop through sections to find the one in the viewport
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Remove "active" class from all menu items
      menuItems.forEach(item => item.classList.remove('active'));

      // Get the corresponding menu item and add "active" class
      const menuItem = document.querySelector(`[href="#${section.id}"]`);
      menuItem.classList.add('active');
    }
  });
}

// Add scroll event listener to highlight the active menu item while scrolling
window.addEventListener('scroll', highlightMenuItemOnScroll);