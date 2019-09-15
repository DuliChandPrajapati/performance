/*
 *
 * SelfAdm actions
 *
 */

import * as SelfADMConstants from './constants';

export function requestAdmData() {
  return {
    type: SelfADMConstants.SELF_ADM_API_REQUEST,
  };
}
export function fetchAdmData(data) {
  return {
    type: SelfADMConstants.SELF_ADM_API_SUCCESS,
    data,
  };
}

export function errorAdmData(err) {
  return {
    type: SelfADMConstants.SELF_ADM_API_SUCCESS,
    err,
  };
}
