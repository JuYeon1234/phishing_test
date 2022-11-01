// * ===== 사용할 패키지 호출 및 ===== * //
const express = require('express');
const app = express();
const port = 80;
let connection;

function appSet(){
    app.use(express.static("views"));
    app.engine('html', require('ejs').renderFile)
    app.set('view engine', 'html')


    const client = app.listen(port,()=> {
        console.log('클라이언트가 생성되었습니다.');
    })

    app.get('/index',(req, res)=>{
        res.render('index')
    });

    
     // * ===== app 종료  ===== * //
     const exitFunction = () => {
        // await connection.end();
        client.close()
        process.exit()
    }

    

    //do something when app is closing
    process.on('exit', async()=>{
        console.log('process.close')
        console.log(error);
        await exitFunction()
    })
    //catches ctrl+c event
    process.on('SIGINT', async()=>{
        console.log('process.SIGINT');
        await exitFunction()
    })
}
try {
    appSet();
}catch(e){
    console.error(e);
    appSet();
}

