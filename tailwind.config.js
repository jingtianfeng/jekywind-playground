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
        fontFamily: {
            'sans': ['Inter', 'Helvetica', 'sans-serif'],
        },
        fontSize: {
            'sm': ['0.75rem', {
                letterSpacing: '0.05em',
                lineHeight: '1rem',
            }],
            'base': ['1rem', {
                letterSpacing: '0.025em',
                lineHeight: '1.625rem',
            }],
            'lg': ['1.625rem', {
                letterSpacing: '0em',
                lineHeight: '2rem',
            }],
            'xl': ['2.625rem', {
                letterSpacing: '0em',
                lineHeight: '2.75rem',
            }],
            '2xl': ['4.25rem', {
                letterSpacing: '0em',
                lineHeight: '4.375rem',
            }],
            '3xl': ['6.875rem', {
                letterSpacing: '0em',
                lineHeight: '6.875rem',
            }],
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
