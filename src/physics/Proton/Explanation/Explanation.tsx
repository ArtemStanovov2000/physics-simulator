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
        marginBottom: "60px"
    },
    text: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Gilroy",
        fontSize: "24px",
        margin: "30px 0 10px 0",
        textIndent: "35px",
        lineHeight: "30px",
        textAlign: "justify"
    },
    canvas: {
        marginTop: "30px"
    },
    quarksList: {
        margin: "0",
        padding: "0",
        marginTop: "40px",
        marginBottom: "40px",
    },
    quarkBlock: {
        display: "flex",
        alignItems: "center",
        marginTop: "2px",
        marginBottom: "2px"
    },
    quark: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Gilroy",
        fontSize: "30px",
        backgroundColor: "#ad428f",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        marginRight: "15px"
    },
    quarkDesc: {
        color: "rgb(255, 215, 188)",
        fontFamily: "Gilroy",
        fontSize: "20px",
    },
    protonImg: {
        marginTop: "50px",
        width: "100%",
        height: "700px",
        backgroundSize: "100% 100%",
        backgroundImage: `url(${image.proton})`,
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
                    <p className={classes.text}>Теперь усложним пример — представьте себе пустую комнату в которой спонтанно появляются купюры номиналом в 100 и -100 рублей.
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
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Кварки</h3>
                    <p className={classes.text}>Все 6 ароматов кварков</p>
                    <ul style={{ marginTop: "20px" }} className={classes.quarksList}>
                        <li className={classes.quarkBlock}>
                            <div className={classes.quark}>u</div>
                            <p className={classes.quarkDesc}>- верхний кварк</p>
                        </li>
                        <li className={classes.quarkBlock}>
                            <div className={classes.quark}>d</div>
                            <p className={classes.quarkDesc}>- нижний кварк</p>
                        </li>
                        <li className={classes.quarkBlock}>
                            <div className={classes.quark}>c</div>
                            <p className={classes.quarkDesc}>- очарованный кварк</p>
                        </li>
                        <li className={classes.quarkBlock}>
                            <div className={classes.quark}>s</div>
                            <p className={classes.quarkDesc}>- странный кварк</p>
                        </li>
                        <li className={classes.quarkBlock}>
                            <div className={classes.quark}>t</div>
                            <p className={classes.quarkDesc}>- истинный кварк</p>
                        </li>
                        <li className={classes.quarkBlock}>
                            <div className={classes.quark}>b</div>
                            <p className={classes.quarkDesc}>- прелестный кварк</p>
                        </li>
                    </ul>
                    <p className={classes.text}>Кварки составляют нашу материю, но сами при этом устроены очень необычно.</p>
                    <p className={classes.text}>Во-первых, это не твердые маленькие шарики, как мы их интуитивно себе представляем.
                        Даже если мы знаем, что это не так, всё равно у нас буквально нет их аналогов, чтобы это вообразить.
                        Следовательно, все что мы можем сделать, это использовать некие упрощения и визуализации, чтобы хоть как-то понимать, с чем мы имеем дело.</p>
                    <p className={classes.text}>Во-вторых, хоть мы не знаем это точно, но в квантовой механике кварки представляют собой "частицы" нулевого размера т.е само понятие размер тут не применимо.
                        Опять же, получается, что и тут мы имеем ограничение, потому что нельзя показать на экране точку нулевого размера.
                    </p>
                    <ul className={classes.quarksList}>
                        <li className={classes.quarkBlock}>
                            <div style={{ backgroundColor: "#d54040" }} className={classes.quark}>u</div>
                            <p className={classes.quarkDesc}>- верхний кварк</p>
                        </li>
                        <li className={classes.quarkBlock}>
                            <div style={{ backgroundColor: "#40d540" }} className={classes.quark}>u</div>
                            <p className={classes.quarkDesc}>- верхний кварк</p>
                        </li>
                        <li className={classes.quarkBlock}>
                            <div style={{ backgroundColor: "#4040d5" }} className={classes.quark}>u</div>
                            <p className={classes.quarkDesc}>- верхний кварк</p>
                        </li>
                    </ul>
                    <p className={classes.text}>Кварки обладают так называемым цветным зарядом. Это не то же самое, что электрический заряд, поскольку, во-первых, кварк обладает и электрическим зарядом тоже, а, во-вторых
                        их целых 3 вида, а не 2.
                    </p>
                    <p className={classes.text}>Стоит уточнить, что это не цвет в привычном понимании. Это просто условное название для характеристики кварков, которые мы должны хоть как-то представить.
                    </p>
                    <p className={classes.text}>Каждый из 6 ароматов кварков может быть либо зеленым, либо синим, либо красным, обязательно одного из 3х цветов.
                    </p>
                    <ul className={classes.quarksList}>
                        <li className={classes.quarkBlock}>
                            <div style={{ backgroundColor: "#40d5d5" }} className={classes.quark}>u</div>
                            <p className={classes.quarkDesc}>- верхний антикварк</p>
                        </li>
                        <li className={classes.quarkBlock}>
                            <div style={{ backgroundColor: "#d540d5" }} className={classes.quark}>u</div>
                            <p className={classes.quarkDesc}>- верхний антикварк</p>
                        </li>
                        <li className={classes.quarkBlock}>
                            <div style={{ backgroundColor: "#d5d540" }} className={classes.quark}>u</div>
                            <p className={classes.quarkDesc}>- верхний антикварк</p>
                        </li>
                    </ul>
                    <p className={classes.text}>Так же каждый аромат кварка имеет своего партнера-антикварка. Их электрические и цветовые заряды противоположны. Соответветственно электрический заряд +2/3 становится -2/3, а красный цвет становится антикрасным.</p>
                    <div className={classes.protonImg}></div>
                    <p className={classes.text}>Кварк подавляет случайные флуктуации глюонного поля, поэтому рядом с ним пространство действительно пустое в полном смысле этого слова. Эта способность есть не только у кварков,
                        но и любых других реальных частиц.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Explanation