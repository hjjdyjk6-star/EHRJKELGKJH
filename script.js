// Get dropdown elements
const stageBtn = document.getElementById('stageBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const stageContents = document.querySelectorAll('.stage-content');

// Toggle dropdown menu
stageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle('show');
    stageBtn.classList.toggle('active');
});

// Handle dropdown items click
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const stage = item.getAttribute('data-stage');
        
        // Remove active class from all items
        dropdownItems.forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Update button text
        const itemText = item.querySelector('.item-text').textContent;
        const itemIcon = item.querySelector('.item-icon').textContent;
        document.querySelector('.dropdown-text').textContent = itemText;
        
        // Hide all stage contents
        stageContents.forEach(content => content.classList.remove('active'));
        
        // Show selected stage content
        const selectedContent = document.getElementById(stage);
        if (selectedContent) {
            selectedContent.classList.add('active');
        }
        
        // Close dropdown
        dropdownMenu.classList.remove('show');
        stageBtn.classList.remove('active');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
        dropdownMenu.classList.remove('show');
        stageBtn.classList.remove('active');
    }
});

// Set first item as active on load
document.addEventListener('DOMContentLoaded', () => {
    dropdownItems[0].classList.add('active');
    console.log('منصة الدروس جاهزة للعمل!');
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Add event delegation for video interactions
document.addEventListener('click', (e) => {
    if (e.target.closest('.video-card')) {
        console.log('تم اختيار فيديو');
    }
});
