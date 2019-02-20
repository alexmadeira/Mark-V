import { combineReducers } from 'redux';

import projects from './projects';
import project from './project';
import agencies from './agencies';

export default combineReducers({
  projects,
  project,
  agencies,
});
