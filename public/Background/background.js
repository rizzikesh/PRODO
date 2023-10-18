let color = "#3AA757";



// for responding to Content script messages (all urls)
chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.name == "message"){
        //send response
        response({text:"This is a response..."});
    }
});