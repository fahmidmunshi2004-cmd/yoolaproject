//============ sidebar collapsed ============//
const toggleBtn = document.querySelector('.sidebar-toggle-btn');
const sidebar = document.querySelector('.rs-sidebar-wrapper');
const closeBtn = document.querySelector('.sidebar_close_icon');
const backdrop = document.querySelector('.backdrop');

// ===== Auto behavior on resize/load ===== //
function handleResponsiveSidebar() {
    if (window.innerWidth < 992) {
        document.body.classList.add('sidebar-collapsed');
        sidebar.classList.remove('active');
        backdrop.classList.remove('active'); // backdrop hide
    } else {
        document.body.classList.remove('sidebar-collapsed');
        sidebar.classList.remove('active');
        backdrop.classList.remove('active');
    }
}

// page load
window.addEventListener('load', handleResponsiveSidebar);

// window resize
window.addEventListener('resize', handleResponsiveSidebar);

// ===== Toggle button click ===== //
toggleBtn.addEventListener('click', () => {
    if (window.innerWidth < 992) {
        sidebar.classList.toggle('active');
        backdrop.classList.toggle('active');
    } else {
        document.body.classList.toggle('sidebar-collapsed');
    }
});

// ===== Close icon click ===== //
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    backdrop.classList.remove('active');
});

// ===== Backdrop click (optional UX) ===== //
backdrop.addEventListener('click', () => {
    sidebar.classList.remove('active');
    backdrop.classList.remove('active');
});