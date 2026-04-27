const mongoose =require("mongoose");

const schema =mongoose.Schema({
    role_name: {type: String,required: true},
    is_active: {type: Boolean, default: true},
    created_by:{
        type: mongoose.SchemaType.ObjectId,
        required: true
    }
},{
    timestamps:{
        createdAt: "created_at",
        updateAt: "update_at"
    }
});

class Users extends mongoose.Model{

}

schema.loadClass(Users):
module.exports=mongoose.model("users", schema);