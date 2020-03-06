
let express = require('express');
let router = express.Router();
let nodemailer = require("nodemailer");
let cors = require("cors");
const creds = require("./config");

let transport = {
    host: "stmp.gmail.com",
    port: 587,
    secure:false,
    requireTLS: true,

    auth: {
    user: creds.USER,
    pass:creds.PASS
    }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success)=>{
    if (error){
        console.log(error);
    }else{
        console.log("server is ready to take messages");
    }
});

router.post("/send", (requestAnimationFrame, res, next) => {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n message: ${message}`

    let mail = {
        from: "senksjay@gmail.com",
        to: "shegesjay@gmail.com",
        subject: "new message from contact form",
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if(err){
            res.json({
                status:'fail'
            })
        }else{
            res.json({
                status: "success"
            })
        }
    })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use("/", router)
app.listen(3002)