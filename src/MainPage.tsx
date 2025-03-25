import { FC } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import { setWindow } from "./store/windowSlice";
import { image } from "./assets/image/image";
import Physics from "./physics/Physics";
import Chemistry from "./chemistry/Chemistry";
import Biology from "./biology/Biology";

const useStyles = createUseStyles({
    main: {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${image.background})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px"
    },
    cart: {
        backgroundColor: "rgba(3, 20, 61, 0.5)",
        color: "#ffffff",
        width: "400px",
        height: "500px",
        fontSize: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Gilroy",
        borderRadius: "7px",
        textDecoration: "none",
        border: "4px solid rgb(8, 36, 102)",
        "&:hover": {
            cursor: "pointer",
            color: "#d2de52",
            backgroundColor: "rgba(3, 20, 61, 0.4)",
        },
    }
});

const MainPage: FC = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    return (
        <>
            <div className={classes.main}>
                <a onClick={() => dispatch(setWindow(<Physics/>))} className={classes.cart}>Физика</a>
                <a onClick={() => dispatch(setWindow(<Chemistry/>))} className={classes.cart}>Химия</a>
                <a onClick={() => dispatch(setWindow(<Biology/>))} className={classes.cart}>Биология</a>
            </div>
        </>
    )
}

export default MainPage