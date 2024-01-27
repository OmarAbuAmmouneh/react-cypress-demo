export interface PromoCodesSearchModel {
    limit: number;
    offset: number;
    searchText?: string;
}

export interface PromoCodesSearchResponseModel {
    matches: Array<any>;
    total: number;
}