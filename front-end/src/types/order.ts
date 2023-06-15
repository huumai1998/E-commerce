import { Cart, CartItem, ShippingAddress } from "./cart";
import { User } from './user'

export type Order = {
    _id: string
    orderItems: CartItem[]
    shippingAddress: ShippingAddress
    paymentMethod: string
    user: User
    createdAt: string
    isPaid: boolean
    paidAt: string
    isDelivered: boolean
    deliveredAt: string
    itemsPrice: number
    shippingPrice: number
    taxPrice: number
    totalPrice: number
}