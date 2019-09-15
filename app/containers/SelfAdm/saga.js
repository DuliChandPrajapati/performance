import { call, put } from 'redux-saga/effects';

// Individual exports for testing
import * as AppConstants from 'utils/constants';
import request from 'utils/request';
import * as SelfADMConstants from './constants';
import { fetchAdmData, errorAdmData } from './actions';

export default function* selfAdmSaga() {
  const requestURL = SelfADMConstants.SELF_ADM_API_URL;
  const dataRequest = JSON.stringify(SelfADMConstants.REQUEST_BODY);
  try {
    // Call our request helper (see 'utils/request')
    const responseData = yield call(request, requestURL, {
      method: AppConstants.HTTP_POST,
      headers: AppConstants.CLIENT_AUTH_HEADER,
      body: dataRequest,
    });
    const dataObject = JSON.parse(responseData.response);
    const data = JSON.stringify(dataObject);
    // console.log(data);
    yield put(fetchAdmData(data));
  } catch (err) {
    // console.log(err);
    yield put(errorAdmData(err));
  }
}
