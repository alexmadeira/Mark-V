import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as AgenciesActions } from '../ducks/agencies';

export function* getAgencies(action) {
  try {
    const respose = yield call(api.get, `/agencies?${action.payload.filter}`);
    yield put(AgenciesActions.getAgenciesSucess(respose.data));
  } catch (err) {
    console.log(err);
  }
}
