var http=require("http")
var url=require("url")
var server=http.createServer(async(req,res)=>{
       var data=await fetch ("https://fakestoreapi.com/products");
       var dataa=await data.json();
    var urldata=req.url
    var parsedurl=url.parse(urldata,true);
    var cat=parsedurl.query.cat
    if(cat=="m"){
       var mens=dataa.filter((val)=>{
          return val.category=="men's clothing"
        })
    
    res.write(JSON.stringify(mens));
    res.end()
    }
   else if(cat=="w"){
        var mens=dataa.filter((val)=>{
           return val.category=="women's clothing"
         })
     
     res.write(JSON.stringify(mens));
     res.end()
        }
        else if(cat=="ele"){
            var mens=dataa.filter((val)=>{
               return val.category=="electronics"
             })
         
         res.write(JSON.stringify(mens));
         res.end()
            }
            else if(cat=="je"){
                var mens=dataa.filter((val)=>{
                   return val.category=="jewelery"
                 })
             
             res.write(JSON.stringify(mens));
             res.end()
                }
                else{
                    res.write(JSON.stringify(products));
                    res.end()
                }

})
server.listen(3002,()=>{
    console.log("server is running")
})

// const data = [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 30 },
//     { id: 3, name: "Charlie", age: 20 },
//     { id: 4, name: "David", age: 35 }
// ];

// var http = require("http");
// var url = require("url");

// var server = http.createServer((req, res) => {
//     let urldata = req.url;
//     let parsedurl = url.parse(urldata, true);
//     let queryParams = parsedurl;
// //  if (queryParams.sort === "desc") {
// //         data.sort((a, b) => b.name.length - a.name.length);
// //     } else if (queryParams.sort === "asc") {
// //         data.sort((a, b) => a.name.length - b.name.length);
// //     }

// //     res.write(JSON.stringify(sortedData));
// //     res.end();
// if(parsedurl.pathname=="/product"){
//     res.write(JSON.stringify(data));
//     res.end()
// }
// else if(parsedurl.pathname.startsWith("/product/")){
//     var spliteddata=parsedurl.pathname.split("/")
//     var routeval=spliteddata[spliteddata.length-1];
//     var data1=data.filter((val)=>{
//        return val.id==routeval;
//     })
//     res.write(JSON.stringify(data1));
//     res.end()
// }

// });

// server.listen(4000, () => {
//     console.log("Server is running on port 4000");
// });
