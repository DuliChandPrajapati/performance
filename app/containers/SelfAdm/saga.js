import { call, put } from 'redux-saga/effects';

// Individual exports for testing
import * as AppConstants from 'utils/constants';
import request from 'utils/request';
import * as SelfADMConstants from './constants';

export default function* selfAdmSaga() {
  const requestURL = SelfADMConstants.SELF_ADM_API_URL;
  const dataRequest = SelfADMConstants.REQUEST_BODY;
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL, {
      method: AppConstants.HTTP_POST,
      headers: AppConstants.CLIENT_AUTH_HEADER,
      data: dataRequest,
    });
    yield put(data);
  } catch (err) {
    yield put(err);
  }
}
