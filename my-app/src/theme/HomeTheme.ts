import {makeStyles} from "@material-ui/core";
import {grey} from "@mui/material/colors";

export const useStylesHome = makeStyles((theme) => ({
    body: {
        paddingLeft: '100px',
        paddingRight: '100px',
    },

    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    sideBar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '250px',
        padding: '10px 10px 10px 25px',
        marginRight: '30px',
    },

    sideBarItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        marginBottom: '10px',
        height: '45px',
        borderRadius: '30px',
        transition: 'background-color 0.15s ease-in-out',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(15, 20, 25, 0.1)',
            '& h6': {
                color: '#1b76d2', // Добавляем цвет тексту в меню при hover
            },
            '& svg path': {
                fill: "#1b76d2", // Добавляем цвет иконке в меню при hover
            },
        },
    },

    sideBarText: {
        fontWeight: 550,
        fontSize: '18px',
        letterSpacing: '0.5px',
        marginLeft: '15px',
    },

    contentBlocksCenter: {
        width: '1000px',
        height: '100%',
        '& .MuiPaper-root': {
            borderRadius: '0',
            borderBottom: '0',
            borderTop: '0',
        },
    },

    tweetsWrapper: {
        height: '100%',
        '& .MuiPaper-root': {
            borderRadius: '0',
            borderTop: '0 ',
            borderLeft: '0',
            borderRight: '0',
            borderBottom: '1px solid rgb(239, 243, 244)',
        },
    },

    tweetsHeader: {
        padding: '20px 15px 10px 15px',
    },

    tweetsHeaderText: {
        fontWeight: 800,
        letterSpacing: '1px',
    },

    tweetBlock: {
        padding: '20px 15px 10px 15px',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
            cursor: 'pointer',
        },
    },

    tweetsCentered: {
      textAlign: 'center',
        marginTop: '15px',
    },

    tweetAvatar: {
        width: '40px',
        height: '40px',
        marginRight: '10px',

    },

    addFormBody: {
        display: 'flex',
        margin: '0 auto',
        padding: '20px',

    },

    addFormTextarea: {
        width: '80%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',

    },

    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        // borderBottom: '1px solid rgb(239, 243, 244)',
    },

    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,

    },

    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -25,
        justifyContent: 'space-between',
        maxWidth: 450,
    },

    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },

    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },

    tweetUserName: {
        color: grey[400],

    },

    tweetIconGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '5px',
        position: 'relative',
    },

    tweetBlockIcon1: {
        '&:hover': {
            '& .MuiSvgIcon-root': {
                fill: 'blue',
            },
            '& .MuiTouchRipple-root': {
                color: 'blue',
            },
        },
    },

    tweetBlockIcon2: {
        '&:hover': {
            '& .MuiSvgIcon-root': {
                fill: 'green',
            },
            '& .MuiTouchRipple-root': {
                color: 'green',
            },
        },
    },

    tweetBlockIcon3: {
        '&:hover': {
            '& .MuiSvgIcon-root': {
                fill: 'red',
            },
            '& .MuiTouchRipple-root': {
                color: 'red',
            },
        },
    },

    tweetBlockIcon4: {
        '&:hover': {
            '& .MuiSvgIcon-root': {
                fill: 'blue',
            },
            '& .MuiTouchRipple-root': {
                color: 'blue',
            },
        },
    },

    contentBlocksRight: {
        padding: '10px 50px',
    },

    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },

    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },

    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        }
    },

}));