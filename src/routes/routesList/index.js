import Projects from "../../pages/projetos";
import Project from "../../pages/projeto";
import Home from "../../pages/home";

const routes = [
  {
    title: "Home",
    path: "/",
    exact: true,
    component: Home
  },
  {
    title: "Projetos",
    path: "/projetos",
    exact: true,
    component: Projects
  },
  {
    title: "Projeto",
    path: "/projeto/:slug",
    exact: true,
    component: Project
  }
];

export default routes;
