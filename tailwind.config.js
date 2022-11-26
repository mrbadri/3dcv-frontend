module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                Kdam: ["Kdam", "sans-serif"]
            },
            spacing: {
                sm: "8px",
                md: "12px",
                lg: "16px",
                xl: "24px"
            },
            colors: {
                primary: {
                    100: "#E5E2FC",
                    200: "#CCC6F9",
                    300: "#ADA5EF",
                    400: "#9289DF",
                    500: "#6C62CA",
                    600: "#5047AD",
                    700: "#383191",
                    800: "#241F75",
                    900: "#171260"
                },
                success: {
                    100: "#F4FCD0",
                    200: "#E6FAA2",
                    300: "#D0F072",
                    400: "#B7E14D",
                    500: "#95CE1A",
                    600: "#79B113",
                    700: "#60940D",
                    800: "#497708",
                    900: "#386204"
                },
                info: {
                    100: "#D8E7FE",
                    200: "#B3CDFE",
                    300: "#8CB0FC",
                    400: "#7098FA",
                    500: "#4171F7",
                    600: "#2F55D3",
                    700: "#2040B1",
                    800: "#142C90",
                    900: "#0C1B76"
                },
                warning: {
                    100: "#FFF6CF",
                    200: "#FFE79F",
                    300: "#FFD670",
                    400: "#FFC64B",
                    500: "#FFAA0F",
                    600: "#DC8A0A",
                    700: "#B66D07",
                    800: "#945204",
                    900: "#7A3F03"
                },
                danger: {
                    100: "#FEE5D8",
                    200: "#FEC5B1",
                    300: "#FD9E8B",
                    400: "#FB7A6D",
                    500: "#F93E3E",
                    600: "#D62D3B",
                    700: "#B31F38",
                    800: "#901334",
                    900: "#770B31"
                },
                grey: {
                    100: "",
                    200: "",
                    300: "",
                    400: "",
                    500: "",
                    600: "",
                    700: "",
                    800: "",
                    900: ""
                }
            }
        }
    },
    plugins: [require("tailwindcss-dir")()]
};
