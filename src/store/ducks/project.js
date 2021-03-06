export const Types = {
  GET_REQUEST: 'project/GET_REQUEST',
  GET_SUCCESS: 'project/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function project(state = INITIAL_STATE, action) {
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
  getProjectRequest: slug => ({ type: Types.GET_REQUEST, payload: { slug } }),
  getProjectSucess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
