// const { render } = require('jade');
const qr = require('qrcode')
let data = {
    "name" : "QRcode Tutorial",
    "email" : "abc@gmail.com",
    "gender" : "male",
    "id" : 123
};
let stJson = JSON.stringify(data);
qr.toString(stJson,{type:"terminal"},function(err,code){
    if(err) return console.log("error");
    console.log(code);
    // render(code)
});
qr.toDataURL(stJson, function(err,code){
    if (err) return console.log("error");
    console.log(code);
})
qr.toFile("QRcode.png",stJson,function(err){
    if(err) return console.log("error");
});