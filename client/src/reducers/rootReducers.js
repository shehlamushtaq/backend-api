const initialState = {
  isLogin: false,
  loggedInUser: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DO_LOGIN": {
      return {
        ...state,
        isLogin: true,
        loggedInUser: action.payload,
      };
    }

    case "DO_LOGOUT": {
      return {
        ...state,
        isLogin: false,
        loggedInUser: {},
      };
    }

    default: {
      return state;
    }
  }
};
