
Preliminary Knowledge:

    This is a web application that will be developed as a Chrome Extension.
    Steps to open this file as an extension:

    1. Open Chrome browser. Navigate to chrome://extensions
    2. Turn on the developer mode. [top right corner].
    3. To load extension files click Load Unpacked and choose Student Web Desk file.
    4. Click the reload icon to refresh. There might be a small error - having to do with google fonts - this will be fixed later. Don't worry about it.
    5. Open a new tab. Click allow or Keep changes. You should see the Web Desk.

    Notes: These are templates - meaning there is no dynamic functionality yet. (The clock and menu does not work yet). Only links to other pages work.
    Personal Security: Switch off developer mode when you're done working on the extension.

Folders:

    AppNotes: 
                        I used this folder to just save code snippets I had to delete to isolate errors.
                        You may do the same. 
                        Please name your file appropriately: Member Name - (chosen file name)

    Background:
                        This folder will be used for JavaScript scripts that will be running in the background. Example: database scripts.

    Calendar:
                        Code files for the Calendar page. You may save your images in this folder.

    Content Script:     This folder will be used for JavaScript scripts that may be used to change the content of our web pages dynamically.

    Dashboard:
                        Code files for the Dashboard page. You may save your images and css files in this folder.

    Images:
                        Media (images) files used for application is saved here.

    New Tab:            
                        Important folder: When the user downloads the file and embeds it in their browser, when they open a new tab the Student Web Desk opens up.
                                          You can turn off developer mode when you want to make this go away.

    Notes:
                        Code files for the Notes page. You may save your images and css files in this folder.

    Popup:
                        When a user downloads the chrome extension and embeds it in their browser an icon will be indicated in their browser on what extensions
                        are being used. These icons are usually clickable. When clicked a smaller screen will popup. We can use this for any popup functionality
                        we want.

    Study:
                        Code files for the Study page. You may save your images and css files in this folder.

    Styles:
                        Code files for css files.

    Tasks:
                        Code files for the Tasks page. You may save your images and css files in this folder.

    ToDo:
                        Code files for the Study page. You may save your images and css files in this folder.

    Widgets:
                        Code files for the Study page. You may save your images and css files in this folder.


Files:

    manifest.json:      Important file. No manifest file, no extension. Errors in manifest = no extension.
                                        Permissions are declared here. Keep permissions to a minimum. More permissions = less chance of Google approving our extension.
                                        Each permission will have to be justified with an explanation when we submit it to the Chrome Store.

    app.js:             Ignore file for now.

    firebase.js:        Used for database scripting.

    READMe.txt:         Notes for fellow developers on navigating how each files are to be used.
                        Please leave any notes here for fellow developers under an appropriate heading.




******************************* HAPPY CODING ***********************************