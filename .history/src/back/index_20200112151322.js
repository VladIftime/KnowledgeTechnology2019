const server = require("./server")
const router = require("./router")
const requestHandlers = require("./requestHandlers")

const handle = {
    "/": requestHandlers.readIndex,                 // loads index.html
    "/style.css": requestHandlers.readCSS,
    "/favicon.png": requestHandlers.readFavicon,
    
    "/questions.js": requestHandlers.readJS,
    "/inference.js": requestHandlers.readJS,
    "/collapsible.js": requestHandlers.readJS,
    "/instructions.js":
}

server.start(router.route, handle)

/*
Module is startpoint.
handle{} is a lookuptable of all paths that may be requested during runtime; each path is associated with an action.

Initialize: route, handle
Pass-forward: route, handle
*/