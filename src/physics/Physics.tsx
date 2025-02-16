import { FC } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import MainPage from "../MainPage";
import { setWindow } from "../store/windowSlice";
import background from "../assets/background.png"

const useStyles = createUseStyles({
    main: {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${background})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px"
    },
    cart: {
        backgroundColor: "rgba(3, 20, 61, 0.5)",
        color: "#ffffff",
        width: "400px",
        height: "300px",
        fontSize: "35px",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Gilroy",
        borderRadius: "7px",
        textDecoration: "none",
        border: "4px solid rgb(8, 36, 102)",
        "&:hover": {
            cursor: "pointer",
            color: "#d2de52",
            backgroundColor: "rgba(3, 20, 61, 0.4)",
        },
    },
    mainCart: {
        backgroundColor: "rgba(28, 61, 3, 0.5)",
        color: "#ffffff",
        width: "400px",
        height: "300px",
        fontSize: "35px",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        opacity: `${1}`,
        justifyContent: "center",
        fontFamily: "Gilroy",
        borderRadius: "7px",
        textDecoration: "none",
        border: "4px solid rgb(49, 102, 8)",
        "&:hover": {
            cursor: "pointer",
            color: "#d2de52",
            backgroundColor: "rgba(28, 61, 3, 0.4)",
        },
    }
});

const Physics: FC = () => {
    const [time, setTime] = useState(0);
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time => time + 1);
        }, 50);

        return () => clearInterval(timer);
    });

    return (
        <div className={classes.main}>
            <a onClick={() => dispatch(setWindow(<MainPage/>))} className={classes.mainCart}>На раздел выше</a>
            {time > 10 ? <a onClick={() => dispatch(setWindow(<Physics/>))} className={classes.cart}>Предел Роша</a> : null}
            {time > 20 ? <a onClick={() => dispatch(setWindow(<Physics/>))} className={classes.cart}>Симулятор гравитации</a>: null}
        </div>
    )
}

export default Physics