module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        spacing: {
            '0': '0px',
            '1': '5px',
            '2': '10px',
            '3': '20px',
            '4': '40px',
            '5': '80px',
            '6': '160px',
            '7': '320px',
        },
        screens: {
            'md': {'min': '720px'},
            'lg': {'min': '1280px'},
        },
        container: {
            center: true,
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
