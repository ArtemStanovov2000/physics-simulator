import { createUseStyles } from "react-jss";
import { image } from "../../assets/image/image";
import Button from "../../shared/Button";
import Tides from "./Tides";
import ArrowBackButton from "../../shared/ButtonIcons/ArrowBackButton";
import AttentionBlock from "../../shared/Attention/Attention/AttentionBlock";
import { Route, Routes, Link } from "react-router";
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
        marginBottom: "20px"
    },
    text: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Gilroy",
        fontSize: "24px",
        margin: "20px 0 10px 0",
        textIndent: "35px",
        lineHeight: "30px",
        textAlign: "justify"
    },
    particleList: {
        margin: "0",
        padding: "0",
        marginTop: "40px",
        marginBottom: "40px",
        display: "grid",
        gap: "20px",
        marginLeft: "60px"
    },
    particleBlock: {
        display: "flex",
        alignItems: "center",
        marginTop: "2px",
        marginBottom: "2px"
    },
    particle: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Gilroy",
        fontSize: "30px",
        backgroundColor: "#ad428f",
        width: "20px",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        marginRight: "15px"
    },
    listItem: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Gilroy",
        fontSize: "24px",
        lineHeight: "34px"
    },
    nuclearImg: {
        marginTop: "50px",
        width: "100%",
        height: "650px",
        backgroundSize: "100% 100%",
        backgroundImage: `url(${image.nuclear})`,
    },
});
const Explanation = () => {
    const classes = useStyles();
    return (<Routes>
            <Route index element={<div className={classes.page}>
                    <div className={classes.buttonBox}>
                        <Link to={"/geography/tides"}><Button isNav={true} icon={<ArrowBackButton />} label={"Вернуться к симуляции"}/></Link>
                    </div>
                    <div className={classes.innerBox}>
                        <div className={classes.textBox}>
                            <h3 className={classes.title}>Определение</h3>
                            <p className={classes.text}>Прили́вные си́лы — силы, возникающие в телах, свободно движущихся в неоднородном силовом поле. Самым известным примером действия приливных сил являются приливы и отливы на Земле, откуда и произошло их название.</p>
                            <AttentionBlock text={"Внимание! Данная симуляция создана с целью демонстрации некоторых физических явлений. Так как точная симуляция гравитационного поля требует большого ресурса вычислений, требуется некоторое упрощение физики для лучшей симуляции."}/>
                        </div>
                        <div className={classes.textBox}>
                            <h3 className={classes.title}>Гравитация луны притягивает точки на главном теле</h3>
                            <p className={classes.text}>Луна создает силу притяжения, которая действует на каждую точку поверхности главного тела. Чем ближе точка к луне, тем сильнее притяжение. Например:</p>
                            <ul style={{ marginTop: "20px" }} className={classes.particleList}>
                                <li className={classes.listItem}>Точка A (ближняя к луне) испытывает максимальную силу притяжения.</li>
                                <li className={classes.listItem}>Точка B (дальняя от луны) испытывает минимальную силу притяжения.</li>
                                <li className={classes.listItem}>Центр главного тела (точка C) испытывает среднюю силу притяжения.</li>
                            </ul>
                            <p className={classes.text}>Это приводит к тому, что точки на поверхности "растягиваются" в направлении луны.</p>
                        </div>
                        <div className={classes.textBox}>
                            <h3 className={classes.title}>Разница в силе притяжения создает деформацию</h3>
                            <p className={classes.text}>Главное тело удерживается своей собственной гравитацией (оно "притягивает само себя"), но из-за разницы в силе притяжения луны на разных сторонах возникает градиент гравитации.
                                Это похоже на то, как если бы вы тянули резиновый шар за одну сторону — он деформируется.</p>
                            <ul style={{ marginTop: "20px" }} className={classes.particleList}>
                                <li className={classes.listItem}>На ближней к луне стороне (точка A):
                                    Сила притяжения луны превышает силу притяжения главного тела. Точки слегка "отрываются" от поверхности, формируя горб в сторону луны.</li>
                                <li className={classes.listItem}>На дальней от луны стороне (точка B):
                                    Здесь сила притяжения луны слабее, чем в центре главного тела. Из-за этого точки "отстают" от общего движения (если тело вращается)
                                    или слабее притягиваются к центру, формируя второй горб (в реальных приливах он тоже есть, но в вашей симуляции, возможно, проявляется только один из-за упрощений).</li>
                            </ul>
                        </div>
                        <div className={classes.textBox}>
                            <h3 className={classes.title}>Почему это выглядит как "горб"?</h3>
                            <ul style={{ marginTop: "20px" }} className={classes.particleList}>
                                <li className={classes.listItem}>Точки на поверхности главного тела находятся в равновесии между двумя силами:
                                    <ol>
                                        <li className={classes.listItem}>Притяжением главного тела (оно стремится удержать их на месте)</li>
                                        <li className={classes.listItem}>Притяжением луны (оно стремится сместить их в сторону луны).</li>
                                    </ol>
                                </li>
                                <li className={classes.listItem}>Чем ближе к луне, тем сильнее "перевешивает" лунная гравитация. В результате точки смещаются, образуя выпуклость — приливной горб.</li>
                            </ul>
                        </div>
                        <div className={classes.textBox}>
                            <h3 className={classes.title}>Аналогия для понимания</h3>
                            <p className={classes.text}>Представьте, что вы держите мяч, а ваш друг тянет его за одну сторону веревкой. Чем ближе веревка к мячу, тем сильнее она тянет его поверхность.
                                Мяч деформируется в сторону веревки — это и есть "приливной горб".</p>
                        </div>
                        <div className={classes.textBox}>
                            <h3 className={classes.title}>Почему горб не всегда строго под луной?</h3>
                            <p className={classes.text}>Если луна вращается вокруг главного тела, система может находиться в орбитальном движении. Это создает дополнительную центробежную силу,
                                которая немного смещает горб вперед по направлению движения (как в реальных океанских приливах на Земле).</p>
                        </div>
                    </div>
                </div>}/>
            <Route path="/tides/*" element={<Tides />}/>
        </Routes>);
};
export default Explanation;
//# sourceMappingURL=Explanation.jsx.map