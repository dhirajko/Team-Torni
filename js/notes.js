/* global document, XMLHttpRequest, window */

function addNote() {
    function _getPostData() {
        // TODO these (title, content, department) are the ids for form elements Kaisa creates.
        var title = document.getElementById('title').value;
        var content = document.getElementById('content').value;
        var department = document.getElementById('department').value;
        if (!title.length || !content.length){
              return null;
        }
        return {
            timestamp: Date.now(),
            title: title,
            content: content,
            department: department
        };
    }
    
    function _sendNote(postData) {
        var xhr = new XMLHttpRequest();
        
        // TODO /add-note is the post destination url(java side) 
        xhr.open("POST", '/add-note', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(postData)); 
        
        // Call a function when the state changes.
        xhr.onreadystatechange = function() {
            // Request finished. Do processing here.
            if(xhr.readyState == XMLHttpRequest.DONE) {
                if(xhr.status == 200) {
                    window.alert("there was NO problem on the server");
                } else {
                    // show error
                    window.alert("there was problem on the server");
                    return;
                }  
            } 
        }
    }
    
    // TODO add-note-btn is the id for send button Kaisa creates.
    var addNoteBtn = document.getElementById("add-note-btn");
    addNoteBtn.addEventListener("click", function (event) {
        // prevent the button from refreshing the page
        event.preventDefault();
        
        var postData = _getPostData();
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
