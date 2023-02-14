import { MenuList } from "../data/api"


const header = () => {
// console.log(fetch);
  return `
  ${MenuList.map(pro=>{
    return `
    <div class="menu">
    <ul>
      <li><a href="${pro.link}">${pro.name}</a></li>
    </ul>
  </div>
    `
  }).join("")}
  `
}

export default header