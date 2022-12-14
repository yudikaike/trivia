import {
  SAVE_EMAIL,
  SAVE_NAME,
  SAVE_GRAVATAR,
  SAVE_SCORE,
  UPDATE_ASSERTIONS,
  RESET_SCORE,
  RESET_ASSERTIONS } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  gravatar: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return { ...state, gravatarEmail: action.email };
  case SAVE_NAME:
    return { ...state, name: action.name };
  case SAVE_GRAVATAR:
    return { ...state, gravatar: action.gravatar };
  case SAVE_SCORE:
    return { ...state, score: action.score + state.score };
  case UPDATE_ASSERTIONS:
    return { ...state, assertions: state.assertions + action.assertions };
  case RESET_ASSERTIONS:
    return { ...state, assertions: 0 };
  case RESET_SCORE:
    return { ...state, score: 0 };
  default:
    return state;
  }
};

export default player;
