/* global document, XMLHttpRequest, window */

document.addEventListener("DOMContentLoaded", function () {
function addNote() {
    function _getPostData() {
        // TODO these (title, content, department) are the ids for form elements Kaisa creates.
        let title = document.getElementById('title').value;
        let content = document.getElementById('content').value;
        let department = document.getElementById('department').value;
        if (!title.length || !content.length){
              return null;
        }
        let time = Date.now();
        return {
            atimestamp : time, 
            title : title, 
            content : content, 
            astate : false, 
            department : {id : department}
        }
    }
    
    function _sendNote(postData) {
        let xhr = new XMLHttpRequest();
        
        // TODO /add-note is the post destination url(java side) 
        xhr.open("POST", 'http://10.114.32.42:8080/TorniNew/tower/note', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(postData)); 
        
        // Call a function when the state changes.
        xhr.onreadystatechange = function() {
            // Request finished. Do processing here.
            if(xhr.readyState == XMLHttpRequest.DONE) {
                if(xhr.status == 204) {
                    window.alert("You send the note successfully");
                } else {
                    // show error
                    window.alert("there was problem on the server");
                    return;
                }  
            } 
        }
    }
    
    // TODO add-note-btn is the id for send button Kaisa creates.
    let addNoteBtn = document.getElementById("addbtn");
    addNoteBtn.addEventListener("click", function (event) {
        // prevent the button from refreshing the page
        event.preventDefault();
        
        let postData = _getPostData();
        let postDataJson = JSON.stringify(postData);
        console.log(postDataJson);
        if (!postData) {
            // show error message
            window.alert("Please fill in all fields");
            return;
        }
        
        // send xhr post request
        _sendNote(postData);
    });
}

addNote();
});
