const express= require('express');

const router = express.Router();

const{CreateProduct,GetProduct,GetSingleProduct,UpdateProduct,DeleteProduct}=require("../controller/db.controller");

router.post("/",CreateProduct);
router.get("/",GetProduct);
router.get("/:id",GetSingleProduct);
router.put("/:id",UpdateProduct);
router.delete("/:id",DeleteProduct);
module.exports=router;