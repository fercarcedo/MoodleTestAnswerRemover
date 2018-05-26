function removeMarkers() {
    browser.tabs.executeScript({file: "content_scripts/remove_markers.js"})
}

browser.browserAction.onClicked.addListener(removeMarkers);