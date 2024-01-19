import {Button, CircularProgress, useMediaQuery} from "@mui/material";
import {theme} from "@/theme";


interface ButtonProps {
    title?: string
    icon?: React.ReactNode
    onClick: () => any
    type: 'primary' | 'secondary' | 'text' | 'danger'
    disabled?: boolean
    size?: 'small' | 'regular'
    isLoading?: boolean
    customStyle?:React.CSSProperties
    className?:string
    fontSize?: string | number;
    circularProgressSize?: number
  }
  
const ButtonComponent = (props: ButtonProps) => {
    const {
        title,
        onClick,
        type,
        disabled = false,
        icon,
        size = 'regular',
        isLoading = false,
        customStyle,
        className,
        fontSize,
        circularProgressSize = 30
    } = props;
    const textSize = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Button
            className={className}
            style={customStyle}
            variant={type}
            onClick={() => onClick()}
            disabled={disabled || isLoading}
            {...(icon ? {
                startIcon: icon
            } : {})}
            sx={{height: (size == 'small') ? '36px' : '100%', width: '100%'}}
        >
            <>
                {isLoading && <CircularProgress size={circularProgressSize} color={type === 'primary' ? 'secondary' : 'primary'}/>}
                {!isLoading && <span style={{fontSize: fontSize}}>{title}</span>}
            </>
        </Button>
    )
}

export default ButtonComponent;
