import { render, router } from "./libs"
import login from "./pages/login"
import project from "./pages/project"
import project_add from "./pages/project_add"
import project_deltail from "./pages/project_deltail"
import signin from "./pages/signin"

const app = document.querySelector("#app")

router.on('/',()=>{
    render(project,app)
})
router.on('/project/add',()=>{
    render(project_add,app)
})
router.on('/project/:id/edit',(parmas)=>{
    render(()=>{
        return project_deltail(parmas)
    },app)
})
router.on('/signin',()=>{
    render(signin,app)
})
router.on('/login',()=>{
    render(login,app)
})

router.resolve()