import { createUseStyles } from "react-jss";
import { useEffect, useState, FC, RefObject, useRef } from "react";
import { renderElement } from "./logic/renderElement";
import { createStartWindow } from "./logic/createStartWindow";
import { useDispatch } from "react-redux";
import { setWindow } from "../../store/windowSlice";
import { createDottedCircle } from "./logic/createDottedCircle";
import Physics from "../Physics";
import Button from "../../shared/Button";
import ArrowBackButton from "./buttons/ArrowBackButton";
import ArrowStartButton from "./buttons/ArrowStartButton";
import PauseButton from "./buttons/PauseButton";
import CrossButton from "./buttons/CrossButton";

const useStyles = createUseStyles({
    page: {
        position: "relative"
    },
    canvas: {
        position: "absolute"
    },
    nav: {
        position: "absolute",
        marginTop: "20px",
        marginLeft: "20px",
        display: "grid",
        gap: "20px"
    }
});

const TheRocheLimit: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null)
    const [frameIndex, setFrameIndex] = useState(1);
    const [isWork, setIsWork] = useState(true);
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
        createDottedCircle(ctx, 315)
        renderElement(ctx, frameIndex, isWork)
    }, [frameIndex])

    return (
        <div tabIndex={0} className={classes.page}>
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
                className={classes.canvas}>
            </canvas>
            <div className={classes.nav}>
                <Button isNav={true} icon={<ArrowBackButton/>} label={"На раздел выше"} onClick={() => dispatch(setWindow(<Physics/>))}/>
                <Button onClick={() => setIsWork(true)} isNav={false} icon={<ArrowStartButton/>} label={"Запустить симуляцию"}/>
                <Button onClick={() => setIsWork(false)} isNav={false} icon={<PauseButton/>} label={"Остановить симуляцию"}/>
                <Button isNav={false} icon={<CrossButton/>} label={"Стереть все элементы"}/>
            </div>
        </div>
    )
}

export default TheRocheLimit