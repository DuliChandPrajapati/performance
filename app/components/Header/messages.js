/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  salutation: {
    id: `${scope}.salutation`,
    defaultMessage: 'Hi',
  },
  userName: {
    id: `${scope}.userName`,
    defaultMessage: 'Amrit',
  },
  subHead: {
    id: `${scope}.subHead`,
    defaultMessage: 'Partner Head Ofﬁce',
  },
});
