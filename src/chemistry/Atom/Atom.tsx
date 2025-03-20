import { createUseStyles } from "react-jss";
import { useEffect, useState, FC, RefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import { setWindow } from "../../store/windowSlice";
import { createStartWindow } from "../../utils/createStartWindow";
import { renderElement } from "./logic/renderElement";
import { playgroundPageCoordinates } from "./coordinates";
import { listElements } from "./logic/listElements";
import { AtomParams } from "./logic/listElements";
import Chemistry from "../Chemistry";
import Button from "../../shared/Button";
import ArrowBackButton from "../../shared/ButtonIcons/ArrowBackButton";
import ArrowStartButton from "../../shared/ButtonIcons/ArrowStartButton";
import PauseButton from "../../shared/ButtonIcons/PauseButton";
import ExplanationButton from "../../shared/ButtonIcons/ExplanationButton";

const useStyles = createUseStyles({
    page: {
        position: "relative"
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
        top: `${window.innerHeight - 150}px`,
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
    }
});

const Atom: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null)
    const [frameIndex, setFrameIndex] = useState(1);
    const [isWork, setIsWork] = useState(true);
    const [electrons, setElectrons] = useState([1, 0]);
    const [protonCount, setProtonCount] = useState(1);
    const [neutronCount, setNeutronCount] = useState(1);
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
        renderElement(ctx, isWork, electrons, protonCount, neutronCount)
    }, [frameIndex])

    const onMouseMove = (e: any) => {
        playgroundPageCoordinates.setCoordinates(
            e.clientX - e.target.offsetLeft,
            e.clientY - e.target.offsetTop,
        )
    }

    const setParams = (element: AtomParams) => {
        setElectrons(element.electrons)
        setProtonCount(element.number)
        setNeutronCount(element.neutronCount)
    }

    return (
        <div tabIndex={0} className={classes.page}>
            <canvas
                ref={canvasRef}
                onMouseMove={onMouseMove}
                width={window.innerWidth}
                height={window.innerHeight}
                className={classes.canvas}>
            </canvas>
            <div className={classes.nav}>
                <Button isNav={true} icon={<ArrowBackButton />} label={"На раздел выше"} onClick={() => dispatch(setWindow(<Chemistry />))} />
                <Button onClick={() => setIsWork(true)} icon={<ArrowStartButton />} label={"Запустить симуляцию"} />
                <Button onClick={() => setIsWork(false)} icon={<PauseButton />} label={"Остановить симуляцию"} />
                <Button icon={<ExplanationButton />} label={"[ Объяснение ]"} />
            </div>
            <div className={classes.elementList}>
                {listElements.map((element, index) => <button onClick={() => fff()} key={index} className={classes.element}>{element.name}</button>)}
            </div>
        </div>
    )
}

export default Atom