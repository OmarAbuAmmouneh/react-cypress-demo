import { useSearchPromoCodesQuery } from "@/data/RequestsApi";
import React, {useDeferredValue, useState} from "react";
import PromoCodesTable from "./promoCodesTable";

const initialValue = {
    limit: 25,
    offset: 0,
    searchText: '',
}
const PromoCodes = () => {
    const [formState, setFormState] = useState(initialValue);
    const defferedSearchText = useDeferredValue(formState.searchText)

    const handleChange = (value: string, key: string) => {
        return setFormState((prev) => ({...prev, [key]: value}));
    };
    const {data, isFetching} = useSearchPromoCodesQuery({
        searchText: defferedSearchText.replace(/ /g, ""),
        limit: formState.limit,
        offset: formState.offset
    })
    const handleClear = () => {
        setFormState(initialValue)
    }
    console.log(data, 'data')
    return (
        <>
            {/* <CustomersSearch
                formState={formState}
                handleChange={handleChange}
                handleClear={handleClear}
            /> */}
            <PromoCodesTable data={data} isFetching={isFetching} />
        </>
    );
}

export default PromoCodes;
