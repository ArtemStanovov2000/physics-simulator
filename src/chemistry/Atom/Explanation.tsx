import { createUseStyles } from "react-jss";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { setWindow } from "../../store/windowSlice";
import { image } from "../../assets/image/image";
import Atom from "./Atom";
import Button from "../../shared/Button";
import ArrowBackButton from "../../shared/ButtonIcons/ArrowBackButton";

const useStyles = createUseStyles({
    page: {
        width: "100%",
        backgroundImage: `url(${image.background})`,
        backgroundRepeat: "repeat",
        position: "relative",
        paddingTop: "60px",
        paddingBottom: "80px"
    },
    buttonBox: {
        position: "fixed",
        top: "60px",
        left: "30px"
    },
    innerBox: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "960px"
    },
    textBox: {
        marginTop: "80px",
        "&:first-child": {
            marginTop: "0",
        },
    },
    title: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Gilroy",
        fontSize: "36px",
        margin: 0,
    },
    text: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Gilroy",
        fontSize: "24px",
        margin: "30px 0 10px 0",
        textIndent: "35px",
        lineHeight: "30px",
        textAlign: "justify"
    },
    canvas: {
        marginTop: "30px"
    }
});

const Explanation: FC = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    return (
        <div className={classes.page}>
            <div className={classes.buttonBox}>
                <Button isNav={true} icon={<ArrowBackButton />} label={"Вернуться к симуляции"} onClick={() => dispatch(setWindow(<Atom />))} />
            </div>
        </div >
    )
}

export default Explanation