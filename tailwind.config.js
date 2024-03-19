/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                "2xs": ["10px", "13.64px"],
            },
            spacing: {
                12.5: "3.125rem",
                20.5: "5.125rem",
                22: "5.5rem",
                30: "7.5rem",
                30.5: "7.625rem",
                82: "20.5rem",
                125: "31.25rem",
            },
        },
        colors: {
            white: "#FFFFFF",
            "cool-gray": "#111827",
            neutral: {
                10: "#FFFFFF",
                20: "#F5F5F5",
                30: "#EDEDED",
                40: "#E0E0E0",
                50: "#C2C2C2",
                60: "#9E9E9E",
                70: "#757575",
                80: "#616161",
                90: "#404040",
                100: "#0A0A0A",
            },
            mono: {
                main: "#FAFAFA",
                outline: "#D4D4D4",
            },
            primary: {
                main: "#002F34",
            },
            secondary: {
                main: "#D0EFEF",
            },
            tertiary: {
                main: "#FFF4EA"
            },
            success: {
                main: "#3C9F3E",
            },
            error: {
                main: "#ED4330",
            },
            danger: {
                main: "#ED8B30",
                surface: "#FBE8D6",
                border: "#F9D8BA",
                hover: "#C57428",
                pressed: "#764518",
            },
            transparent: "#FFFFFF00",
        },
        boxShadow: {
            motion: "0px 1px 2px 0px rgba(0, 0, 0, 0.12)",
            focus: "0px 0px 8px 0px rgba(0, 0, 0, 0.1)",
            spatial: "inset 1px 2px 2px 0px rgba(0, 0, 0, 0.04)",
            bar: "0px 2px 8px 0px rgba(0, 0, 0, 0.05)",
            dragItem: "0px 2px 6px 4px rgba(0, 0, 0, 0.08)",
        },
        fontWeight: {
            light: "300",
            regular: "400",
            semibold: "600",
            bold: "700",
            extrabold: "800",
        },
    },
};
