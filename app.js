// * ===== 사용할 패키지 호출 및 ===== * //
const express = require('express');
const app = express();
const port = 80;
let connection;


app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.listen(80, function(){
    console.log("listening on port 80");
});

app.get('/index',(req, res)=>{
    res.render('index')
});
