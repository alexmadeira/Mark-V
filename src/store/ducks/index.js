import { combineReducers } from 'redux';

import projects from './projects';
import project from './project';

export default combineReducers({
  projects,
  project,
});
