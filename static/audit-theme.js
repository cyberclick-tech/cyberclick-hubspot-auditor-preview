window.tailwind = window.tailwind || {};
window.tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#b51732",
                "on-primary": "#ffffff",
                "primary-container": "#d83548",
                "on-primary-container": "#fffbff",
                "primary-fixed": "#ffdad9",
                "primary-fixed-dim": "#ffb3b3",
                "on-primary-fixed": "#40000a",
                "on-primary-fixed-variant": "#920022",
                "inverse-primary": "#ffb3b3",
                "secondary": "#9f4035",
                "on-secondary": "#ffffff",
                "secondary-container": "#ff8a7a",
                "on-secondary-container": "#752219",
                "secondary-fixed": "#ffdad5",
                "secondary-fixed-dim": "#ffb4a9",
                "on-secondary-fixed": "#410000",
                "on-secondary-fixed-variant": "#7f2920",
                "tertiary": "#555c67",
                "on-tertiary": "#ffffff",
                "tertiary-container": "#6e7580",
                "on-tertiary-container": "#fdfcff",
                "tertiary-fixed": "#dce3f0",
                "tertiary-fixed-dim": "#c0c7d4",
                "on-tertiary-fixed": "#151c25",
                "on-tertiary-fixed-variant": "#404752",
                "error": "#ba1a1a",
                "on-error": "#ffffff",
                "error-container": "#ffdad6",
                "on-error-container": "#93000a",
                "background": "#f7fafc",
                "on-background": "#181c1e",
                "surface": "#f7fafc",
                "on-surface": "#181c1e",
                "surface-variant": "#e0e3e5",
                "on-surface-variant": "#5a4040",
                "surface-dim": "#d7dadc",
                "surface-bright": "#f7fafc",
                "surface-container-lowest": "#ffffff",
                "surface-container-low": "#f1f4f6",
                "surface-container": "#ebeef0",
                "surface-container-high": "#e5e9eb",
                "surface-container-highest": "#e0e3e5",
                "inverse-surface": "#2d3133",
                "inverse-on-surface": "#eef1f3",
                "outline": "#8e706f",
                "outline-variant": "#e3bebd",
                "surface-tint": "#b81b34"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            spacing: {
                "unit": "8px",
                "gutter": "24px",
                "stack-sm": "12px",
                "stack-md": "24px",
                "stack-lg": "48px",
                "margin-mobile": "20px",
                "margin-desktop": "64px",
                "container-max": "1280px"
            },
            fontFamily: {
                "display-xl": ["Montserrat", "sans-serif"],
                "headline-lg": ["Montserrat", "sans-serif"],
                "headline-lg-mobile": ["Montserrat", "sans-serif"],
                "headline-md": ["Montserrat", "sans-serif"],
                "body-lg": ["Rubik", "sans-serif"],
                "body-md": ["Rubik", "sans-serif"],
                "label-sm": ["Rubik", "sans-serif"]
            },
            fontSize: {
                "display-xl": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                "headline-lg-mobile": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
                "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500" }]
            }
        }
    }
};
