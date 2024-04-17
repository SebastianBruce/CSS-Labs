//generated and explained by chatGPT
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabs ul li a');
    
    // We tried to do this but lack of JS knowledge stopped us, so we asked chatGPT to help, but we had the right idea
    const firstTab = tabs[0]; // Select the first tab
    const firstTabId = firstTab.getAttribute('href').substring(1);
    const firstTabPanel = document.querySelector(`#${firstTabId}`);

    // Activate the first tab and its corresponding tab panel by default
    firstTab.classList.add('active');
    firstTabPanel.classList.add('active');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const tabId = this.getAttribute('href').substring(1);
            const activeTab = document.querySelector(`#${tabId}`);

            // Remove 'active' class from all tabs and tab panels
            tabs.forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tabs div[role="tabpanel"]').forEach(panel => panel.classList.remove('active'));

            // Add 'active' class to the clicked tab and corresponding tab panel
            this.classList.add('active');
            activeTab.classList.add('active');
        });
    });
});
