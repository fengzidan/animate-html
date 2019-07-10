// var path = require('path')
// var webpack = require('webpack')
var express = require('express')
var nodemailer = require('nodemailer')
var bodyParser = require('body-parser')
// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var compression = require('compression');

var app = express()
var apiRouter = express.Router()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
apiRouter.post('/email',function(req,res){
  res.send('respond with a resource');
  console.info('req,' , req.body.name,req.body.email)
  var text = "姓名是"+req.body.name+"邮箱是"+req.body.email
  if(req.body.name&&req.body.email){
    // res.json({
    //   iRet:1,
    //   info:"ok"
    // })
    var transporter = nodemailer.createTransport({
      // service:"qq",
      host: 'smtp.sina.com',
      port:587,
      secure:false,
      auth: {
        user: 'lingxi_danx@sina.com',
        pass: 'LingXi95'
      }
    })
    var mailOption = {
      to: req.body.email,
      from: "lingxi_danx@sina.com",
      subject: 'nodemailer发送邮件',
      text:text,
    }
    transporter.sendMail(mailOption,(error,info)=>{
      if(error){
        console.info(error);
        return 
      }
      res.send(info)
      console.info('邮件发送: ' + info.response);
      transporter.close();
    })
  } else {
    res.json({
        iRet: -1,
        info: 'error',
    });
    return;
  }
})
apiRouter.get("/get",function(req,res,next){
  var text = "姓名是"+req.query.name+"邮箱是"+req.query.email
  console.info(text)
  res.send(text);

})
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS"); //跨域允许的请求方式
  if (req.method.toLowerCase() == 'options')
      res.send(200); //让options尝试请求快速结束
  else
      next();
});
// app.use('/', indexRouter)
app.use('/api', apiRouter)
app.listen(8081, function() {
  console.info('复制打开浏览器', 'localhost:8081')
})