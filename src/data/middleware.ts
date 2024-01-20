import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError,} from '@reduxjs/toolkit/query';
import {RootState} from '../state/store';
import {Mutex} from 'async-mutex';
import {logout, setTokens} from '../state/user'
import Cookies from 'js-cookie';
import ENV from "@/env";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl: ENV.API_BASE_URL,
    prepareHeaders: async (headers) => {
        const token = await Cookies.get('token');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
            return headers;
        } else {
            headers.set('authorization', `Basic bW9iaWxlX2FwcDoxNdM0NTY=`);

        }
        return headers;
    },
});


const customFetchBase: BaseQueryFn<
    string | FetchArgs,
    any,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {


    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions) as any
    if (result.meta.request.method === 'POST' && result.meta.response.status === 200)
        // toast.success('Action successful')
    if (result.meta.response.status === 500)
        // toast.error('Something went wrong')
    if (result.meta.response.status >= 400 && result.meta.response.status < 500) {
        const error = Object.values(result.error?.data)
        // toast.error(JSON.stringify(error))
    }

    if (result?.error?.data?.status === 401) {


        if (mutex.isLocked()) {
            await mutex.waitForUnlock();
            return baseQuery(args, api, extraOptions);
        }
        const release = await mutex.acquire();
        try {
            const refreshToken: any = (api.getState() as RootState)?.user
                ?.refreshToken;
            if (!refreshToken) {
                api.dispatch(logout());
                return;
            }
            const refreshResult = await refresh(refreshToken, api, extraOptions)
            //@ts-ignore
            const data = refreshResult?.data as any;
            if (data?.accessToken) {
                Cookies.set('token', data.accessToken)
                Cookies.set('refreshToken', data.refreshToken)
                api.dispatch(setTokens({
                    refreshToken: data.refreshToken,
                    accessToken: data.accessToken,
                }))
            }

            if (data)
                return await baseQuery(args, api, extraOptions);

            api.dispatch(logout());
        } finally {
            release();
        }
    }
    return result;
};
const refresh = (refreshToken: string, api: any, extraOptions: any) => {
    return baseQuery(
        {
            url: 'Staff/Refresh',
            method: 'POST',
            body: {
                token: refreshToken,
            },
        },
        api,
        extraOptions,
    );

}
export default customFetchBase;
