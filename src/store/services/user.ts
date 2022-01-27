import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../types/user";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => `users`,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
