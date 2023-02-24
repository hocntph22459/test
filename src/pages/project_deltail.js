import axios from "axios"
import { router, useEffect, useState } from "../libs"
const project_deltail = ({data:{id}}) => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/posts/${id}`)
        .then(({data})=>setdata(data))
    },[])
    useEffect(() => {
        const form = document.querySelector("#form")
        const title = document.querySelector("#title")
        const image = document.querySelector("#image")

        form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const urls = await uploadfile(image.files)
            const newdata = {
                title: title.value,
                image: urls
            }
            axios.put(`http://localhost:3000/posts/${id}`, newdata)
                .then(() => router.navigate('/'))
        })
        const uploadfile = async(files)=>{
            const clound_name = "dpy2w5vus"
            const preset_name = "demo_upload"
            const folder_name = "ecma"
            const api = `https://api.cloudinary.com/v1_1/${clound_name}/image/upload`
            const urls = []

            const formdata = new FormData();

            formdata.append("upload_preset",preset_name)
            formdata.append("folder",folder_name)

            for(const file of files){
                formdata.append("file",file)

                const reponse = await axios.post(api,formdata,{
                    headers:{
                        "Content-Type" : "multipart/form-data"
                    }
                })
                urls.push(reponse.data.secure_url)
            }
            return urls;
        }
    })
    return `
  <form onsubmit="return alert('thành công')" action="" id="form">
  <div>title:
    <input type="text" value="${data.title}" id="title">
  </div>
  <div>image:
    <input type="file" value="${data.image}" id="image">
  </div>
  <div>
    <button>sửa</button>
  </div>
</form>
  `
}

export default project_deltail