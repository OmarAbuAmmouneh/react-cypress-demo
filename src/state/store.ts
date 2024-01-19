import {combineReducers, configureStore} from '@reduxjs/toolkit'
import UserReducer from './user';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';


const reducers = combineReducers({
        user: UserReducer,
})
;

const Store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
        ]),
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default Store;
