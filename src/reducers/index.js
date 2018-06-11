import { combineReducers } from 'redux';
import myPets from './myPets';
import newPet from './newPet';
import passwordRecovery from './passwordRecovery';
import product from './product';
import shop from './shop';
import shoppingCart from './shoppingCart';
import signIn from './signIn';
import signUp from './signUp';
import user from './user';

export default combineReducers({
  myPets,
  newPet,
  passwordRecovery,
  product,
  shop,
  shoppingCart,
  signIn,
  signUp,
  user,
});
