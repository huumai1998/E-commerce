import { ApiError } from "./types/apiError"

export const getError = (error: ApiError) => {
    return error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  }