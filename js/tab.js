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

    const surgeToggle = document.querySelector(".surge-toggle input[type='checkbox']");
    const serviceToggle = document.querySelector(".service-toggle input[type='checkbox']");

    const info1 = document.querySelectorAll(".info-1");
    const info2 = document.querySelectorAll(".info-2");

    function updateInfo() {
        if (surgeToggle.checked && serviceToggle.checked) {
            info1.forEach(el => el.classList.add("hidden"));
            info2.forEach(el => el.classList.remove("hidden"));
        } else {
            info1.forEach(el => el.classList.remove("hidden"));
            info2.forEach(el => el.classList.add("hidden"));
        }
    }

    // event listeners //
    surgeToggle.addEventListener("change", updateInfo);
    serviceToggle.addEventListener("change", updateInfo);

});