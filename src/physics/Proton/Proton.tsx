import { createUseStyles } from "react-jss";
import { useEffect, useState, FC, RefObject, useRef } from "react";
import { createStartWindow } from "../../utils/createStartWindow";
import { renderElement } from "./logic/renderElement";
import { protonPageCoordinates } from "./coordinates";
import { Link, Route, Routes } from "react-router";
import Physics from "../Physics";
import Button from "../../shared/Button";
import Explanation from "./Explanation/Explanation";
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

const Proton: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null)
    const [frameIndex, setFrameIndex] = useState(1);
    const [isWork, setIsWork] = useState(true);
    const [mouseDoun, setMouseDoun] = useState(false);
    const classes = useStyles()

    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 10);

        return () => clearInterval(timer);
    }, [frameIndex]);

    requestAnimationFrame(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | null | undefined = canvas?.getContext('2d')
        createStartWindow(ctx, window.innerWidth, window.innerHeight)
        renderElement(ctx, isWork, mouseDoun)
    })

    const onMouseMove = (e: any) => {
        protonPageCoordinates.setCoordinates(
            e.clientX - e.target.offsetLeft,
            e.clientY - e.target.offsetTop,
        )
    }

    return (
        <Routes>
            <Route index element={
                <div tabIndex={0} className={classes.page}>
                    <canvas
                        ref={canvasRef}
                        onMouseMove={onMouseMove}
                        onMouseUp={() => setMouseDoun(false)}
                        onMouseDown={() => setMouseDoun(true)}
                        width={window.innerWidth}
                        height={window.innerHeight}
                        className={classes.canvas}>
                    </canvas>
                    <div className={classes.nav}>
                        <Link to={"/physics"}><Button isNav={true} icon={<ArrowBackButton />} label={"На раздел выше"} /></Link>
                        <Button onClick={() => setIsWork(true)} icon={<ArrowStartButton />} label={"Запустить симуляцию"} />
                        <Button onClick={() => setIsWork(false)} icon={<PauseButton />} label={"Остановить симуляцию"} />
                        <Link to={"/physics/proton/explanation"}><Button icon={<ExplanationButton />} label={"[ Объяснение ]"}></Button></Link>
                    </div>
                </div>

            } />
            <Route path="/physics/*" element={<Physics />} />
            <Route path="/explanation" element={<Explanation />} />
        </Routes>
    )
}

export default Proton