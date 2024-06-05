/* eslint-disable */
type EnMessages = typeof import('./src/messages/en.json');
type FrMessages = typeof import('./src/messages/fr.json');
type ArMessages = typeof import('./src/messages/ar.json');

declare interface IntlMessages extends EnMessages, FrMessages, ArMessages {}
