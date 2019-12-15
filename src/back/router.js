function route(response, handle, pathname){
    console.log("Routing request for " + pathname)
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response, pathname)
    } 
    else{
        console.log("No request handler for " + pathname)
        response.writeHead(404, {"Content-Type": "text/plain"})
        response.write("404 Not found")
        response.end()
    }
}

exports.route = route

/*
Module calls function associated with paths specified in index.js.
Response is passed back to server.js as a fulfilled request.

Pass-backward: response.
*/