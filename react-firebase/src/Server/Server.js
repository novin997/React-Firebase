const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

const port = process.env.PORT || 8080;

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

app.use(express.static(__dirname));
app.use(fileUpload());

app.post("/uploadImage", async (req,res)=>{
    if(!req.files)
        return res.status(400).send("No Image file is uploaded.");

    console.log(req);

    let image = req.files.image;
    const name = req.body.refId;

    image.mv(__dirname + "/Images/" + name + ".jpg",(error)=>
    {
        if(error)
            return res.status(500).send(error);
        
        res.send("Image sent to server");
    });
});

app.listen(port,()=>{
    console.log(`Server is listening to Port: ${port}`);
});