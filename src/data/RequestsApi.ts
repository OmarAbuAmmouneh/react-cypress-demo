import {createApi} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./middleware";
import { LoginRequest, Tokens } from "@/types/account";

export const RequestsApi = createApi({
    baseQuery: customFetchBase,
    reducerPath: "requests",
    endpoints: (builder) => ({
        login: builder.mutation<LoginRequest, Tokens>({
            query: (body) => ({
                url: `staff/signin`,
                method: 'POST',
                body: body
            })
        }),
    })
});

export const
    {
        useLoginMutation,
    } = RequestsApi;
