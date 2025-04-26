const mangoose= require("mongoose");

const ProductSchema= new mangoose.Schema({
        name:{
            type: String,
            requird: [true,'Please enter the product name her:']
        },
        
        quantity:{
            type: Number,
            required: true,
            default: 0
        },
        
        price:{
            type:Number,
            required: true,
            default:0
        },
});

const dbschema=mangoose.model("dbschema",ProductSchema);

module.exports=dbschema;