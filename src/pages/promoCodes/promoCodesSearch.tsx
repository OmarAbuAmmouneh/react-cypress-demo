import React from "react";
// import {StyledSearchBox} from "components/shared/SearchBox/styles";
// import {searchIcon, StyledSearchBoxHeader, StyledSearchText} from "components/views/Customers/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import ButtonComponent from "@/components/button";
import TextInput from "@/components/textinput";
import {
  StyledSearchBoxHeader,
  StyledSearchText,
  searchIcon,
  StyledSearchBox,
} from "@/pages/promoCodes/style";

interface IProps {
  formState: any;
  handleChange: (value: string, key: string) => void;
  handleClear: () => void;
}

const PromoCodesSearch = ({ formState, handleClear, handleChange }: IProps) => {
  return (
    <StyledSearchBox>
      <StyledSearchBoxHeader container item justifyContent={"space-between"}>
        <StyledSearchBoxHeader item>
          <StyledSearchText>{"search"}</StyledSearchText>
          <SearchIcon style={searchIcon} fontSize={"large"} />
        </StyledSearchBoxHeader>
        {/* <Grid item style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <RiFileExcel2Fill onClick={downloadExcelFile} style={excelIcon} size={30}/>
                </Grid> */}
      </StyledSearchBoxHeader>
      <Grid container item justifyContent={"flex-start"}>
        <Grid item md={3} style={{ margin: "1rem" }}>
          <TextInput
            value={formState.fullNameEn}
            onChange={handleChange}
            label={"searchText"}
            name={"searchText"}
          />
        </Grid>
      </Grid>
      <Grid container item justifyContent={"flex-end"}>
        <ButtonComponent type="primary" title={"clear"} onClick={handleClear} />
      </Grid>
    </StyledSearchBox>
  );
};

export default PromoCodesSearch;
