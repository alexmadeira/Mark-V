export const Types = {
  GET_REQUEST: 'projects/GET_REQUEST',
  GET_SUCCESS: 'projects/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function projects(state = INITIAL_STATE, action) {
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
  getProjectsRequest: filter => ({
    type: Types.GET_REQUEST,
    payload: { filter },
  }),
  getProjectsSucess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
