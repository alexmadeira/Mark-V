import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as ProjectActions } from "../ducks/project";

export function* getProject(action) {
  try {
    const respose = yield call(
      api.get,
      `/projects/?slug_like=${action.payload.slug}&_expand=agency`
    );

    yield put(ProjectActions.getProjectSucess(respose.data));
  } catch (err) {
    console.log(err);
  }
}
