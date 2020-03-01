import { Styles } from 'react-jss';

export const reset: Styles = {
    '@global': {
        '*': {
            'margin': '0',
            'padding': '0',
            'border': '0',
            'boxSizing': 'border-box',
            '-webkit-font-smoothing': 'antialised',
            '-moz-osx-font-smoothing': 'grayscale',
        },
        '::-webkit-scrollbar': {
            '-webkit-appearance': 'none',
            'width': '1px',
            'height': '1px',
        },
        [`
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend, button,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed,
            figure, figcaption, footer, header, hgroup,
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video
        `]: {
            'fontSize': '100%',
            'font': 'inherit',
            'verticalAlign': 'baseline',
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
        },
        'button': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            userSelect: 'none',
            outline: 'none',
        },
        [`
            article, aside, details, figcaption, figure,
            footer, header, hgroup, menu, nav, section
        `]: {
            display: 'block',
        },
        'html': {
            fontSize: '16px',
        },
        'body': {
            '-webkit-print-color-adjust': ['exact', '!important'],
            'lineHeight': '1',
        },
        'ol, ul': {
            listStyle: 'none',
        },
        'blockquote, q': {
            quotes: 'none',
        },
        'blockquote:before, blockquote:after:after, q:before, q:after': {
            content: '',
        },
        'table': {
            borderCollapse: 'collapse',
            borderSpacing: '0',
        },
        'a': {
            color: 'inherit',
            fontSize: 'inherit',
            textDecoration: 'inherit',
        },
        'input, button, textarea': {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            'borderRadius': '0',
            'outline': 'none',
            'boxShadow': 'none',
            'appearance': 'none',
            'margin': '0',
            'padding': '0',
            '&:focus': {
                outline: 'none',
            },
        },
        'input': {
            'wordBreak': 'normal',
            '&:invalid': {
                boxShadow: 'none',
            },
            '&[type=\'number\']': {
                '&::-webkit-outer-spin-button, &::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    'opacity': '0.5',
                },
            },
            '&[type=\'search\']': {
                '-webkit-appearance': 'none',
                'borderRadius': '0',
                [`
                    &::-webkit-search-decoration,
                    &::-webkit-search-cancel-button,
                    &::-webkit-search-results-button,
                    &::-webkit-search-results-decoration
                `]: {
                    display: 'none',
                },
            },
            '&::-ms-clear': {
                display: 'none',
            },
        },
    },
};
