import { createUseStyles } from "react-jss";
import { useEffect, useState, FC, RefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import { setWindow } from "../../store/windowSlice";
import { createStartWindow } from "../../utils/createStartWindow";
import { renderElement } from "./logic/renderElement";
import { blackHolePageCoordinates } from "./coordinates";
import Physics from "../Physics";
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
        cursor: "none"
    },
    nav: {
        position: "absolute",
        marginTop: "20px",
        marginLeft: "20px",
        display: "grid",
        gap: "20px"
    }
});

const BlackHole: FC = () => {
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
        createStartWindow(ctx, window.innerWidth, window.innerHeight, "#101013")
        renderElement(ctx, isWork, frameIndex)
    }, [frameIndex])

    const onMouseMove = (e: any) => {
        blackHolePageCoordinates.setCoordinates(
            e.clientX - e.target.offsetLeft,
            e.clientY - e.target.offsetTop,
        )
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
                <Button isNav={true} icon={<ArrowBackButton />} label={"На раздел выше"} onClick={() => dispatch(setWindow(<Physics />))} />
                <Button onClick={() => setIsWork(true)} icon={<ArrowStartButton />} label={"Запустить симуляцию"} />
                <Button onClick={() => setIsWork(false)} icon={<PauseButton />} label={"Остановить симуляцию"} />
                <Button icon={<ExplanationButton />} label={"[ Объяснение ]"}/>
            </div>
        </div>
    )
}

export default BlackHole