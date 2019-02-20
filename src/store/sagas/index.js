import { all, takeLatest } from 'redux-saga/effects';
import { Types as ProjectsTypes } from '../ducks/projects';
import { Types as ProjectTypes } from '../ducks/project';
import { Types as AgenciesTypes } from '../ducks/agencies';

import { getProjects } from './projects';
import { getProject } from './project';
import { getAgencies } from './agencies';

export default function* rootSaga() {
  yield all([
    takeLatest(ProjectsTypes.GET_REQUEST, getProjects),
    takeLatest(ProjectTypes.GET_REQUEST, getProject),
    takeLatest(AgenciesTypes.GET_REQUEST, getAgencies),
  ]);
}
