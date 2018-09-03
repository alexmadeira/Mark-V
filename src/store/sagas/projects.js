import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ProjectsActions } from "../ducks/projects";

export function* getProjects() {
  try {
    const respose = yield call(api.get, "/projects");
    yield put(ProjectsActions.getProjectsSucess(respose.data));
  } catch (err) {
    console.log(err);
  }
}
