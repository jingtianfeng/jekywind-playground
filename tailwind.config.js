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
            'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        },
        fontSize: {
            'xs': ['0.75rem', {
                letterSpacing: '0.025em',
                lineHeight: '1.25',
            }],
            'sm': ['0.875rem', {
                letterSpacing: '0.025em',
                lineHeight: '1.25',
            }],
            'base': ['1rem', {
                letterSpacing: '0.025em',
                lineHeight: '1.5',
            }],
            'lg': ['1.625rem', {
                letterSpacing: '0.025em',
                lineHeight: '1.25',
            }],
            'xl': ['2.625rem', {
                letterSpacing: '0.025em',
                lineHeight: '1',
            }],
            '2xl': ['4.25rem', {
                letterSpacing: '0.025em',
                lineHeight: '1',
            }],
            '3xl': ['7rem', {
                letterSpacing: '0.025em',
                lineHeight: '1',
            }],
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
