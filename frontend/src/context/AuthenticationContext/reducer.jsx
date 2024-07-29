import { LOGIN_SUCCESS, LOGOUT } from './action';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
     
      const { firstname, lastname, userRole, userId, token, refreshToken } = action.payload;

      localStorage.setItem('user', JSON.stringify({ firstname, lastname, userRole, userId }));
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);

      return {
        ...state,
        user: { firstname, lastname, userRole, userId },
        token,
        refreshToken,
        isAuthenticated: true, 
      };

    case LOGOUT:

      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');

      return {
        ...state,
        user: null,
        token: null,
        refreshToken: null,
        isAuthenticated: false, 
      };

    default:
      return state; 
  }
};

export default reducer;
