/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                large: 'repeat(25, minmax(0, 1fr))',
                xlarge: 'repeat(40, minmax(0, 1fr))',
            },
        },
    },
    plugins: [],
};
