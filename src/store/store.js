// imports here...

// define the store's initial state
let initialState = { user: { token: "" }, messages: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";



// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    // case GET_MESSAGES:
    //   return { ...state, messages: action.payload };
    default:
      return state;
  }
};
    

// create useStore hook

export const useStore = create(devtools(redux(reducer, initialState)), { name: "storage" });
