import express from 'express'
import bodyParser from 'body-parser'
const app = express()

import * as cacheServer from './cache'
app.use (bodyParser.json())

app.use ('/teste' , function (req,res) {
    res.send ({message: 'Tudo ok'})
})

app.post ('/car' , function (req,res) {
    

    res.send (cacheServer.verificoPlacaEnCache('ABC'))

})


app.post ('/car' , function (req,res) {

    
    res.send (cacheServer.verificoRenavamEnCache('ABC'))

})

app.listen (8081, function(){
    console.log('prueba redis ok')
}
)