
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#2C3E50", // Dark Blue
            light: "#3498DB", // Light Blue
            dark: "#1F2D3D", // Darker Blue
        },
        secondary: {
            main: "#E74C3C", // Red
            light: "#FF5733", // Light Orange
            dark: "#C0392B", // Dark Red
        },
        background: {
            default: "#000000", // Light Gray"#F5F5F5"
            paper: "#FFFFFF", // White
        },
        text: {
            primary: "#333333", // Dark Gray
            secondary: "#777777", // Light Gray
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif", // Custom font
        h1: {
            fontSize: "3rem",
            fontWeight: 600,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: 500,
            lineHeight: 1.2,
        },
        h3: {
            fontSize: "2rem",
            fontWeight: 500,
            lineHeight: 1.3,
        },
        h4: {
            fontSize: "1.8rem",
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: "1.5rem",
            fontWeight: 500,
            lineHeight: 1.5,
        },
        h6: {
            fontSize: "1.2rem",
            fontWeight: 500,
            lineHeight: 1.5,
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.6,
        },
        body1: {
            fontSize: "1.1rem",
            lineHeight: 1.5,
        },
        body2: {
            fontSize: "1rem",
            lineHeight: 1.6,
        },
        caption: {
            fontSize: "0.8rem",
            lineHeight: 1.6,
        },
    },
});
