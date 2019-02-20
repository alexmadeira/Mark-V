export const Types = {
  GET_REQUEST: 'agencies/GET_REQUEST',
  GET_SUCCESS: 'agencies/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function agencies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getAgenciesRequest: filter => ({
    type: Types.GET_REQUEST,
    payload: { filter },
  }),
  getAgenciesSucess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
