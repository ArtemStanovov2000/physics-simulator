import { createUseStyles } from "react-jss";
import { useState, FC, useRef, useEffect } from "react";
import { RefObject } from "react";
import { useDispatch } from "react-redux";
import { setWindow } from "../../store/windowSlice";
import { image } from "../../assets/image/image";
import { createStartWindow } from "../utils/createStartWindow";
import { renderElementGravity } from "./logic/renderElementGravity";
import { renderElementTidalForse } from "./logic/renderElementTidalForse";
import Button from "../../shared/Button";
import TheRocheLimit from "./TheRocheLimit";
import ArrowBackButton from "../../shared/ButtonIcons/ArrowBackButton";

const useStyles = createUseStyles({
    page: {
        width: "100%",
        backgroundImage: `url(${image.background})`,
        backgroundRepeat: "repeat",
        position: "relative",
        paddingTop: "60px",
        paddingBottom: "80px"
    },
    buttonBox: {
        position: "fixed",
        top: "60px",
        left: "30px"
    },
    innerBox: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "960px"
    },
    textBox: {
        marginTop: "80px",
        "&:first-child": {
            marginTop: "0",
        },
    },
    title: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Gilroy",
        fontSize: "36px",
        margin: 0,
    },
    text: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Gilroy",
        fontSize: "24px",
        margin: "30px 0 10px 0",
        textIndent: "35px",
        lineHeight: "30px"
    },
    canvas: {
        marginTop: "30px"
    }
});

const Explanation: FC = () => {
    const classes = useStyles()

    const dispatch = useDispatch()
    const canvasGravityRef: RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null)
    const canvasTidalForcesRef: RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null)
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 16);

        return () => clearInterval(timer);
    });

    useEffect(() => {
        const canvasGravity: HTMLCanvasElement | null = canvasGravityRef.current;
        const ctxGravity: CanvasRenderingContext2D | null | undefined = canvasGravity?.getContext('2d')
        createStartWindow(ctxGravity, 960, 500)
        renderElementGravity(ctxGravity, frameIndex, 1500)

        const canvasTidalForces: HTMLCanvasElement | null = canvasTidalForcesRef.current;
        const ctxTidalForces: CanvasRenderingContext2D | null | undefined = canvasTidalForces?.getContext('2d')
        createStartWindow(ctxTidalForces, 960, 500)
        renderElementTidalForse(ctxTidalForces, frameIndex, 700)
    }, [frameIndex])

    return (
        <div className={classes.page}>
            <div className={classes.buttonBox}>
                <Button isNav={true} icon={<ArrowBackButton />} label={"Вернуться к симуляции"} onClick={() => dispatch(setWindow(<TheRocheLimit />))} />
            </div>
            <div className={classes.innerBox}>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Определение</h3>
                    <p className={classes.text}>Преде́л Ро́ша — радиус круговой орбиты спутника, обращающегося вокруг небесного тела, на котором приливные силы, вызванные гравитацией центрального тела, равны силам самогравитации спутника. </p>
                </div>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Более простым языком</h3>
                    <p className={classes.text}>Изначально планеты и спутники, а также звезды и другие тела состояли из большого облака частиц, которые равномерно заполняли пространство.
                    </p>
                    <p className={classes.text}>Эти частицы стремятся притянуться друг к другу и чем их больше, тем и эта сила больше. Можно сказать, что масса любит компанию и стремится проводить в ней всё свое время.
                    </p>
                    <p className={classes.text}>С другой стороны, силы гравитации не только формируют тело, но и поддерживают его целостность. Если вы попытаетесь взять кусочек земли и выкинуть его в космос, то у вас ничего не выйдет.
                        Вся оставшаяся часть земли постарается вернуть его обратно, и, поверьте, у неё получится.
                    </p>
                    <canvas
                        className={classes.canvas}
                        ref={canvasGravityRef}
                        width={960}
                        height={500}
                    ></canvas>
                </div>
                <div className={classes.textBox}>
                    <p className={classes.text}>Так же, если мы рассмотрим спутник на орбите, как например Луна вращающаяся вокруг Земли подвергается и другой силе. Это тоже гравитация, но уже не самого тела, а внешняя гравитация.
                    </p>
                    <p className={classes.text}>Та часть спутника, которая ближе к центральному телу притягивается к нему сильнее, чем дальняя. Это называют приливными силами. Которые стремятся разорвать спутник на куски.
                    </p>
                    <canvas
                        className={classes.canvas}
                        ref={canvasTidalForcesRef}
                        width={960}
                        height={500}
                    ></canvas>
                    <p className={classes.text}>Чем ближе мы к центральному телу, тем больше нарастают приливные силы, в то время как гравитация тела остается постоянной.</p>
                    <p className={classes.text}>Да, в реальной жизни Луна, конечно, не приближается к Земле, скорее наоборот, в этой симуляции так происходит, чтобы показать суть явления, а не потому
                        что спутники реально так движутся.
                    </p>
                    <p className={classes.text}>Но вот что бывает происходит на самом деле, так это мирно дрейфующий в космосе астероид который рано или поздно может подойти к планете так близко
                        что приливные силы превзойдут гравитацию, и астероид разорвет.
                    </p>
                    <p className={classes.text}>Теперь можно сказать, что мы посмотрели на симуляцию, и в простыми словами попытались объяснить суть этого понятия.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Explanation