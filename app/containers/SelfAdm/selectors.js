import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the selfAdm state domain
 */

const selectSelfAdmDomain = state => state.selfAdm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SelfAdm
 */

const makeSelectSelfAdm = () =>
  createSelector(
    selectSelfAdmDomain,
    substate => substate,
  );

export default makeSelectSelfAdm;
export { selectSelfAdmDomain };
