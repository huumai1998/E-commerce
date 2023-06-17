import { useMutation, useQuery } from '@tanstack/react-query'
import { CartItem, ShippingAddress } from '../../types/cart'
import apiClient from '../../apiClient'
import { Order } from '../../types/order'

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


export const useGetPaypalClientIdQuery = () =>
  useQuery({
    queryKey: ['paypal-clientId'],
    queryFn: async () =>
      (await apiClient.get<{ clientId: string }>(`/api/keys/paypal`)).data,
  })

export const usePayOrderMutation = () =>
   useMutation({
     mutationFn: async (details: { orderId: string }) =>
       (
         await apiClient.put<{ message: string; order: Order }>(
           `api/orders/${details.orderId}/pay`,
           details
         )
       ).data,
   })
