/*
 *
 * SelfAdm actions
 *
 */

import * as SelfADMConstants from './constants';

/* SELF ADM ACTION */
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

/* SELF ZONALRMOH ACTION */
export function requestZonalrmohData() {
  return {
    type: SelfADMConstants.SELF_ZONALRMOH_API_REQUEST,
  };
}
export function fetchZonalrmohData(data) {
  return {
    type: SelfADMConstants.SELF_ZONALRMOH_API_SUCCESS,
    data,
  };
}

export function errorZonalrmohData(err) {
  return {
    type: SelfADMConstants.SELF_ZONALRMOH_API_SUCCESS,
    err,
  };
}

/* TEAM ADM ACTION */
export function requestTeamAdmData() {
  return {
    type: SelfADMConstants.TEAM_ADM_API_REQUEST,
  };
}
export function fetchTeamAdmData(data) {
  return {
    type: SelfADMConstants.TEAM_ADM_API_SUCCESS,
    data,
  };
}

export function errorTeamAdmData(err) {
  return {
    type: SelfADMConstants.TEAM_ADM_API_SUCCESS,
    err,
  };
}

/* TEAM AGENT ACTION */
export function requestTeamAgentData() {
  return {
    type: SelfADMConstants.TEAM_AGENT_API_REQUEST,
  };
}
export function fetchTeamAgentData(data) {
  return {
    type: SelfADMConstants.TEAM_AGENT_API_SUCCESS,
    data,
  };
}

export function errorTeamAgentData(err) {
  return {
    type: SelfADMConstants.TEAM_AGENT_API_SUCCESS,
    err,
  };
}

/* TEAM PARTNER ACTION */
export function requestTeamPartnerData() {
  return {
    type: SelfADMConstants.TEAM_PARTNER_API_REQUEST,
  };
}
export function fetchTeamPartnerData(data) {
  return {
    type: SelfADMConstants.TEAM_PARTNER_API_SUCCESS,
    data,
  };
}

export function errorTeamPartnerData(err) {
  return {
    type: SelfADMConstants.TEAM_PARTNER_API_SUCCESS,
    err,
  };
}
