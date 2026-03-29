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