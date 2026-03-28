//============ dropdown js ============//
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const btn = dropdown.querySelector('.dropdown-btn');
    const menu = dropdown.querySelector('.dropdown-menu');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // close others //
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            if (m !== menu) m.classList.remove('active');
        });

        // toggle current //
        menu.classList.toggle('active');
    });
});

// click outside //
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('active');
    });
});
