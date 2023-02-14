import { ListProduct } from "../data/api"

const listproduct = ({ data }) => {
  return `
  <div class="row">
  ${ListProduct.map(pro => {
    return `
        <div class="col">
    <a href="/product/${pro.id}">
    <img src="${pro.image}" alt="">
    </a>
    <a href="/product/${pro.id}">
    <h3>${pro.name}</h3>
    </a>
        <p>${pro.price}</p>
        </div>
    `
  })}
  </div>
  `
}

export default listproduct