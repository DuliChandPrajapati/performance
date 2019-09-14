/*
 *
 * SelfAdm constants
 *
 */
export const SELF_ADM_API_URL =
  'https://gatewayuat.maxlifeinsurance.com/apimgm/sb/soa/dm/supervisor/view/productivity/self/adm';
export const SELF_ADM_API_REQUEST = 'SELF_ADM_REQUEST';
export const SELF_ADM_API_SUCCESS = 'SELF_ADM_SUCCESS';
export const SELF_ADM_API_FAILURE = 'SELF_ADM_FAILURE';
export const REQUEST_BODY = {
  request: {
    header: {
      soaCorrelationId: '315656895234',
      soaAppId: 'SUPERVISORVIEW',
    },
    payload: {
      ssoId: '',
      supAgentId: '419065',
      designation: 'ADM',
      role: '',
      bucket: 'MTD',
    },
  },
};
