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
export const RECEIVE_TOKEN = 'okrobot/App/RECEIVE_TOKEN';
export const STORE_TOKEN = 'okrobot/App/STORE_TOKEN';
export const REVOKE_TOKEN = 'okrobot/App/REVOKE_TOKEN';
export const OPEN_NAV = 'okrobot/App/OPEN_NAV';
export const CLOSE_NAV = 'okrobot/App/CLOSE_NAV';
export const SET_REDIRECT = 'okrobot/App/SET_REDIRECT';
export const PUBLIC_ROUTES = ['/', '/login', '/signup'];
export const SUBMIT_LOGIN = 'okrobot/App/SUBMIT_LOGIN';
export const RECEIVE_ERROR = 'okrobot/App/RECEIVE_ERROR';
export const RECEIVE_SUCCESS = 'okrobot/App/RECEIVE_SUCCESS';
export const UPDATE_EMAIL = 'okrobot/App/UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'okrobot/App/UPDATE_PASSWORD';
export const SET_NEXT_PATH = 'okrobot/App/SET_NEXT_PATH';
