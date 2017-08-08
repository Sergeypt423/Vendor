import store from 'Vendor/src/store';

export const get = () => store.getState().services.session;
