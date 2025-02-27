import { createUseStyles } from "react-jss";
import { useState, FC } from "react";
import { useDispatch } from "react-redux";
import { setWindow } from "../../store/windowSlice";
import { image } from "../../assets/image/image";
import Button from "../../shared/Button";
import TheRocheLimit from "./TheRocheLimit";
import ArrowBackButton from "./buttons/ArrowBackButton";

const useStyles = createUseStyles({
    page: {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${image.background})`,
        position: "relative",
        paddingTop: "60px"
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
    }
});

const Explanation: FC = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    return (
        <div className={classes.page}>
            <div className={classes.buttonBox}>
                <Button isNav={true} icon={<ArrowBackButton />} label={"Вернуться к симуляции"} onClick={() => dispatch(setWindow(<TheRocheLimit />))} />
            </div>
            <div className={classes.innerBox}>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Определение</h3>
                    <p className={classes.text}>Преде́л Ро́ша — радиус круговой орбиты спутника, обращающегося вокруг небесного тела, на котором приливные силы, вызванные гравитацией центрального тела, равны силам самогравитации спутника. </p>
                </div>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Более наглядно</h3>
                    <p className={classes.text}>На тело на орбите влияет как минимум 2 основные силы, это гравитация которая стремиться удержать форму объекта</p>
                </div>
            </div>
        </div >
    )
}

export default Explanation