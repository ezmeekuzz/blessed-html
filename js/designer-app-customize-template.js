document.addEventListener('DOMContentLoaded', function() {
    
    // --- Sidebar Toggle Functionality ONLY ---
    const sidebar = document.getElementById('sidebarMenu');
    const toggleBtn = document.getElementById('toggleSidebar');
    const toggleIcon = document.getElementById('toggleIcon');
    
    // Check if sidebar state is stored in localStorage
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
        toggleIcon.classList.remove('bi-chevron-left');
        toggleIcon.classList.add('bi-chevron-right');
        toggleBtn.innerHTML = '<i class="bi bi-chevron-right" id="toggleIcon"></i>';
    }
    
    // Toggle sidebar on button click
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        // Update icon and button text
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.classList.remove('bi-chevron-left');
            toggleIcon.classList.add('bi-chevron-right');
            toggleBtn.innerHTML = '<i class="bi bi-chevron-right" id="toggleIcon"></i>';
            localStorage.setItem('sidebarCollapsed', 'true');
        } else {
            toggleIcon.classList.remove('bi-chevron-right');
            toggleIcon.classList.add('bi-chevron-left');
            toggleBtn.innerHTML = '<i class="bi bi-chevron-left" id="toggleIcon"></i> <span class="menu-text ms-2"></span>';
            localStorage.setItem('sidebarCollapsed', 'false');
        }
    });
    
    // Add keyboard navigation (optional) - Ctrl+M to toggle sidebar
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'm') {
            e.preventDefault();
            toggleBtn.click();
        }
    });
    
    // Responsive behavior - auto collapse on small screens
    function handleResize() {
        if (window.innerWidth < 768) {
            if (!sidebar.classList.contains('collapsed')) {
                sidebar.classList.add('collapsed');
                toggleIcon.classList.remove('bi-chevron-left');
                toggleIcon.classList.add('bi-chevron-right');
                toggleBtn.innerHTML = '<i class="bi bi-chevron-right" id="toggleIcon"></i>';
                localStorage.setItem('sidebarCollapsed', 'true');
            }
        }
    }
    
    // Check on load
    handleResize();
    
    // Check on resize
    window.addEventListener('resize', handleResize);
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the main image area element
    const mainImageArea = document.querySelector('.main-image-area');
    
    // Get all tab buttons
    const createNewTab = document.getElementById('create-new-tab');
    const otherTabs = document.querySelectorAll('.tab-button:not(#create-new-tab)');
    
    // Function to show main image area
    function showMainImageArea() {
        if (mainImageArea) {
            mainImageArea.style.display = 'block';
        }
    }
    
    // Function to hide main image area
    function hideMainImageArea() {
        if (mainImageArea) {
            mainImageArea.style.display = 'none';
        }
    }
    
    // Add click event to Create New tab
    if (createNewTab) {
        createNewTab.addEventListener('click', function() {
            hideMainImageArea();
        });
    }
    
    // Add click events to all other tabs
    otherTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            showMainImageArea();
        });
    });
    
    // Also handle Bootstrap tab events for more reliable tab switching
    const tabElements = document.querySelectorAll('button[data-bs-toggle="tab"]');
    tabElements.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function(event) {
            // Check if the activated tab is the Create New tab
            if (event.target.id === 'create-new-tab') {
                hideMainImageArea();
            } else {
                showMainImageArea();
            }
        });
    });
});