import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'
import Loading from '../components/Loading'


export const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    authenticatingSelector: state => state.user.isLoading,
    LoadingComponent: Loading,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated',
    predicate: user => user.token !== null && user.isLoading === false,


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
    predicate: user => user.token === null && user.isLoading === false,
    failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/',
    allowRedirectBack: false
})


//
// export const VisibleOnlyLoggedIn = UserAuthWrapper({
//     authSelector: state => state.user,
//     wrapperDisplayName: 'VisibleOnlyLoggedIn',
//     predicate: user => user.data,
//     FailureComponent: null
// });

export const VisibleOnlyLoggedIn = UserAuthWrapper({
    authSelector: state => state.user,
    wrapperDisplayName: 'VisibleOnlyAdmin',
    predicate: user => user.token,
    FailureComponent: null
})

export const VisibleNotLoggedIn = UserAuthWrapper({
    authSelector: state => state.user,
    wrapperDisplayName: 'VisibleOnlyAdmin',
    predicate: user => user.token === null && user.isLoading === false,
    FailureComponent: null
})