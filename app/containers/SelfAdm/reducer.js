/*
 *
 * SelfAdm reducer
 *
 */
import produce from 'immer';
import * as SelfADMConstants from './constants';

export const initialState = {
  data: {},
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */

/* SELF ADM REDUCER */
const selfAdmReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SelfADMConstants.SELF_ADM_API_REQUEST:
        draft.loading = true;
        break;

      case SelfADMConstants.SELF_ADM_API_SUCCESS:
        draft.loading = false;
        draft.data = action.data;
        break;

      case SelfADMConstants.SELF_ADM_API_FAILURE:
        draft.data = action.data;
        draft.loading = false;
        break;

      default:
        break;
    }
  });

export default selfAdmReducer;

// /* SELF ZONALRMOH REDUCER */
// const selfZonalrmohReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case SelfZONALRMOHConstants.SELF_ZONALRMOH_API_REQUEST:
//         draft.loading = true;
//         return draft;

//       case SelfZONALRMOHConstants.SELF_ZONALRMOH_API_SUCCESS:
//         draft.loading = false;
//         draft.data = action.data;
//         return draft;

//       case SelfZONALRMOHConstants.SELF_ZONALRMOH_API_FAILURE:
//         draft.data = action.data;
//         draft.loading = false;
//         return draft;

//       default:
//         return state;
//     }
//   });

// export default selfZonalrmohReducer;

// /* TEAM ADM REDUCER */
// const teamAdmReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case TeamADMConstants.TEAM_ADM_API_REQUEST:
//         draft.loading = true;
//         return draft;

//       case TeamADMConstants.TEAM_ADM_API_SUCCESS:
//         draft.loading = false;
//         draft.data = action.data;
//         return draft;

//       case TeamADMConstants.TEAM_ADM_API_FAILURE:
//         draft.data = action.data;
//         draft.loading = false;
//         return draft;

//       default:
//         return state;
//     }
//   });

// export default teamAdmReducer;

// /* TEAM AGENT REDUCER */
// const teamAgentReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case TeamAGENTConstants.TEAM_AGENT_API_REQUEST:
//         draft.loading = true;
//         return draft;

//       case TeamAGENTConstants.TEAM_AGENT_API_SUCCESS:
//         draft.loading = false;
//         draft.data = action.data;
//         return draft;

//       case TeamAGENTConstants.TEAM_AGENT_API_FAILURE:
//         draft.data = action.data;
//         draft.loading = false;
//         return draft;

//       default:
//         return state;
//     }
//   });

// export default teamAgentReducer;

// /* TEAM PARTNER REDUCER */
// const teamPartnerReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case TeamPartnerConstants.TEAM_PARTNER_API_REQUEST:
//         draft.loading = true;
//         return draft;

//       case TeamPartnerConstants.TEAM_PARTNER_API_SUCCESS:
//         draft.loading = false;
//         draft.data = action.data;
//         return draft;

//       case TeamPartnerConstants.TEAM_PARTNER_API_FAILURE:
//         draft.data = action.data;
//         draft.loading = false;
//         return draft;

//       default:
//         return state;
//     }
//   });

// export default teamPartnerReducer;
