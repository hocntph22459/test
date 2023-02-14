import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { render, router } from "./libs";
import adminproduct from "./pages/admin/adminproduct";
import homepage from "./pages/homepage";
import product_deltaipage from "./pages/product-deltaipage";
import productpage from "./pages/productpage";

const app = document.querySelector('#app');


router.on('/',()=>{
    render(homepage,app)
})
router.on('/product',()=>{
    render(productpage,app)
})


router.on('/product/:id',(parmas)=>{
    render(()=>{
        return product_deltaipage(parmas)
    },app)
})
router.on('/admin/product',()=>{
    render(adminproduct,app)
})
router.resolve()