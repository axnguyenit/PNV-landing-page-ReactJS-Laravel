import {
    blackColor,
    whiteColor,
    hexToRgb,
    defaultFont,
} from '../../material-dashboard-react.js';

const homePageStyle = {
    homePage: {
        width: '100%',
        border: '0',
        ...defaultFont,
        color: 'rgba(' + hexToRgb(blackColor) + ', 0.87)',
        background: whiteColor,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '0',
    },
    characters: {
        width: '100%',
        listStyle: 'none',
        paddingLeft: '0',
    },
    character: {
        display: 'flex',
        alignItem: 'center',
        border: 'solid 2px #d0d0d0',
        background: whiteColor,
        // height: "200px",
        borderRadius: '.2em',
        padding: '0 14px',
        marginBottom: '1em',
    },
};

export default homePageStyle;
