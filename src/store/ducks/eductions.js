export const Types = {
  GET_REQUEST: 'education/GET_REQUEST',
  GET_SUCCESS: 'education/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function education(state = INITIAL_STATE, action) {
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
  getEducationsRequest: filter => ({
    type: Types.GET_REQUEST,
    payload: { filter },
  }),
  getEducationsSucess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
