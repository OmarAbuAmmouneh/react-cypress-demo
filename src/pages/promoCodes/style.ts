import {styled, Grid, Typography} from '@mui/material';

export const StyledSearchBoxHeader = styled(Grid)(() => ({
    display: 'flex', flexDirection: 'row'
}));

export const StyledSearchText = styled(Typography)(() => ({
    fontWeight: 'bold',
    fontSize: '2rem',
    color: 'rgba(29, 33, 70, 0.75)'
}));

export const StyledTableHeader = styled(Typography)(() => ({
    fontWeight: 'bold', fontSize: '16px', color: '#C98B5A', lineHeight: '18.75px'
}));

export const StyledTableCell = styled(Typography)(() => ({
    fontWeight: '400px', fontSize: '14px', color: '#1D2146', lineHeight: '18.75px'
}));



export const searchIcon = {marginTop: '0.5rem', color: 'rgba(29, 33, 70, 0.75)', marginLeft: '0.5rem'}
export const excelIcon = {color: '#C38A5F', marginTop: 5, cursor: 'pointer'}

export const viewButton = {
    borderRadius: '1rem',
    backgroundColor: '#C98B5A',
    width: '0.6rem',
    height: '2.5rem'
}