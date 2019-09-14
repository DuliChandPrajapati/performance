/*
 *
 * SelfAdm actions
 *
 */

import * as SelfADMConstants from './constants';

export function defaultAction() {
  return {
    type: SelfADMConstants.SELF_ADM_API_REQUEST,
  };
}
