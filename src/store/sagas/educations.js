import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as EducationsActions } from '../ducks/eductions';

export function* getEducations(action) {
  try {
    const respose = yield call(api.get, `/educations?${action.payload.filter}`);
    yield put(EducationsActions.getEducationsSucess(respose.data));
  } catch (err) {
    console.log(err);
  }
}
