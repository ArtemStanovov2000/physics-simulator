import { createUseStyles } from "react-jss";
import { FC } from "react";
import { image } from "../../assets/image/image";
import Button from "../../shared/Button";
import Atom from "./Atom";
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
    particleDesc: {
        color: "rgb(255, 215, 188)",
        fontFamily: "Gilroy",
        fontSize: "20px",
    },
    nuclearImg: {
        marginTop: "50px",
        width: "100%",
        height: "650px",
        backgroundSize: "100% 100%",
        backgroundImage: `url(${image.nuclear})`,
    },
});

const Explanation: FC = () => {
    const classes = useStyles()

    return (
        <Routes>
            <Route index element={
        <div className={classes.page}>
            <div className={classes.buttonBox}>
            <Link to={"/chemistry/atom"}><Button isNav={true} icon={<ArrowBackButton />} label={"Вернуться к симуляции"} /></Link>
            </div>
            <div className={classes.innerBox}>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Определение</h3>
                    <p className={classes.text}>частица вещества микроскопических размеров и массы, наименьшая часть химического элемента, являющаяся носителем его химических свойств.</p>
                    <AttentionBlock text={"Внимание! Данная симуляция создана с целью демонстрации некоторых физических явлений. Так как законы квантовой механики очень сильно отличаются от привычной нам физики, продемонстрировать эти эффекты в полной мере невозможно."} />
                </div>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Составные частицы</h3>
                    <ul style={{ marginTop: "20px" }} className={classes.particleList}>
                        <li className={classes.particleBlock}>
                            <div style={{ backgroundColor: "#d54040" }} className={classes.particle}></div>
                            <p className={classes.particleDesc}>- протон</p>
                        </li>
                        <li className={classes.particleBlock}>
                            <div style={{ backgroundColor: "#606060" }} className={classes.particle}></div>
                            <p className={classes.particleDesc}>- нейтрон</p>
                        </li>
                        <li className={classes.particleBlock}>
                            <div style={{ backgroundColor: "#909090" }} className={classes.particle}></div>
                            <p className={classes.particleDesc}>- электрон</p>
                        </li>
                    </ul>
                    <div className={classes.textBox}>
                        <h3 className={classes.title}>Атомное ядро</h3>
                        <p className={classes.text}>Первое, что необходимо отметить, что вообще в целом данная симуляция скорее показывает саму суть атомного ядра, чем его реальное устройство. На это есть несколько причин:</p>
                        <p className={classes.text}>Во-первых, атом имеет исключительно малые размеры, так что он подчиняется эффектам квантовой механики, что технически невозможно отобразить.</p>
                        <p className={classes.text}>Во-вторых, разные части атома имеют очень разный масштаб, например ядро в 100.000 раз меньше всего атома в целом. Если попробоать его отобразить в масштабе, то ядро будет значительно меньше пикселя.</p>
                        <p className={classes.text}>В-третих, кроме электрона, что протоны, что нейтроны не являются элементарными частицами, и вообще у нас есть отдельная симуляция для протона.</p>
                    </div>
                    <div className={classes.nuclearImg}></div>
                    <p className={classes.text}>Атомные ядра очень малы, диаметр атомного ядра атома золота 10<sup>-14</sup> м. Думаю довольно сложно привести пример достаточный, чтобы описать насколько это мало. Мне лично нравится пример, что в капле воды больше атомов, чем песчинок на земле.</p>
                    <p className={classes.text}>Протоны в ядре имеют положительный электрический заряд, что заставляет их отталкиваться друг от друга, но сильное взаимодейстивие связывает их в 137 раз больше.</p>
                    <p className={classes.text}>Общий электрический заряд атома кратно числу протонов в ядре, а масса пропорциональна количеству протона + количеству нейтронов.</p>
                </div>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Протон</h3>
                    <p className={classes.text}>Самостоятельная, но не фундаментальная частица. Протон это ион водорода - по сути большая часть барионной материи во вселенной. Их настолько много, что они даже были кандитами на объяснение эффектов темной материи.</p>
                    <p className={classes.text}>Протон так же может быть альфа-частицей, если является продуктом альфа-распада других атомных ядер.</p>
                </div>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Нейтрон</h3>
                    <p className={classes.text}>Не самостоятельная и не фундаментальная частица. Содержит те же кварки, что и протон, но в других количествах.</p>
                    <p className={classes.text}>В отличии от протонов сами по себе не встречаются в свободном виде. Это связано с тем, что период полураспада свободных нейтронов всего 15 минут. Т.е каждые 15 минут их количество сокращается примерно в 2 раза.</p>
                    <p className={classes.text}>Он не обладает зарядом и внутри атомного ядра учавствует в сильном и слабом взаимодействии. Технически что протон что нейтрон, что даже электрон как и частица с массой учасвтсвует так же в гравитационном взимодействии,
                        но их масса так мало, что её можно просто не учитывать.
                    </p>
                </div>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Электрон</h3>
                    <p className={classes.text}>И самостоятельная и фундаментальная частица. Обладает отрицательным зарядом. Свободные электроны являются значительной частью высокоэнергетических космических лучей.</p>
                    <p className={classes.text}>Внутри атома составляет лишь очень маленькую часть его массы, так как он в 1836 раз легче протона.</p>
                    <p className={classes.text}>Внутри атомного ядра электроны уравновешивают заряд протонов и делают весь атом в целом нейтральным.</p>
                </div>
                <div className={classes.textBox}>
                    <h3 className={classes.title}>Электронные оболочки</h3>
                    <p className={classes.text}>Область пространства наиболее вероятного нахождения электронов. Есть популярное мнение, что электрон вращается вокруг атомного ядра, как спутник вокруг планеты. На самом деле, электрон как и любой квантовый объект это волна,
                        у которой есть максимум - область максимальной вероятности.
                    </p>
                    <p className={classes.text}>Волновые свойства электрона объясняют, почему на определнной электронной оболочке может быть максимум определенное количество электронов. Это объясняется тем, сколько пиков волн максимума электрона 
                        максимум может поместиться на одной орбитали.
                    </p>
                    <p className={classes.text}>Требуется конечная энергия, чтобы оторвать электрон от атома. Такое событие называется ионизацией. Процесс начинается с элктрона на самой внешней оболочки, теоретически до тех пор пока не будет оторван
                        самый последний электрон с самой первой оболочки.
                    </p>
                </div>
            </div>
        </div >} />
            <Route path="/atom/*" element={<Atom />} />
        </Routes>
    )
}

export default Explanation