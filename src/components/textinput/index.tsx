import {Box, FormControl, InputAdornment, TextField, Typography,} from "@mui/material";
import {theme} from "@/theme";

export interface BaseInputProps{
    value:any
    onChange: (value:never, event: InputEvent) => any
    label?: any
    name?: string
    error?: string
}


interface TextInputProps extends BaseInputProps {
    value: string | number | null | undefined
    onChange: (value: string, name?: any) => void
    focused?: boolean
    placeholder?: string
    isDisabled?: boolean
    required?: boolean
    isShrink?: boolean
    className?: string
    icon?: JSX.Element
    capitalizeFirstLetter?: boolean
    customStyle?: React.CSSProperties
    multiline?: boolean
    password?: boolean
    styledError?: boolean
    type?: 'text' | 'number' | 'date' | 'password'
}

const TextInput = (props: TextInputProps) => {
    const {
        value,
        onChange,
        label,
        name,
        styledError,
        error,
        placeholder,
        isDisabled = false,
        required,
        isShrink = false,
        className,
        icon,
        capitalizeFirstLetter = false,
        multiline,
        password,
        type
    } = props;
    let change = true
    const handleChange = (val: string, name: string | undefined) => {

        onChange(val, name)


    };
    return (
        <FormControl

            className={className}
            sx={{width: "100%"}}
            variant="outlined">
            {label && (
                <Typography
                    sx={{
                        fontSize: "0.724rem",
                        fontWeight: "600",
                        color: theme.palette.secondary.grayScale900,
                        mb: "0.25rem",
                    }}>
                    {label &&
                        `${label.charAt(0).toUpperCase() + label.slice(1)}${
                            required ? "*" : ""
                        }`}
                </Typography>
            )}
            <Box>
                <TextField
                    disabled={isDisabled}
                    error={Boolean(error) || styledError}
                    type={type ?? 'text'}
                    multiline={multiline}
                    sx={{width: '100%'}}

                    {...(icon
                        ? {
                            InputProps: {
                                startAdornment: (
                                    <InputAdornment position="start">{icon}</InputAdornment>
                                )
                            },
                        }
                        : {
                            InputProps: {
                                sx: {height: "40px"}
                            },
                        })}
                    {...(
                        isDisabled && {
                            InputProps: {
                                sx: {bgcolor: '#cccccc', height: "40px"}
                            }
                        }
                    )}
                    {...(
                        multiline && {
                            InputProps: {
                                sx: { height: "80px",padding:'5px',display:'flex',alignItems:'flex-start'}
                            }
                        }
                    )}
                    name={name}
                    value={value}
                    onChange={(e) => {
                        handleChange(e.target.value, name)
                    }}
                    placeholder={
                        placeholder &&
                        `${
                            placeholder?.charAt(0).toUpperCase() +
                            placeholder?.slice(1).toLowerCase()
                        }`
                    }

                    {...(isShrink
                        ? {
                            notched: true,
                        }
                        :
                        {})}
                />
                <Typography sx={{color: 'red', fontSize: '100%'}}
                            visibility={error ? "visible" : "hidden"}>{error}*</Typography>
            </Box>
        </FormControl>
    );
};

export default TextInput;