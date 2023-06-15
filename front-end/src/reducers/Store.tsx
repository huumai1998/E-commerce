import React from "react"
import { Cart, CartItem, ShippingAddress } from "../types/cart"
import { UserInfo } from "../types/userInfor"

type AppState = {
    mode: string
    cart: Cart

    userInfo?: UserInfo
  }

  

  const initialState: AppState = {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : null,

    mode: localStorage.getItem('mode')
      ? localStorage.getItem('mode')!
      : window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',

      cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems')!)
          : [],
        shippingAddress: localStorage.getItem('shippingAddress')
          ? JSON.parse(localStorage.getItem('shippingAddress')!)
          : { location: {} },
        paymentMethod: localStorage.getItem('paymentMethod')
          ? localStorage.getItem('paymentMethod')!
          : 'PayPal',
        itemsPrice: 0,
        shippingPrice: 0,
        taxPrice: 0,
        totalPrice: 0,
      },
      
   }
  type Action = 
            | { type: 'SWITCH_MODE' }
            | { type: 'CART_ADD_ITEM'; payload: CartItem }
            | { type: 'CART_REMOVE_ITEM'; payload: CartItem }
            | { type: 'USER_SIGNIN'; payload: UserInfo }
            | { type: 'USER_SIGNOUT' }
            | { type: 'SAVE_SHIPPING_ADDRESS'; payload: ShippingAddress }


  function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
      case 'SWITCH_MODE':
        return { ...state, mode: state.mode === 'dark' ? 'light' : 'dark' }
      
    case 'CART_ADD_ITEM':
      // eslint-disable-next-line no-case-declarations
      const newItem = action.payload
      // eslint-disable-next-line no-case-declarations
      const existItem = state.cart.cartItems.find(
        (item: CartItem) => item._id === newItem._id
      )
      // eslint-disable-next-line no-case-declarations
      const cartItems = existItem
        ? state.cart.cartItems.map((item: CartItem) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem]

      localStorage.setItem('cartItems', JSON.stringify(cartItems))

      return { ...state, cart: { ...state.cart, cartItems } }


      case 'CART_REMOVE_ITEM': {
        const cartItems = state.cart.cartItems.filter(
          (item: CartItem) => item._id !== action.payload._id
        )
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        return { ...state, cart: { ...state.cart, cartItems } }
      }

      case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload }
      
      case 'USER_SIGNOUT':
        return {
          mode:
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'light',
          cart: {
            cartItems: [],
            paymentMethod: 'PayPal',
            shippingAddress: {
              fullName: '',
              address: '',
              postalCode: '',
              city: '',
              country: '',
            },
            itemsPrice: 0,
            shippingPrice: 0,
            taxPrice: 0,
            totalPrice: 0,
          },
        }

        case 'SAVE_SHIPPING_ADDRESS':
          return {
            ...state,
            cart: {
              ...state.cart,
              shippingAddress: action.payload,
            },
          }
      default:
        return state
    }
  }

  const defaultDispatch: React.Dispatch<Action> = () => initialState

  const Store = React.createContext({
    state: initialState,
    dispatch: defaultDispatch,
  })
  function Provider(props: React.PropsWithChildren<object>) {
    const [state, dispatch] = React.useReducer<React.Reducer<AppState, Action>>(
      reducer,
      initialState
    )
    return <Store.Provider value={{ state, dispatch }} {...props} />
  }

  export { Store, Provider }