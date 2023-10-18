
//1. manifest takes note of the site that is being visited
//2. Runs contentScript.js if any of the array urls match the page url
//3. contentScript (this statement below) runs
//4. sends a message (with a particular name)
//5. background.js responds (using its event listener) with a string value
//6. the string value is assigned to 'response' var and displayed
chrome.runtime.sendMessage({name: 'message'}, (response)=> {
    //wait for response

    //update display on content script
    document.querySelector('body').innerHTML = response.text;
});