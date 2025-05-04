import { createUseStyles } from "react-jss";
import { useEffect, useState } from "react";
import { image } from "../assets/image/image";
import { Link, Route, Routes } from "react-router";
import TheRocheLimit from "./theRocheLimit/TheRocheLimit";
import Proton from "./Proton/Proton";
import MainPage from "../MainPage";
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
const Physics = () => {
    const [time, setTime] = useState(0);
    const classes = useStyles();
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time => time + 1);
        }, 50);
        return () => clearInterval(timer);
    });
    return (<Routes>
                <Route index element={<div className={classes.main}>
                        <Link className={classes.mainCart} to={"/"}>На раздел выше</Link>
                        {time > 10 ? <Link className={classes.cart} to={"/physics/theRocheLimit"}>Предел Роша</Link> : null}
                        {time > 20 ? <Link className={classes.cart} to={"/physics/proton"}>Протон</Link> : null}
                    </div>}/>
                <Route path="" element={<MainPage />}/>
                <Route path="/theRocheLimit/*" element={<TheRocheLimit />}/>
                <Route path="/proton/*" element={<Proton />}/>
            </Routes>);
};
export default Physics;
//# sourceMappingURL=Physics.jsx.map