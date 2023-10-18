//open chrome exension settings tab

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('manage_ext').addEventListener('click', function () {
        var extensionId = '';
        extensionId = chrome.runtime.id;
        chrome.tabs.create({ url: 'chrome://extensions/?id=' + extensionId });
    });
});

//open links in new tab
//replace with extension ID
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('new_tab').addEventListener('click', function () {
        var extensionId = chrome.runtime.id;
        chrome.tabs.create({ url: 'chrome-extension://' + extensionId + '/NewTab/newtab.html' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dash_board').addEventListener('click', function () {
        var extensionId = chrome.runtime.id;
        chrome.tabs.create({ url: 'chrome-extension://' + extensionId + '/Dashboard/dashboard.html' });
    });
});