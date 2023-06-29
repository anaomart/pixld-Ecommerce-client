/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                hero: `url(./src/assets/Hero.png)`,
                NewArrivals: "url(./src/assets/newArrivles.jpg)",
                discount: "url(./src/assets/discounts.jpeg)",
            },
            colors: {
                dark: {
                    100: "#1E293B",
                },
                secondary: "#64748B",
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
};