import axios from "axios"
import { router, useEffect } from "../libs"

const signin = () => {
    useEffect(() => {
        const form = document.querySelector("#form")
        const email = document.querySelector("#email")
        const password = document.querySelector("#password")

        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const newdata = {
                email: email.value,
                password: password.value
            }
            axios.post(`http://localhost:3000/users`, newdata)
                .then(() => router.navigate('/login'))
        })
    })
  return `
  <form onsubmit="return alert('đăng ký thành công')" action="" id="form">
  <div>email:
    <input type="email" name="" id="email" required>
  </div>
  <div>password:
    <input type="password" name="" id="password" required>
  </div>
  <div>
    <button>đăng ký</button>
  </div>
</form>
  `
}

export default signin