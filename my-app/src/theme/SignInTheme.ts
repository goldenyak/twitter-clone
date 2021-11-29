import {makeStyles} from "@material-ui/core";

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },

    blueSide: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#74cafe',
        flex: '0 0 50%',
        fontSize: '34px',
        position: 'relative',
        overflow: 'hidden',
    },

    blueSideInfo: {
        width: '450px',
        listStyle: 'none',
        margin: '0',
        padding: '0',
        position: 'relative',

        '& h6': {
            display: 'flex',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '20px',
            color: 'white',
            marginBottom: '40px',
        },
    },

    blueSideIcons: {
        marginRight: '20px',
        fontSize: 32,
    },

    blueSideBigIcon: {
        position: 'absolute',
        left: '-50',
        top: '-100',
        width: '200%',
        height: '200%',
    },

    loginSide: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },

    loginSideWrapper: {
        width: '380px',
    },

    loginSideTitle: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '60px',
        marginTop: '10px',
    },

    loginSideButton: {
        marginBottom: '15px',
    },

    loginSideTwitterIcon: {
        fontSize: '50px',
    },

    modalIconClose: {
        position: 'relative',
        left: '-10px',
        width: '250px',
        display: 'flex',
        alignItems: 'center',
    },
}));