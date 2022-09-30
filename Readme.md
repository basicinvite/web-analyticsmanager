# Web Analytics Manager
## General Information
This project is intended for use in managing tracking events for various analytics tools, such as Google Analytics, Facebook Pixel, etc.

This extension is the core analytics manager. To use this, install the appropriate support plugins, depending on which analytics tools you are using for tracking.

---
## Installation Instructions
To install this extension follow these instructions below...
1. Step 1 ---- 
2. Step 2 ----
3. Step 3 ----

`insert install commands here`

---
## Usage
Analytics managers will can be created by accessing the web-analyticsmanager global variable. Each manager has a tracking code (typically a script that is added to the page) and a tracking id (which is usually an identifier associated with your analytics tool). This tracking code gets automatically added to the page a new analytics manager is initialized.

`window.WebAnalyticsManager.Base.addTracking(ManagerConfig {trackingCode: '<div class="tracking-code"></div>', trackingId: 'this is my id'})`

You must always initialize the manager before firing any event tracking.

