// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';
import { setNextPath } from 'containers/App/actions';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

const checkToken = (store) => (nextState, replace) => {
  const token = store.getState().get('global').toJS().token;
  const prevPath = store
    .getState()
    .getIn(['route', 'locationBeforeTransitions'])
    .toJS().pathname;
  store.dispatch(setNextPath(prevPath));
  if (token.length === 0) {
    replace('/login');
  }
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage/reducer'),
          System.import('containers/HomePage/sagas'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: checkToken(store),
      path: '/profile/:id',
      name: 'profilePage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ProfilePage/reducer'),
          System.import('containers/ProfilePage/sagas'),
          System.import('containers/ProfilePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('profilePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/signup',
      name: 'signupPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SignupPage/reducer'),
          System.import('containers/SignupPage/sagas'),
          System.import('containers/SignupPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signupPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: checkToken(store),
      path: '/chat/:id',
      name: 'chatPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ChatPage/reducer'),
          System.import('containers/ChatPage/sagas'),
          System.import('containers/ChatPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('chatPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/verify',
      name: 'verifyPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/VerifyPage/reducer'),
          System.import('containers/VerifyPage/sagas'),
          System.import('containers/VerifyPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('verifyPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      onEnter: checkToken(store),
      path: '/profile',
      name: 'userProfile',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/UserProfile/reducer'),
          System.import('containers/UserProfile/sagas'),
          System.import('containers/UserProfile'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('userProfile', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
