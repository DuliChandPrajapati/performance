/*
 *
 * SelfAdm constants
 *
 */
export const BASEURL =
  'https://egsjgj9mmk.execute-api.ap-south-1.amazonaws.com';

export const SELF_ADM_API_URL = `${BASEURL}/Productivity/self-adm`;
export const SELF_ZONALRMOH_API_URL = `${BASEURL}/Productivity/self-zonalrmoh`;

export const TEAM_ADM_API_URL = `${BASEURL}/Productivity/team-adm`;
export const TEAM_AGENT_API_URL = `${BASEURL}/Productivity/team-agent`;
export const TEAM_PARTNER_API_URL = `${BASEURL}/Productivity/team-partner`;

export const SELF_ADM_API_REQUEST = 'SELF_ADM_REQUEST';
export const SELF_ADM_API_SUCCESS = 'SELF_ADM_SUCCESS';
export const SELF_ADM_API_FAILURE = 'SELF_ADM_FAILURE';

// export const TEAM_ADM_API_REQUEST = 'TEAM_ADM_REQUEST';
// export const TEAM_ADM_API_SUCCESS = 'TEAM_ADM_SUCCESS';
// export const TEAM_ADM_API_FAILURE = 'TEAM_ADM_FAILURE';

// export const TEAM_AGENT_API_REQUEST = 'TEAM_AGENT_REQUEST';
// export const TEAM_AGENT_API_SUCCESS = 'TEAM_AGENT_SUCCESS';
// export const TEAM_AGENT_API_FAILURE = 'TEAM_AGENT_FAILURE';

// export const TEAM_PARTNER_API_REQUEST = 'TEAM_PARTNER_REQUEST';
// export const TEAM_PARTNER_API_SUCCESS = 'TEAM_PARTNER_SUCCESS';
// export const TEAM_PARTNER_API_FAILURE = 'TEAM_PARTNER_FAILURE';

// export const SELF_ZONALRMOH_API_REQUEST = 'SELF_ZONALRMOH_REQUEST';
// export const SELF_ZONALRMOH_API_SUCCESS = 'SELF_ZONALRMOH_SUCCESS';
// export const SELF_ZONALRMOH_API_FAILURE = 'SELF_ZONALRMOH_FAILURE';

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
