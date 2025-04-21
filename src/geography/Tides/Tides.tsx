import { createUseStyles } from "react-jss";
import { useEffect, useState, FC, RefObject, useRef } from "react";
import { createStartWindow } from "../../utils/createStartWindow";
import { renderElement } from "./logic/renderElement";
import { Link, Route, Routes } from "react-router";
import Geography from "../Geography";
import Explanation from "./Explanation";
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
    }
});

const Tides: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null)
    const [frameIndex, setFrameIndex] = useState(1);
    const [isWork, setIsWork] = useState(true);
    const classes = useStyles()

    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 16);

        return () => clearInterval(timer);
    });

    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const ctx: CanvasRenderingContext2D | null | undefined = canvas?.getContext('2d')
    requestAnimationFrame(() => {
        createStartWindow(ctx, window.innerWidth, window.innerHeight)
        renderElement(ctx, isWork, frameIndex)
    })

    return (
            <Routes>
                <Route index element={
                    <div tabIndex={0} className={classes.page}>
                        <canvas
                            ref={canvasRef}
                            width={window.innerWidth}
                            height={window.innerHeight}
                            className={classes.canvas}>
                        </canvas>
                        <div className={classes.nav}>
                            <Link to={"/geography"}><Button isNav={true} icon={<ArrowBackButton />} label={"На раздел выше"} /></Link>
                            <Button onClick={() => setIsWork(true)} icon={<ArrowStartButton />} label={"Запустить симуляцию"} />
                            <Button onClick={() => setIsWork(false)} icon={<PauseButton />} label={"Остановить симуляцию"} />
                            <Link to={"/geography/tides/explanation"}><Button icon={<ExplanationButton />} label={"[ Объяснение ]"}></Button></Link>
                        </div>
                    </div>

                } />
                <Route path="/geography/*" element={<Geography />} />
                <Route path="/explanation" element={<Explanation />} />
            </Routes>
    )
}

export default Tides