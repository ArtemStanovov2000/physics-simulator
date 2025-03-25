import { FC } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setWindow } from "../store/windowSlice";
import { image } from "../assets/image/image";
import Epidemic from "./Epidemic/Epidemic";
import MainPage from "../MainPage";
import Cart from "../shared/Cart";

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
    '@keyframes vave': {
        from: {
            opacity: 0,
            width: "0px"
        },
        to: {
            opacity: 1,
            width: "400px",
        }
    },
    cart: {
        backgroundColor: "rgba(3, 20, 61, 0.5)",
        animationName: '$vave',
        color: "#ffffff",
        width: "400px",
        height: "300px",
        fontSize: "32px",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Gilroy",
        borderRadius: "7px",
        animation: 'vave 2s',
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
        fontSize: "32px",
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

const Biology: FC = () => {
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
            <a onClick={() => dispatch(setWindow(<MainPage />))} className={classes.mainCart}>На раздел выше</a>
            {time > 10 ? <Cart label={"Эпидемия"} onClick={() => dispatch(setWindow(<Epidemic/>))}/> : null}
        </div>
    )
}

export default Biology