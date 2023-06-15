import { useMutation } from "@tanstack/react-query"
import apiClient from "../../apiClient"
import { UserInfo } from "../../types/userInfor"

export const useSigninMutation = () =>
useMutation({
  mutationFn: async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) =>
    (
      await apiClient.post<UserInfo>(`api/users/signin`, {
        email,
        password,
      })
    ).data,
})


export const useSignupMutation = () =>
  useMutation({
    mutationFn: async ({
      name,
      email,
      password,
      }: {
          name: string
          email: string
          password: string
      }) =>
      (
        await apiClient.post<UserInfo>(`api/users/register`, {
          name,
          email,
          password,
        })
      ).data,
})