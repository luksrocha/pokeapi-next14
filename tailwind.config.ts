const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        "bg-gray-400",
        "bg-red-500",
        "bg-blue-400",
        "bg-purple-600",
        "bg-yellow-700",
        "bg-yellow-600",
        "bg-green-500",
        "bg-indigo-600",
        "bg-gray-300",
        "bg-red-400",
        "bg-blue-500",
        "bg-green-300",
        "bg-yellow-400",
        "bg-pink-500",
        "bg-blue-200",
        "bg-indigo-800",
        "bg-gray-800",
        "bg-pink-300",
        "bg-teal-500",
        "bg-gray-800",
        "bg-pink-200",
        "bg-yellow-200",
        "bg-green-200",
        "bg-purple-200",
        "bg-orange-200",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
export default config;
