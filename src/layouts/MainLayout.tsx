import {useMemo, useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {CssBaseline, Grid } from "@mui/material";
import {
    Container,
    DrawerContainer,
    NormalDevicesStyledDrawer,
    StyledDrawer,
} from "./styles";
import {wholeContent} from "@/layouts/Components/sideMenuData";
// import {useAppDispatch} from "src/state/store";
// import {getAlert} from 'src/state';
import {Drawer} from '@/layouts/Components/Drawer'

interface IProps {
    children?: any;
}

const MainLayout = (props: IProps) => {
    // const alert = useTypedSelector(getAlert);
    const [mobileOpen, setMobileOpen] = useState(false);
    // const dispatch = useAppDispatch();
    let navigate = useNavigate();
    let location = useLocation();
    let selectedItem = useMemo(() => `/${location?.pathname.split('/')[1]}`, [location?.pathname]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleListItemClick = (event: any, index: number) => {
        const selectedFromSideBar = wholeContent.main.find(
            (content) => content.id == index
        );
        navigate(selectedFromSideBar?.link ?? "");
        setMobileOpen(false)
    };

    return (
        <Grid container item xs={12} height='100vh' overflow='hidden'>
            <CssBaseline/>
            <DrawerContainer
                item
                xs={4}
                lg={2}
                md={3}>
                <StyledDrawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    mobileflag={+mobileOpen}>
                   <Drawer
                    handleListItemClick={handleListItemClick}
                    selectedItem={selectedItem}/>
                </StyledDrawer>

                <NormalDevicesStyledDrawer
                    variant="permanent"
                    open>
                    <Drawer
                        handleListItemClick={handleListItemClick}
                        selectedItem={selectedItem}/>
                </NormalDevicesStyledDrawer>
            </DrawerContainer>
            <Container item xs={12} md={9} lg={10}>
                {/* <PanelHeader
                    handleDrawerToggle={handleDrawerToggle}/> */}
                            {/* {alert?.isOpen && <Alert severity={alert.severity}>{alert?.content}</Alert>} */}
                <Grid xs={12} overflow='scroll' height={'100vh'} padding={'2rem'}>
                    <Outlet />
                </Grid>
            </Container>
        </Grid>
    );
};

export default MainLayout;
