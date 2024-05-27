# Mask LeetCode 🚀

I'm a big fan of **LeetCode** and have been solving a lot of questions on it. I've noticed that people often give up on hard or medium questions just by seeing the difficulty tag on the problem. To combat this, I've created a _simple Chrome extension_ that hides or masks the difficulty tags so that no one gives up on a question just because of its difficulty. This encourages users to give it a try without any preconceived notions.

## Features

- 🔍 Replaces "Easy," "Medium," and "Hard" difficulty tags with "🤔" on LeetCode.
- 🚀 Works dynamically as new content loads on the page.
- 🌐 Lightweight and easy to install.

## How It Works

The extension uses a content script to scan and modify the text content of elements on the LeetCode page. It observes changes in the DOM and ensures that any newly loaded content is also processed.

### Tech Stack

- **JavaScript**: The scripting language used to develop the extension.
- **Chrome Extensions API**: Provides the framework to build the extension.
- **HTML**: Used for the extension's manifest file.

### Preview 
![image](https://github.com/shrudex/mask-leetcode/assets/91502997/c6df72ce-e6bb-43c4-95e8-48ae08245144)
![image](https://github.com/shrudex/mask-leetcode/assets/91502997/e57cbe4a-e3a9-4cc6-aeaa-fb5a6ff6f1e0)


## Installation

Follow these steps to install the Mask LeetCode extension on your personal computer:

1. **Download the Extension**: Clone or download this repository to your local machine.
2. **Unzip the download**: Unzip the downloaded repository to a folder.
3. **Open Chrome Extensions**: Open Chrome and navigate to ```chrome://extensions/```.
4. **Enable Developer Mode**: Toggle the "_Developer mode_" switch in the top right corner.
5. **Load Unpacked**: Click on the "_Load unpacked_" button and select the directory where you downloaded/cloned the repository.
6. **Extension Installed**: You should now see the Mask LeetCode extension in your list of Chrome extensions.

## How to Use
Once installed, the extension will automatically run on LeetCode pages and mask the difficulty tags. You don't need to do anything special – just browse LeetCode as usual and focus on solving problems without being influenced by their difficulty tags.




