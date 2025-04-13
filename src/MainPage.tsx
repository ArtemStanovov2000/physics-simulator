import { FC } from "react";
import { createUseStyles } from "react-jss";
import { image } from "./assets/image/image";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Physics from "./physics/Physics";
import Chemistry from "./chemistry/Chemistry";
import Biology from "./biology/Biology";
import Geography from "./geography/Geography";

const useStyles = createUseStyles({
    main: {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${image.background})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
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

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={
                    <div className={classes.main}>
                    <Link className={classes.cart} to={"/physics"}>Физика</Link>
                    <Link className={classes.cart} to={"/chemistry"}>Химия</Link>
                    <Link className={classes.cart} to={"/biology"}>Биология</Link>
                    <Link className={classes.cart} to={"/geography"}>География</Link>
                </div>
                } />
                <Route path="/physics/*" element={<Physics />} />
                <Route path="/chemistry/*" element={<Chemistry />} />
                <Route path="/biology/*" element={<Biology />} />
                <Route path="/geography/*" element={<Geography />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainPage