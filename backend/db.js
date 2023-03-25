const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost:27017/blogApp')

module.exports=mongoose