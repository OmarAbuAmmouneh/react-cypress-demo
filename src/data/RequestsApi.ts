import {createApi} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./middleware";
import { LoginRequest, SignInResponse } from "@/types/account";
import { PromoCodesSearchModel, PromoCodesSearchResponseModel } from "@/types/promoCodes";

export const RequestsApi = createApi({
    baseQuery: customFetchBase,
    reducerPath: "requests",
    endpoints: (builder) => ({
        login: builder.mutation<SignInResponse, LoginRequest>({
            query: (body) => ({
                url: `staff/signin`,
                method: 'POST',
                body: body
            })
        }),
        searchPromoCodes: builder.query<PromoCodesSearchResponseModel, PromoCodesSearchModel>({
            query: (params) => ({
                url: `promoCodes`,
                method: 'GET',
                params: params
            })
        }),
    })
});

export const
    {
        useSearchPromoCodesQuery,
        useLoginMutation,
    } = RequestsApi;
