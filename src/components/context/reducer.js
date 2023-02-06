export const actionType = {
  SET_USER: "SET_USER",
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_CARTITEMS: "SET_CARTITEMS",
  SET_PEDIDO: "SET_PEDIDO",
  SET_EDIT_SHOW: "SET_EDIT_SHOW",
  SET_USERS: "SET_USERS",
  SET_SELECTED_DETAIL: "SET_SELECTED_DETAIL",
  SET_HEADER_SHOW: "SET_HEADER_SHOW",
  SET_DETALLE_SHOW: "SET_DETALLE_SHOW",
  SET_EDITAR: "SET_EDITAR",
  SET_USERLOGGED: 'SET_USERLOGGED',
  SET_DONDE_ESTOY: 'SET_DONDE_ESTOY',
  SET_CATEGORY: 'SET_CATEGORY',
  SET_ORDERS: 'SET_ORDERS',
  SET_FAVORITE: 'SET_FAVORITE',
  SET_LOGIN_SHOW: 'SET_LOGIN_SHOW'
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case actionType.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };

    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    case actionType.SET_PEDIDO:
      return {
        ...state,
        pedido: action.pedido,
      };
    case actionType.SET_EDIT_SHOW:
      return {
        ...state,
        editShow: action.editShow,
      };
    case actionType.SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case actionType.SET_SELECTED_DETAIL:
      return {
        ...state,
        selecteddetail: action.selecteddetail,
      };
    case actionType.SET_HEADER_SHOW:
      return {
        ...state,
        headerShow: action.headerShow,
      };
    case actionType.SET_DETALLE_SHOW:
      return {
        ...state,
        detalleShow: action.detalleShow,
      };
    case actionType.SET_EDITAR:
      return {
        ...state,
        editar: action.editar,
      };
    case actionType.SET_USERLOGGED:
      return {
        ...state,
        userLogged: action.userLogged,
      };
    case actionType.SET_DONDE_ESTOY:
      return {
        ...state,
        dondeestoy: action.dondeestoy,
      };
    case actionType.SET_CATEGORY:
      return {
        ...state,
        categoryselect: action.categoryselect,
      };
    case actionType.SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    case actionType.SET_FAVORITE:
      return {
        ...state,
       favorite: action.favorite,
      };
    case actionType.SET_LOGIN_SHOW:
      return {
        ...state,
       loginShow: action.loginShow,
      };

    default:
      return state;
  }
};

export default reducer;
