import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'
import Loading from '../components/Loading'


export const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    authenticatingSelector: state => state.user.isLoading,
    LoadingComponent: Loading,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated',
    predicate: user => user.data !== null && user.isLoading === false,


})
export const UserIsAdmin = UserAuthWrapper({
    authSelector: state => state.user.data,
    redirectAction: routerActions.replace,
    failureRedirectPath: '/',
    wrapperDisplayName: 'UserIsAdmin',
    predicate: user => user.isAdmin,
    allowRedirectBack: false
})

export const UserIsNotAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    // Want to redirect the user when they are done loading and authenticated
    predicate: user => user.data === null && user.isLoading === false,
    failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/',
    allowRedirectBack: false
})


export const VisibleOnlyLoggedIn2 = UserAuthWrapper({
    authSelector: state => state,
    wrapperDisplayName: 'VisibleOnlyLoggedIn',
    predicate: (user) => {console.log("test"+ user)},
    FailureComponent: null

})
export const VisibleOnlyLoggedIn = UserAuthWrapper({
    authSelector: function(state) { console.log('is this running?', state, state.get('app').toJS()); return state.get('app'); },
    wrapperDisplayName: 'VisibleOnlyIfOrgAdminOrManager',
    predicate: function(auth) { console.log('is this running as well?', auth, auth.get('currentUser').toJS()); return true; },
    FailureComponent: null,
});
