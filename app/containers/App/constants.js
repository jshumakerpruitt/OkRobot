/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const API_ENDPOINT = 'http://localhost:4000';
// export const API_ENDPOINT = 'https://ok-robot.herokuapp.com';
export const RECEIVE_TOKEN = 'hellorobot/App/RECEIVE_TOKEN';
export const REVOKE_TOKEN = 'hellorobot/App/REVOKE_TOKEN';
export const OPEN_NAV = 'hellorobot/App/OPEN_NAV';
export const CLOSE_NAV = 'hellorobot/App/CLOSE_NAV';
export const SET_REDIRECT = 'hellorobot/App/SET_REDIRECT';
export const PUBLIC_ROUTES = ['/', '/login'];
export const SUBMIT_LOGIN = 'hellorobot/App/SUBMIT_LOGIN';
export const RECEIVE_ERROR = 'hellorobot/App/RECEIVE_ERROR';
export const RECEIVE_SUCCESS = 'hellorobot/App/RECEIVE_SUCCESS';
export const UPDATE_EMAIL = 'hellorobot/App/UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'hellorobot/App/UPDATE_PASSWORD';
