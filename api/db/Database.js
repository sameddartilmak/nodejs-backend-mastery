const mongoose =require("mongoose");
let instance =null;
class Database {
    constructor(){
        if (!instance){
            this.mongoConnection=null;
            instance =this;
        }
        return instance;
    }

    async connect(option){
        console.log("Database connecting...");
        let db =await mongoose.connect(option.CONNECTION_STRING);

        this.mongoConnection=db;
        console.log("Database connected");
    }
}

module.exports=Database;