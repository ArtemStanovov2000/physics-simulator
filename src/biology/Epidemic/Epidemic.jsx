import { createUseStyles } from "react-jss";
import { useEffect, useState, useRef } from "react";
import { createStartWindow } from "../../utils/createStartWindow";
import { renderElement } from "./logic/renderElement";
import { restart } from "./logic/parts";
import { Link, Route, Routes } from "react-router";
import Biology from "../Biology";
import Button from "../../shared/Button";
import ArrowBackButton from "../../shared/ButtonIcons/ArrowBackButton";
import ArrowStartButton from "../../shared/ButtonIcons/ArrowStartButton";
import PauseButton from "../../shared/ButtonIcons/PauseButton";
import CrossButton from "../../shared/ButtonIcons/CrossButton";
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
const Epidemic = () => {
    const canvasRef = useRef(null);
    const [, setFrameIndex] = useState(1);
    const [isWork, setIsWork] = useState(true);
    const classes = useStyles();
    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 16);
        return () => clearInterval(timer);
    });
    requestAnimationFrame(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        createStartWindow(ctx, window.innerWidth, window.innerHeight);
        renderElement(ctx, isWork);
    });
    return (<Routes>
            <Route index element={<div tabIndex={0} className={classes.page}>
                    <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className={classes.canvas}>
                    </canvas>
                    <div className={classes.nav}>
                        <Link to={"/biology"}><Button isNav={true} icon={<ArrowBackButton />} label={"На раздел выше"}/></Link>
                        <Button onClick={() => setIsWork(true)} icon={<ArrowStartButton />} label={"Запустить симуляцию"}/>
                        <Button onClick={() => setIsWork(false)} icon={<PauseButton />} label={"Остановить симуляцию"}/>
                        <Button icon={<CrossButton />} onClick={() => restart()} label={"Перезапустить симуляцию"}/>
                    </div>
                </div>}/>
            <Route path="/biology/*" element={<Biology />}/>
        </Routes>);
};
export default Epidemic;
//# sourceMappingURL=Epidemic.jsx.map