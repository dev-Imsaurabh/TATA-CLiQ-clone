import {
  legacy_createStore,
  combineReducers,
  // compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import adminAuthReducer from "./adminauth/adminauth.reducer";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";

import productReducer from "./products/product.reducer";

//@TODO combine all reducer functions here
const rootReducer = combineReducers({
  //pass all the reducer as key and child
  productsManager: productReducer,
  authManager: authReducer,
  cartManager:cartReducer,
  adminauthManager:adminAuthReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

