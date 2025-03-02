import { createUseStyles } from "react-jss";
import { useEffect, useState, FC, RefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import { setWindow } from "../../store/windowSlice";
import { createStartWindow } from "./logic/createStartWindow";
import { renderElement } from "./logic/renderElement";
import Physics from "../Physics";
import Button from "../../shared/Button";
import ArrowBackButton from "../../shared/ButtonIcons/ArrowBackButton";
import ArrowStartButton from "../../shared/ButtonIcons/ArrowStartButton";
import PauseButton from "../../shared/ButtonIcons/PauseButton";
import CrossButton from "../../shared/ButtonIcons/CrossButton";
import ExplanationButton from "../../shared/ButtonIcons/ExplanationButton";

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

const Proton: FC = () => {
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
        renderElement(ctx, isWork)
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
                <Button isNav={true} icon={<ArrowBackButton />} label={"На раздел выше"} onClick={() => dispatch(setWindow(<Physics />))} />
                <Button onClick={() => setIsWork(true)} icon={<ArrowStartButton />} label={"Запустить симуляцию"} />
                <Button onClick={() => setIsWork(false)} icon={<PauseButton />} label={"Остановить симуляцию"} />
                <Button icon={<CrossButton />} label={"Перезапустить симуляцию"} />
                <Button icon={<ExplanationButton />} label={"[ Объяснение ]"}/>
            </div>
        </div>
    )
}

export default Proton