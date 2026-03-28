//============ sidebar collapsed ============//
const toggleBtn = document.querySelector('.sidebar-toggle-btn');

function isMobile() {
    return window.innerWidth <= 768;
}

toggleBtn.addEventListener('click', () => {
    if (isMobile()) {
        document.querySelector('.rs-sidebar-wrapper').classList.toggle('active');
        toggleBtn.classList.toggle('active');
    } else {
        document.body.classList.toggle('sidebar-collapsed');
    }
});