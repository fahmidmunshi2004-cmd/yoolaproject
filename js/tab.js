//======================= tab ============================//
document.querySelectorAll('.tab-wrapper').forEach(wrapper => {

    const tabs = wrapper.querySelectorAll('.tab-btn button');
    const contents = wrapper.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            tabs.forEach(t => t.classList.remove('custom__active'));
            tab.classList.add('custom__active');

            const target = tab.dataset.tab;

            contents.forEach(c => c.classList.add('hidden'));
            wrapper.querySelector('#' + target).classList.remove('hidden');
        });
    });

});



//======================================== switch tab ===========================================//
document.addEventListener("DOMContentLoaded", function () {

    // toggles //
    const surgeToggle = document.querySelector(".surge-price-toggle input[type='checkbox']");
    const serviceToggle = document.querySelector(".service-toggle input[type='checkbox']");

    // elements //
    const surgeEls = document.querySelectorAll(".surge-pricing");
    const serviceEls = document.querySelectorAll(".service-fee");

    function toggleElements(elements, isVisible) {
        elements.forEach(el => {
            el.classList.toggle("hidden", !isVisible);
        });
    }

    function updateUI() {

        const isSurgeOn = surgeToggle?.checked;
        const isServiceOn = serviceToggle?.checked;

        toggleElements(surgeEls, isSurgeOn);
        toggleElements(serviceEls, isServiceOn);
    }

    // events //
    surgeToggle?.addEventListener("change", updateUI);
    serviceToggle?.addEventListener("change", updateUI);

    // initial run //
    updateUI();

});
