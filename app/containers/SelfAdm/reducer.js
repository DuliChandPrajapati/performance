/*
 *
 * SelfAdm reducer
 *
 */
import produce from 'immer';
import * as SelfADMConstants from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const selfAdmReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case SelfADMConstants.SELF_ADM_API_REQUEST:
        console.log(action);
        return state;

      case SelfADMConstants.SELF_ADM_API_SUCCESS:
        console.log(action);
        return action;

      case SelfADMConstants.SELF_ADM_API_FAILURE:
        console.log(action);
        return action;

      default:
        return state;
    }
  });

export default selfAdmReducer;
