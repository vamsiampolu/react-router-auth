The auth module:

login checks if the user is already logged in by looking for a jwt or a bearer token, in that case pass true to the callback. We could have dispatched a `LOGIN_SUCCESS` action either directly here.
if not, make a request to the server to authenticate the user with the provided username and password. When it succeeds dispatch a LOGIN_SUCCESS action. If it fails, dispatch LOGIN_FAILED action.

You could wrap this in a saga in response to a `LOGIN` action.

If the user decides to logout, we just remove the token and dispatch the `LOGOUT` action.

Here the component App should recieve information about whether the user is logged in, you should recieve that from the `redux store` using a selector.
This renders the login or other components based on this state.

The most important thing is `onEnter` and `requireAuth` on Dashboard route which will only be rendered if the user is logged in.
