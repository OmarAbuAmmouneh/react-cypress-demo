import {
    StyledListButton,
    StyledListIcon,
    StyledListItem,
    StyledListText,
} from "../styles";
import {Box, Grid, List, Toolbar, Typography} from "@mui/material";
import {theme} from '../../theme'
import { wholeContent } from "./sideMenuData";

interface IProps {
    children?: any;
    handleListItemClick: (event: any, id: number) => void;
    selectedItem: string;
}

export const Drawer = ({handleListItemClick, selectedItem}: IProps) => {
    return (
        <Grid height={'100%'}>
            <Box>
                <Toolbar>
                    <Box
                        component="img"
                        sx={{
                            padding: "10px",
                            objectFit: "contain",
                            width: "100%",
                            height: "100px",
                            [theme.breakpoints.down("md")]: {
                                height: '100px',
                            }
                        }}
                        alt="salesfinee"
                        src={"/logo.svg"}
                    />
                </Toolbar>
                <Typography padding={'10px 25px 10px 25px'} fontWeight={'bold'}>{'Main'}</Typography>
                <List>
                    {wholeContent?.main.map((content) => (
                        <StyledListItem
                            key={content.id}
                            disablePadding
                        >
                            <StyledListButton
                                selected={content?.link === selectedItem}
                                onClick={(event) => handleListItemClick(event, content?.id)}>
                                <StyledListIcon>{content.icon}</StyledListIcon>
                                <StyledListText primary={content.label}/>
                            </StyledListButton>
                        </StyledListItem>
                    ))}
                </List>
            </Box>
        </Grid>
    );
};
