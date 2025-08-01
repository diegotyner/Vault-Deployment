---
created:
  - " 07-26-2025 15:40"
tags:
---


Chrome extension structure: A minimal one can just use: manifest and background
```
extension-folder/
├── manifest.json               # REQUIRED: Metadata and permissions
├── background.js               # Background script or service worker (persistent/ephemeral logic)
├── content.js                  # Injected into webpages
├── popup.html                  # (Optional) UI when clicking the extension icon
├── popup.js                    # JS for the popup UI
├── options.html                # (Optional) Config page accessible via "Options"
├── options.js
├── icons/                      # Extension icon assets
│   └── icon128.png
├── styles/                     # CSS for popup/options/content
├── scripts/                    # Modular JS (e.g., logger.js, utils.js)
└── assets/                     # Static assets (e.g., fonts, templates)
```


### 🔗 Resources
- [Google Developer Docs](https://developer.chrome.com/docs/extensions/get-started)
- [Reddit thread](https://www.reddit.com/r/webdev/comments/15dpf79/a_few_tips_on_how_to_create_a_chrome_extension/)
- [Medium guide for clearing local/session storage](https://medium.com/@diksha.satpute/how-to-develop-a-chrome-extension-to-clear-local-and-session-storage-5e30b2434fa1)
- [Medium guide to developing/publishing chrome extension](https://medium.com/@mohitrathore15/complete-guide-to-developing-and-publishing-a-chrome-extension-acf2940f08c9)