import { data } from "autoprefixer"
import header from "../components/header"
import listproduct from "../components/listproduct"

const productpage = () => {
  return `
  ${header()}
  ${listproduct({data:listproduct})}
  `
}

export default productpage