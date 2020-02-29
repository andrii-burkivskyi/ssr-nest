import { Styles } from "react-jss";

export const styles: Styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: "relative",
        width: "100%",
        flex: "1 1 auto",
        maxWidth: `calc(${1 / 4 * 100}% - 20px)`,
        minWidth: "350px",
        maxHeight: "200px",
        minHeight: "200px",
        margin: "10px",
        backgroundColor: "#202c39"
    },
    header: {
        backgroundColor: "red",
        position: "absolute",
        display: 'none',
        top: 0,
        right: 0,
        height: "28px",
        padding: "5px",
        justifyContent: "flex-end",
        zIndex: 100,
        "$container:hover &": {
            display: "block"
        }
    },
    control_button: {
        display: "block",
        width: "18px",
        height: "18px",
        margin: "0 5px",
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        width: "100%",
        flex: "1 1 0",
    },
    name: {
        color: '#ffffff',
        fontFamily: 'sans-serif',
        fontSize: "48px",
        width: "100%",
        textAlign: "center",
        paddingBottom: '10px',
    }
};
