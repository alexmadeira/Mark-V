import { all, takeLatest } from "redux-saga/effects";
import { Types as ProjectsTypes } from "../ducks/projects";
import { Types as ProjectTypes } from "../ducks/project";

import { getProjects } from "./projects";
import { getProject } from "./project";

export default function* rootSaga() {
  yield all([
    takeLatest(ProjectsTypes.GET_REQUEST, getProjects),
    takeLatest(ProjectTypes.GET_REQUEST, getProject)
  ]);
}
