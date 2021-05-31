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
                letterSpacing: '0.025em',
                lineHeight: '1rem',
            }],
            'base': ['1rem', {
                letterSpacing: '0.0125em',
                lineHeight: '1.625rem',
            }],
            'lg': ['1.625rem', {
                letterSpacing: '0em',
                lineHeight: '2rem',
            }],
            'xl': ['2.625rem', {
                letterSpacing: '-0.0125em',
                lineHeight: '2.75rem',
            }],
            '2xl': ['4.25rem', {
                letterSpacing: '-0.025em',
                lineHeight: '4.375rem',
            }],
            '3xl': ['6.875rem', {
                letterSpacing: '-0.0375em',
                lineHeight: '6.875rem',
            }],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            gray: {
                '0': '#000000',
                '1': '#111111',
                '2': '#222222',
                '3': '#333333',
                '4': '#444444',
                '5': '#555555',
                '6': '#666666',
                '7': '#777777',
                '8': '#888888',
                '9': '#999999',
                'a': '#AAAAAA',
                'b': '#BBBBBB',
                'c': '#CCCCCC',
                'd': '#DDDDDD',
                'e': '#EEEEEE',
                'f': '#FFFFFF',
            },
            accent: {
                'blue': '#3399CC',
                'green': '#33CC33',
                'yellow': '#CCC433',
                'red': '#CC3333',
            },
        },
        borderRadius: {
            'none': '0px',
            'sm': '2px',
            DEFAULT: '5px',
            'lg': '20px',
            'full': '9999px',
        }
    },
    corePlugins: {
        backgroundImage: false,
        gradientColorStops: false,
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
