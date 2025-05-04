import { createUseStyles } from "react-jss";
import { useEffect, useState, useRef } from "react";
import { renderElement } from "./logic/renderElement";
import { createStartWindow } from "../../utils/createStartWindow";
import { createDottedCircle } from "./logic/createDottedCircle";
import { restart } from "./logic/restart";
import { Link, Route, Routes } from "react-router";
import Physics from "../Physics";
import Button from "../../shared/Button";
import ArrowBackButton from "../../shared/ButtonIcons/ArrowBackButton";
import ArrowStartButton from "../../shared/ButtonIcons/ArrowStartButton";
import PauseButton from "../../shared/ButtonIcons/PauseButton";
import CrossButton from "../../shared/ButtonIcons/CrossButton";
import ExplanationButton from "../../shared/ButtonIcons/ExplanationButton";
import Explanation from "./Explanation";
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
const TheRocheLimit = () => {
    const canvasRef = useRef(null);
    const [frameIndex, setFrameIndex] = useState(1);
    const [isWork, setIsWork] = useState(true);
    const classes = useStyles();
    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 20);
        return () => clearInterval(timer);
    }, [frameIndex]);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    requestAnimationFrame(() => {
        createStartWindow(ctx, window.innerWidth, window.innerHeight);
        createDottedCircle(ctx, 315);
        renderElement(ctx, isWork);
    });
    return (<Routes>
            <Route index element={<div tabIndex={0} className={classes.page}>
                    <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className={classes.canvas}>
                    </canvas>
                    <div className={classes.nav}>
                        <Link to={"/physics"}><Button isNav={true} icon={<ArrowBackButton />} label={"На раздел выше"}/></Link>
                        <Button onClick={() => setIsWork(true)} icon={<ArrowStartButton />} label={"Запустить симуляцию"}/>
                        <Button onClick={() => setIsWork(false)} icon={<PauseButton />} label={"Остановить симуляцию"}/>
                        <Button onClick={() => restart()} icon={<CrossButton />} label={"Перезапустить симуляцию"}/>
                        <Link to={"/physics/theRocheLimit/explanation"}><Button icon={<ExplanationButton />} label={"[ Объяснение ]"}></Button></Link>
                    </div>
                </div>}/>
            <Route path="/physics/*" element={<Physics />}/>
            <Route path="/explanation" element={<Explanation />}/>
        </Routes>);
};
export default TheRocheLimit;
//# sourceMappingURL=TheRocheLimit.jsx.map