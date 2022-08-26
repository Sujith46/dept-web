import { IS_MENU_OPEN } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case IS_MENU_OPEN:
      return {
        ...state,
        isMenuOpen: action.data,
      };
  }
};

export default reducer;
