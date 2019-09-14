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
  produce(state, (/* draft */) => {
    switch (action.type) {
      case SelfADMConstants.SELF_ADM_API_REQUEST:
        console.log(action);
        return state;

      case SelfADMConstants.SELF_ADM_API_SUCCESS:
        console.log(action);
        return state.merge({ fakeData: action.payload });

      case SelfADMConstants.SELF_ADM_API_SUCCESS:
        console.log(action);
        return state;

      default:
        return state;
    }
  });

export default selfAdmReducer;
