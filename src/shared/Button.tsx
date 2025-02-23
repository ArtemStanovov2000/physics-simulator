import { FC, JSX } from "react";
import { createUseStyles } from "react-jss";
import { useEffect, useState } from "react";
import { MouseEventHandler } from "react";

const useStyles = createUseStyles({
    '@keyframes shadow': {
        from: {
            boxShadow: `4px 0px 5px 0px rgba(252, 255, 47, 0.0);`,
        },
        to: {
            boxShadow: `4px 0px 5px 0px rgba(252, 255, 47, 0.2);`,
        }
    },
    '@keyframes noNav': {
        from: {
            boxShadow: `4px 0px 5px 0px rgba(8, 36, 102, 0.0);`,
        },
        to: {
            boxShadow: `4px 0px 5px 0px rgba(66, 122, 253, 0.36);`,
        }
    },
    button: {
        display: "flex",
        alignItems: "center",
        border: "none",
        height: "50px",
        padding: "0",
        backgroundColor: "inherit",
        paddingRight: "15px",
        color: "#ffffff",
        "&:hover": {
            animationName: '$shadow',
            animation: 'shadow 1s',
            cursor: "pointer",
            color: "#d2de52",
        },
    },
    buttonNoNav: {
        display: "flex",
        alignItems: "center",
        border: "none",
        height: "50px",
        padding: "0",
        backgroundColor: "inherit",
        paddingRight: "15px",
        color: "#ffffff",
        "&:hover": {
            animationName: '$noNav',
            animation: 'noNav 1s',
            cursor: "pointer",
            color: "#d2de52",
        },
    },
    icon:{
        width: "50px",
        height: "50px"
    },
    label: {
        color: "inherit",
        fontSize: "20px",
        fontFamily: "Gilroy",
    }
});

type Props = {
    label: string,
    isNav: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>,
    icon?: JSX.Element
}

const Button: FC<Props> = ({ label, isNav, onClick, icon }) => {
    const classes = useStyles()

    const [state, setState] = useState("")
    const [count, setCount] = useState(0)
    const [mouseEnterFlag, setMouseEnterFlag] = useState(false)

    let shadow: string
    isNav === true ? shadow = classes.button : shadow = classes.buttonNoNav

    useEffect(() => {
        const timer = setInterval(() => {
            if (state.length < label.length && mouseEnterFlag === true) {
                setState(state => state + label[count]);
                setCount(count => count + 1)
            } else if (state.length === label.length && mouseEnterFlag === true) {
                setCount(0)
                setState(label);
            } else if (mouseEnterFlag === false && state.length !== 0) {
                setState(state => state.substring(1));
                setCount(count => count - 1)
            } else if (state.length === 0) {
                setState("");
                setCount(0)
            }
        }, 15);
        
        console.log(state, count)
        return () => clearInterval(timer);
    }, [state, mouseEnterFlag, count])


    return (
        <button onMouseLeave={() => setMouseEnterFlag(false)} onMouseEnter={() => setMouseEnterFlag(true)} className={shadow} onClick={onClick}>
            <div className={classes.icon}>
                {icon}
            </div>
            <div className={classes.label}>{state}</div>
        </button>
    )
}

export default Button