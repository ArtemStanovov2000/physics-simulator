import { createUseStyles } from "react-jss";
import { useState, FC, useRef, useEffect } from "react";
import { RefObject } from "react";
import { useDispatch } from "react-redux";
import { setWindow } from "../../../store/windowSlice";
import { image } from "../../../assets/image/image";
import { createStartWindow } from "../../utils/createStartWindow";
import { renderGluenField } from "./logic/renderGluenField";
import Button from "../../../shared/Button";
import Proton from "../Proton";
import ArrowBackButton from "../../../shared/ButtonIcons/ArrowBackButton";
import AttentionBlock from "../../../shared/Attention/Attention/AttentionBlock";

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
    const canvasGluonField: RefObject<HTMLCanvasElement | null> = useRef<HTMLCanvasElement>(null)
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex(frameIndex => frameIndex + 1);
        }, 16);

        return () => clearInterval(timer);
    });

    useEffect(() => {
        const canvasGluonFieldRef: HTMLCanvasElement | null = canvasGluonField.current;
        const ctxGluonField: CanvasRenderingContext2D | null | undefined = canvasGluonFieldRef?.getContext('2d')
        createStartWindow(ctxGluonField, 960, 500)
        renderGluenField(ctxGluonField)
    }, [frameIndex])

    return (
        <div className={classes.page}>
            <div className={classes.buttonBox}>
                <Button isNav={true} icon={<ArrowBackButton />} label={"Вернуться к симуляции"} onClick={() => dispatch(setWindow(<Proton />))} />
            </div>
            <div className={classes.innerBox}>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Определение</h3>
                    <p className={classes.text}>Одна из трёх элементарных частиц, из которых построено обычное вещество.
                        Протоны входят в состав атомных ядер. Порядковый номер химического элемента в таблице Менделеева равен количеству протонов в его ядре.</p>
                    <AttentionBlock text={"Внимание! Данная симуляция создана с целью демонстрации некоторых физических явлений. Так как законы квантовой механики очень сильно отличаются от привычной нам физики, продемонстрировать эти эффекты в полной мере невозможно."} />
                </div>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Глюонное поле</h3>
                    <p className={classes.text}>Мы привыкли считать вакуум пустым. Но по представлениям физиков современности это не совсем так.</p>
                    <p className={classes.text}>Можно провести довольно интересную аналогию: Если у вас есть тысяча рублей в кармане, но так же вы должны другу ту же тысячу,
                        то суммарно ваш капитал равен нулю.</p>
                    <p className={classes.text}>Теперь усложним пример - представьте себе пустую комнату в которой спонтанно появляются купюры номиналом в 100 и -100 рублей.
                        Они всегда обязаны появляються парами, чтобы суммарный номинал всегда равнялся нулю.</p>
                    <p className={classes.text}>В такой комнате вокруг вас всегда будет большое количество спонтанно появляющихся и исчезающих купюр.
                        Правда вы не сможете разбогатеть хватая эти купюры, поскольку они исчезают так быстро, что вы не успеете ничего сделать.</p>
                    <p className={classes.text}>Но почему так происходит в микромире? Это происходит из-за принципа неопределенности,
                        который запрещает нам с бесконечной точностью знать параметры какого-либо объекта и пространства.</p>
                    <p className={classes.text}>В следствии этого значение энергии в каждой конкретной точке пространства может колебаться вокруг нуля, 
                        но на макромасштабах энергия большого объема пространства всегда будет нулевой за счет усреднения всех отдельно взятых точек.</p>
                    <canvas
                        className={classes.canvas}
                        ref={canvasGluonField}
                        width={960}
                        height={500}
                    ></canvas>
                </div>
            </div>
        </div >
    )
}

export default Explanation