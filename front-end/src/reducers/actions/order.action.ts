import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { CartItem, ShippingAddress } from '../../types/cart'
import apiClient from '../../apiClient'

export const useCreateOrderMutation = () =>
useMutation({
  mutationFn: async (order: {
    orderItems: CartItem[]
    shippingAddress: ShippingAddress
    paymentMethod: string
    itemsPrice: number
    shippingPrice: number
    taxPrice: number
    totalPrice: number
  }) =>
    (
      await apiClient.post<{ message: string; order: Order }>(
        `api/orders`,
        order
      )
    ).data,
})
