import { call, put } from 'redux-saga/effects';

// Individual exports for testing
import * as AppConstants from 'utils/constants';
import request from 'utils/request';
import * as SelfADMConstants from './constants';
import { fetchAdmData, errorAdmData } from './actions';

/* -- SELF ADM SAGA --*/
export default function* selfAdmSaga() {
  const requestURL = SelfADMConstants.SELF_ADM_API_URL;
  const dataRequest = JSON.stringify(SelfADMConstants.REQUEST_BODY);
  try {
    const responseData = yield call(request, requestURL, {
      method: AppConstants.HTTP_POST,
      headers: AppConstants.CLIENT_AUTH_HEADER,
      body: dataRequest,
    });
    const dataObject = JSON.parse(responseData.response);
    const data = JSON.stringify(dataObject);
    yield put(fetchAdmData(data));
  } catch (err) {
    yield put(errorAdmData(err));
  }
}

// /* -- SELF ZONALRMOH SAGA --*/
// export function* selfZonalrmohSaga() {
//   const requestURL = SelfZONALRMOHConstants.SELF_ZONALRMOH_API_URL;
//   const dataRequest = JSON.stringify(SelfZONALRMOHConstants.REQUEST_BODY);
//   try {
//     const responseData = yield call(request, requestURL, {
//       method: AppConstants.HTTP_POST,
//       headers: AppConstants.CLIENT_AUTH_HEADER,
//       body: dataRequest,
//     });
//     const dataObject = JSON.parse(responseData.response);
//     const data = JSON.stringify(dataObject);
//     yield put(fetchZonalrmohData(data));
//   } catch (err) {
//     yield put(errorZonalrmohData(err));
//   }
// }

// /* -- TEAM ADM SAGA --*/
// export function* teamAdmSaga() {
//   const requestURL = TeamADMConstants.TEAM_ADM_API_URL;
//   const dataRequest = JSON.stringify(TeamADMConstants.REQUEST_BODY);
//   try {
//     const responseData = yield call(request, requestURL, {
//       method: AppConstants.HTTP_POST,
//       headers: AppConstants.CLIENT_AUTH_HEADER,
//       body: dataRequest,
//     });
//     const dataObject = JSON.parse(responseData.response);
//     const data = JSON.stringify(dataObject);
//     yield put(fetchTeamAdmData(data));
//   } catch (err) {
//     yield put(errorTeamAdmData(err));
//   }
// }

// /* -- TEAM AGENT SAGA --*/
// export function* teamAgentSaga() {
//   const requestURL = TeamAGENTConstants.TEAM_AGENT_API_URL;
//   const dataRequest = JSON.stringify(TeamAGENTConstants.REQUEST_BODY);
//   try {
//     const responseData = yield call(request, requestURL, {
//       method: AppConstants.HTTP_POST,
//       headers: AppConstants.CLIENT_AUTH_HEADER,
//       body: dataRequest,
//     });
//     const dataObject = JSON.parse(responseData.response);
//     const data = JSON.stringify(dataObject);
//     yield put(fetchTeamAgentData(data));
//   } catch (err) {
//     yield put(errorTeamAgentData(err));
//   }
// }

// /* -- TEAM PARTNER SAGA --*/
// export function* teamPartnerSaga() {
//   const requestURL = TeamPARTNERConstants.TEAM_PARTNER_API_URL;
//   const dataRequest = JSON.stringify(TeamPARTNERConstants.REQUEST_BODY);
//   try {
//     const responseData = yield call(request, requestURL, {
//       method: AppConstants.HTTP_POST,
//       headers: AppConstants.CLIENT_AUTH_HEADER,
//       body: dataRequest,
//     });
//     const dataObject = JSON.parse(responseData.response);
//     const data = JSON.stringify(dataObject);
//     yield put(fetchTeamPartnerData(data));
//   } catch (err) {
//     yield put(errorTeamPartnerData(err));
//   }
// }
