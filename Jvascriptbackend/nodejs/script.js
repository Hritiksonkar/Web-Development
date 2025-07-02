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

// const http = require("http");
// const server=http.createServer(function(req, res) {
//     res.end("Hello, World!");
// }
// );
// server.listen(3000, function() {
//     console.log("Server is running on port 3000");
// });
//    start express

// const express = require("express");
//  const app=express()
//  app.get("/", function(req, res) {
//      res.send("Hello, World kahse !");
//  })
//  app.get("/profile", function(req, res) {
//      res.send("Hello, World1!");
//  })
//  app.listen(3000);

// middleware
const express = require("express");
const app = express();
app.use(function(req, res, next) {
    console.log("Middleware executed");
    next(); // Call the next middleware or route handler
});
app.use(function(req, res, next) {
    console.log("Middleware executed2 time");
    next();
});
app.get("/", function(req, res) {
    res.send("Hello, World!");
});
app.get("/about", function(req, res) {
    res.send("about page hai ye!");
});
//reqvest and response haindling
app.get("/profile", function(req, res, next) {
    return next(new Error("Profile not found"));
});
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.listen(3000);
 
 
