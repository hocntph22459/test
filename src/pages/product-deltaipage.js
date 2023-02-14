import { ListProduct } from "../data/api"

const product_deltaipage = ({data:{id}}) => {
    const list = ListProduct.find((list)=>list.id === +id)
    console.log(list);
    return `
    <div class="pro">
    <img src="${list.image}" alt="">
    <h3>${list.name}</h3>
    <p>${list.price}</p>
  </div>
  `
}

export default product_deltaipage