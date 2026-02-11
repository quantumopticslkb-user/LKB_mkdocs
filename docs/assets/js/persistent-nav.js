// Preserve navigation state across page loads
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.md-nav__item--nested');
  
  // Restore expanded state
  navItems.forEach(function(item, index) {
    const key = 'nav-expanded-' + index;
    const isExpanded = localStorage.getItem(key) === 'true';
    
    if (isExpanded) {
      const input = item.querySelector('.md-nav__toggle');
      if (input) {
        input.checked = true;
      }
    }
    
    // Save state on toggle
    const toggle = item.querySelector('.md-nav__toggle');
    if (toggle) {
      toggle.addEventListener('change', function() {
        localStorage.setItem(key, toggle.checked);
      });
    }
  });
});
