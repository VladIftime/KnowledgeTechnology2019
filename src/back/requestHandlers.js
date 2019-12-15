const fs = require("fs")

function readFile(response, funcInfo){
    console.log("Request handler '%s' was called.", funcInfo.funcName)
    fs.readFile(funcInfo.filePath, function (err, file){
        if (err) throw err
        response.writeHead(200, {"Content-Type": funcInfo.fileType})
        response.write(file)
        response.end()
    })
}

/*
    Keep readIndex for loading a starting page under root:
        http://ourquiz.com/
*/
function readIndex(response){
    const funcInfo = {
        funcName: "readIndex",
        filePath: "./src/front/index.html",
        fileType: "text/html"
    }; readFile(response, funcInfo)
}

/*
    readHTML is for loading any other pages.
        https://ourquiz.com/otherpage.html
    For simplicity we use .html extensions in the domain bar.
    This way we can directly load a file from the pathname.
*/
function readHTML(response, pathname){
    const funcInfo = {
        funcName: "readIndex",
        filePath: "./src/front" + pathname,
        fileType: "text/html"
    }; readFile(response, funcInfo)
}

function readFavicon(response, pathname){
    const funcInfo = {
        funcName: "readFavicon",
        filePath: "./img" + pathname,
        fileType: "image"
    }; readFile(response, funcInfo)
}

function readCSS(response, pathname){
    const funcInfo = {
        funcName: "readCSS",
        filePath: "./src/front/" + pathname,
        fileType: "text/css"
    }; readFile(response, funcInfo)
}


function readJS(response, pathname){
    const funcInfo = {
        funcName: "readJS",
        filePath: "./src/front" + pathname,
        fileType: "text/javascript"
    }; readFile(response, funcInfo)
}

exports.readIndex = readIndex
exports.readFavicon = readFavicon
exports.readCSS = readCSS
exports.readJS = readJS

/*
Module contains functions associated to paths in index.js.
Functions read files asynchronously.
Read file is passed back to the router.js in response.

Pass-backward: response.
*/