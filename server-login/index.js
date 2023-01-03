const  express =  require('express');
const  cors =     require('cors');
const  mongoose = require('mongoose')
const  route = require ('./route/route.js');
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/',route)

mongoose.connect("mongodb+srv://vikramsingh7568:AlLbBhXCJYPKmwIK@cluster0.5swhv4u.mongodb.net/react-login-signup?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


    app.listen(9000,function(req,res){
        console.log("server is running on port no 9000!")
    })