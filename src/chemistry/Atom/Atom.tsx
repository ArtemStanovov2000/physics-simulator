import { createUseStyles } from "react-jss";
import { useEffect, useState, FC, RefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import { setWindow } from "../../store/windowSlice";
import { createStartWindow } from "../../utils/createStartWindow";
import { renderElement } from "./logic/renderElement";
import { listElements } from "./logic/listElements";
import { AtomParams } from "./logic/listElements";
import Chemistry from "../Chemistry";
import Button from "../../shared/Button";
import ArrowBackButton from "../../shared/ButtonIcons/ArrowBackButton";
import ExplanationButton from "../../shared/ButtonIcons/ExplanationButton";

const useStyles = createUseStyles({
    page: {
        position: "relative",
        height: `${window.innerHeight}px`
    },
    canvas: {
        position: "absolute",
    },
    nav: {
        position: "absolute",
        marginTop: "20px",
        marginLeft: "20px",
        display: "grid",
        gap: "20px"
    },
    elementList: {
        display: "flex",
        flexWrap: "wrap",
        position: "absolute",
        justifyContent: "center",
        bottom: `10px`,
        width: "auto",
        gap: "4px",
        padding: "0 20px 10px 20px"
    },
    element: {
        color: "rgb(255, 255, 255)",
        border: "1px rgb(49, 102, 8) solid",
        borderRadius: "5px",
        fontFamily: "gilroy",
        backgroundColor: "inherit",
        fontSize: "20px",
        margin: "0",
        width: "40px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: "0",
        "&:hover": {
            cursor: "pointer",
            color: "#d2de52",
        },
    },
    params: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        right: "30px",
        top: "30px"
    },
    paramsTitle: {
        color: "#d2de52",
        display: "flex",
        justifyContent: "center",
        margin: 0,
        fontFamily: "gilroy",
        padding: "10px 16px",
    },
    paramsItem: {
        color: "rgb(255, 255, 255)",
        fontFamily: "gilroy",
        margin: 0,
        width: "430px",
        display: "flex",
        justifyContent: "space-between"
    },
    paramsItemValue: {
        color: "#d2de52",
        borderRadius: "5px",
        fontFamily: "gilroy",
        fontSize: "20px",
        fontWeight: "200",
        margin: 0,
    },
    paramsItemDesc: {
        color: "#ffffff",
        borderRadius: "5px",
        fontFamily: "gilroy",
        fontSize: "20px",
        fontWeight: "200",
        margin: 0,
    }
});

const Atom: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null)
    const [frameIndex, setFrameIndex] = useState(1);
    const [electrons, setElectrons] = useState([1]);
    const [protonCount, setProtonCount] = useState(1);
    const [name, setName] = useState("H");
    const [label, setLabel] = useState("Водород");
    const [mass, setMass] = useState(1);
    const [neutronCount, setNeutronCount] = useState(0);
    const classes = useStyles()
    const dispatch = useDispatch()


    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 16);

        return () => clearInterval(timer);
    });

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | null | undefined = canvas?.getContext('2d')
        createStartWindow(ctx, window.innerWidth, window.innerHeight)
        renderElement(ctx, electrons, protonCount, neutronCount)
    }, [frameIndex])

    const setParams = (element: AtomParams) => {
        setElectrons(element.electrons)
        setProtonCount(element.number)
        setNeutronCount(element.neutronCount)
        setMass(element.mass)
        setName(element.name)
        setLabel(element.label)
    }

    return (
        <div tabIndex={0} className={classes.page}>
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
                className={classes.canvas}>
            </canvas>
            <div className={classes.nav}>
                <Button isNav={true} icon={<ArrowBackButton />} label={"На раздел выше"} onClick={() => dispatch(setWindow(<Chemistry />))} />
                <Button icon={<ExplanationButton />} label={"[ Объяснение ]"} />
            </div>
            <div className={classes.elementList}>
                {listElements.map((element, index) => <button onClick={() => setParams(element)} key={index} className={classes.element}>{element.name}</button>)}
            </div>
            <div className={classes.params}>
                <h3 className={classes.paramsTitle}>Параметры атома</h3>
                <div className={classes.paramsItem}>
                    <p className={classes.paramsItemDesc}>Назвавание элемента - </p>
                    <p className={classes.paramsItemValue}>{label}</p>
                </div>
                <div className={classes.paramsItem}>
                    <p className={classes.paramsItemDesc}>Обозначение элемента - </p>
                    <p className={classes.paramsItemValue}>{name}</p>
                </div>
                <div className={classes.paramsItem}>
                    <p className={classes.paramsItemDesc}>Атомный номер - </p>
                    <p className={classes.paramsItemValue}>{protonCount}</p>
                </div>
                <div className={classes.paramsItem}>
                    <p className={classes.paramsItemDesc}>Электронные оболочки - </p>
                    <p className={classes.paramsItemValue}>{electrons.join(", ")}</p>
                </div>
                <div className={classes.paramsItem}>
                    <p className={classes.paramsItemDesc}>Атомная масса, а.е.м. - </p>
                    <p className={classes.paramsItemValue}>{mass}</p>
                </div>
            </div>
        </div>
    )
}

export default Atom