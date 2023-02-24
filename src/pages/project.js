import axios from "axios"
import { router, useEffect, useState } from "../libs"

const project = () => {
    const [data,setdata] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/posts`)
        .then(({data})=>setdata(data))
    },[])
    useEffect(()=>{
        const btns = document.querySelectorAll("#btn-xoa")

        for(let btn of btns){
            const id = btn.dataset.id;
            btn.addEventListener("click",()=>{
                const project = data.filter((project)=>{
                    return project.id != id;
                })
                axios.delete(`http://localhost:3000/posts/${id}`)
                .then(()=>router.navigate('/'))
            })
        }
    })
  return `
  
<table class="">
<thead>
  <tr>
    <th>id</th>
    <th>title</th>
    <th>image</th>
    <th>
<a href="/project/add">thêm</a>

    </th>
  </tr>
</thead>
<tbody>
${data.map(list=>{
    return `
    <tr>
    <td>${list.id}</td>
    <td>${list.title}</td>
    <td>
        <img src="${list.image}" width="60px" alt="">
    </td>
    <td>
      <button onclick="return confirm('có chắc muốn xóa?')" id="btn-xoa" data-id="${list.id}">xóa</button>
      <a href="/project/${list.id}/edit">sửa</a>
    </td>
  </tr>
    `
}).join("")}
</tbody>
</table>
  `
}

export default project