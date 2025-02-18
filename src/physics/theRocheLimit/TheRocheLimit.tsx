import { createUseStyles } from "react-jss";
import { useEffect, useState, FC, RefObject, useRef } from "react";
import { renderElement } from "./renderElement";
import { createStartWindow } from "./createStartWindow";

const useStyles = createUseStyles({
    page: {

    },
    canvas: {
    },
});

const TheRocheLimit: FC = () => {
    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null)
    const [frameIndex, setFrameIndex] = useState(1);
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const classes = useStyles()

    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 30);

        return () => clearInterval(timer);
    });

    const onMouseMove = (e) => {
        setCoords({
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop,
        })
    }

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const ctx: CanvasRenderingContext2D | null = canvas?.getContext('2d')
        createStartWindow(ctx, window.innerWidth, window.innerHeight)
        renderElement(ctx, frameIndex, coords)
    }, [frameIndex])

    return (
        <div tabIndex={0} className={classes.page}>
            <canvas 
            ref={canvasRef}
            onMouseMove={onMouseMove}
            width={window.innerWidth}
            height={window.innerHeight}
            className={classes.canvas}>
            </canvas>
        </div>
    )
}

export default TheRocheLimit