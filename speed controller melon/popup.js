// Function to update the text in the HTML
function updateText(speed) {
    if (speed) {
        document.getElementById('speedValue').innerText = speed.toFixed(2);
    }
}

// Ask for the speed as soon as you open the popup
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "get_speed"}, function(response) {
        if (response) updateText(response.currentSpeed);
    });
});

// Update speed when clicking "Faster"
document.getElementById('fastBtn').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "speed_up"}, function(response) {
            if (response) updateText(response.currentSpeed);
        });
    });
});

// Update speed when clicking "Slower"
document.getElementById('slowBtn').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "slow_down"}, function(response) {
            if (response) updateText(response.currentSpeed);
        });
    });
});