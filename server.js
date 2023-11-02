// Creating a http server using nodejs

const http = require('http')

const { createFunc, readFunc, updateWithIndexFunc, delFunc } = require('./CRUD');
const { read } = require('fs');



const server = http.createServer(function (req, res) {
    // console.log(req.method, req.url);

    if (req.url == "/create" && req.method=='POST') {
        res.write(JSON.stringify(createFunc(10)));
    } else if (req.url == "/read" && req.method=='GET') {
        res.write(JSON.stringify(readFunc()));
    } else if (req.url == "/update" && req.method=='PUT') {
        res.write(JSON.stringify(updateWithIndexFunc(100, 0)));
    } else if (req.url == "/delete" && req.method=='DELETE') {
        res.write(JSON.stringify(delFunc(10)));
    } else {
        res.write("Request not supported")
    }
    res.end();

});


// const server = http.createServer(function(req, res){
//     // console.log(req.method, req.url);

//     if(req.url == "/"){
//         res.write("Request Looks Good");
//     }else if (req.url == "/pizza/now") {
//         res.write("Pizza yaha nhi milega");
//     }else{
//         res.write("Request not supported")
//     }
//     res.end();

// });

const port = 3000;

// Start the server and listen on a specific port
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});