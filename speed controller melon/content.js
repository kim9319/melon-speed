// --- 1. KEYBOARD CONTROLS ---
document.addEventListener('keydown', function(event) {
    let video = document.querySelector('video');
    if (!video) return;

    if (event.key === '=' || event.key === '+') video.playbackRate += 0.25;
    if (event.key === '-') video.playbackRate -= 0.25;
});

// --- 2. POP-UP MENU CONTROLS ---
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let video = document.querySelector('video');
    if (!video) return;

    if (request.message === "speed_up") {
        video.playbackRate += 0.25;
    } else if (request.message === "slow_down") {
        video.playbackRate -= 0.25;
    }

    // Send the speed back to the menu
    sendResponse({ currentSpeed: video.playbackRate });
});

// --- 3. THE NEW AD WATCHER ---
// We need to remember what your normal speed was before the ad started
let normalSpeed = 1.0; 
let isAdPlaying = false;

// "setInterval" creates a timer that runs this code over and over
// The "500" at the bottom means it checks every 500 milliseconds (half a second)
setInterval(function() {
    let video = document.querySelector('video');
    if (!video) return;

    // Look for the secret tag YouTube uses for ads
    let adIsHere = document.querySelector('.ad-showing');

    if (adIsHere) {
        // IF WE SEE AN AD:
        if (isAdPlaying === false) {
            // If this is the very start of the ad, save our normal speed so we don't forget it
            normalSpeed = video.playbackRate; 
            isAdPlaying = true;
        }
        // Force the video to go super fast!
        video.playbackRate = 10.0; 

    } else {
        // IF THERE IS NO AD:
        if (isAdPlaying === true) {
            // The ad just finished! Put the speed back to whatever it was before.
            video.playbackRate = normalSpeed;
            isAdPlaying = false;
        }
    }
}, 500);