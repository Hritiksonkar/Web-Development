// const hello = "Hello, World!";
// console.log(hello);

// const { log } = require('node:console');
//  const fs = require("fs"); 
// fs.writeFile("hay.txt","hey hello kaise ho ",function(err){
//     if(err)console.error(err);
//     else log("File written successfully");
// })

// fs.appendFile("hay.txt", "hello world", function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File updated successfully");
//     }
// });

// fs.rename("hay.txt", "hay1.txt", function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File renamed successfully");
//     }
// });

// fs.copyFile("hay1.txt", "./copy/devloper.txt", function(err) {
//     if (err) console.error(err);
//     else console.log("File copied successfully");
    
// })
// fs.unlink("hay1.txt", function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File deleted successfully");
//     }
// });

// fs.rmdir*("copy", { recursive: true }, function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Directory deleted successfully");
//     }
// } );

// fs.readFile("hay1.txt", "utf-8", function(err, data) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("File content:", data);
//     }
// });

const http = require("http");
const server=http.createServer(function(req, res) {
    res.end("Hello, World!");
}
);
server.listen(3000, function() {
    console.log("Server is running on port 3000");
});