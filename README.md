# melon-speed
A custom Google Chrome extension that gives you total control over YouTube video speeds!

A custom Google Chrome extension that gives you total control over YouTube video speeds! 

I built this project to learn how Chrome extensions work, using HTML, CSS, and JavaScript.

## ✨ Features

* **Keyboard Controls:** Quickly press the `+` (or `=`) key to speed up the video, and the `-` key to slow it down.
* **Control Panel:** Click the extension icon to open a popup menu where you can click buttons to change the speed and see the exact current speed.
* **Smart Ad Watcher:** Automatically detects when a YouTube ad is playing and rockets the speed to 10x! When the real video comes back, it returns to your normal speed.
* **Memory:** Uses Chrome's local storage to remember your favorite speed, even if you close the browser or open a new video.

## 📁 Files in this Project

* `manifest.json` - The "rulebook" that tells Chrome how the extension works and asks for storage permissions.
* `popup.html` - The "paint" that creates the look of the control panel menu.
* `popup.js` - The "remote control" that makes the menu buttons work and checks the video speed 5 times a second.
* `content.js` - The "engine" that runs on the YouTube webpage, listens for commands, watches for ads, and changes the actual video speed.

## 🚀 How to Install and Use

Since this is a custom extension, it is not in the Chrome Web Store. You can install it on your own browser in just a few clicks!

1. Click the green **Code** button at the top of this page and select **Download ZIP**.
2. Unzip the folder on your computer.
3. Open Google Chrome and type `chrome://extensions/` in the top address bar.
4. Turn on **Developer mode** using the switch in the top right corner.
5. Click the **Load unpacked** button in the top left corner.
6. Select the folder you just unzipped.
7. Go to YouTube, refresh the page, and enjoy!
