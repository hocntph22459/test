import axios from "axios"
import { router, useEffect, useState } from "../libs"

const login = () => {
    const [data,setdata] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/users`)
        .then(({data})=>setdata(data))
    },[])
    useEffect(() => {
        const form = document.querySelector("#form")
        const email = document.querySelector("#email")
        const password = document.querySelector("#password")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            for(const user of data){
                if(email.value == user.email && password.value == user.password){
                    router.navigate('/')
                }
                else{
                    return false
                }
            }
        })
    })
  return `
  <form action="" id="form">
  <div>email:
    <input type="email" name="" id="email" required>
  </div>
  <div>password:
    <input type="password" name="" id="password" required>
  </div>
  <div>
    <button>đăng nhập</button>
  </div>
</form>
  `
}

export default login