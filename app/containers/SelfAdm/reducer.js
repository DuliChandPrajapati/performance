/*
 *
 * SelfAdm reducer
 *
 */
import produce from 'immer';
import * as SelfADMConstants from './constants';

export const initialState = {
  data: [],
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const selfAdmReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SelfADMConstants.SELF_ADM_API_REQUEST:
        draft.loading = true;
        return draft;

      case SelfADMConstants.SELF_ADM_API_SUCCESS:
        draft.loading = false;
        draft.data = action.data;
        return draft;

      case SelfADMConstants.SELF_ADM_API_FAILURE:
        draft.data = action.data;
        draft.loading = false;
        return draft;

      default:
        return state;
    }
  });

export default selfAdmReducer;
