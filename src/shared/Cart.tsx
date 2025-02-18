import { FC } from "react";
import { createUseStyles } from "react-jss";
import { useEffect, useState } from "react";
import { MouseEventHandler } from "react";

const useStyles = createUseStyles({
    '@keyframes vave': {
        from: {
            opacity: 0,
            width: "0px"
        },
        to: {
            opacity: 1,
            width: "400px",
        }
    },
    cart: {
        backgroundColor: "rgba(3, 20, 61, 0.5)",
        animationName: '$vave',
        color: "#ffffff",
        width: "400px",
        height: "300px",
        fontSize: "32px",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Gilroy",
        borderRadius: "7px",
        animation: 'vave 2s',
        textDecoration: "none",
        border: "4px solid rgb(8, 36, 102)",
        "&:hover": {
            cursor: "pointer",
            color: "#d2de52",
            backgroundColor: "rgba(3, 20, 61, 0.4)",
        },
    },
});

type Props = {
    label: string,
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

const Cart: FC<Props> = ({label, onClick}) => {
    const classes = useStyles()

    const [state, setState] = useState("")
    const [count, setCount] = useState(0)
    useEffect(() =>{
        const timer = setInterval(() => {
            if(state.length < label.length) {
                setState(state => state + label[count]);
                setCount(state => state + 1)
            }
        }, 75);

        return () => clearInterval(timer);
    },[state])

    return (
        <a onClick={onClick} className={classes.cart}>{state}</a>
    )
}

export default Cart