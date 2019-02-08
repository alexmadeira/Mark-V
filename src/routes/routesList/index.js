import Home from "../../pages/home";
import Projects from "../../pages/projetos";
import Project from "../../pages/projeto";
import Curriculo from "../../pages/curriculo";

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
  },
  {
    title: "Curriculo",
    path: "/teste",
    exact: true,
    component: Curriculo
  }
];

export default routes;
