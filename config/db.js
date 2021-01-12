const mongoose = require('mongoose')

async function dbConnect(){
    try{
      const mydb =  await mongoose.connect('mongodb+srv://Shehla:menpagal@cluster0.tlhlb.mongodb.net/UserDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
console.log("Data base is connected");
    }
    catch(e){
        console.log(e);
    }
}
module.exports = dbConnect