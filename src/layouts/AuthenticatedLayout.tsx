import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { theme } from '@/theme';

interface IProps {
	children?: React.ReactNode;
	pathname: string;
}

const AuthenticationLayout = ({ pathname }: IProps) => {

	return (
		<Grid
			container
			item
            height='100vh'
			width={'100vw'}
			xs={12}>
			<Outlet />
		</Grid>
	);
};

export default AuthenticationLayout;