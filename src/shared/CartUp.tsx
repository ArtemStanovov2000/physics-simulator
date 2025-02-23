import { FC } from "react";
import { createUseStyles } from "react-jss";
import { useEffect, useState } from "react";
import { MouseEventHandler } from "react";

const useStyles = createUseStyles({
    cart: {
        backgroundColor: "rgba(28, 61, 3, 0.5)",
        color: "#ffffff",
        width: "400px",
        height: "300px",
        fontSize: "32px",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        opacity: `${1}`,
        justifyContent: "center",
        fontFamily: "Gilroy",
        borderRadius: "7px",
        textDecoration: "none",
        border: "4px solid rgb(49, 102, 8)",
        "&:hover": {
            cursor: "pointer",
            color: "#d2de52",
            backgroundColor: "rgba(28, 61, 3, 0.4)",
        },
    }
});

type Props = {
    label: string,
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

const CartUp: FC<Props> = ({label, onClick}) => {
    const classes = useStyles()

    return (
        <a onClick={onClick} className={classes.cart}>{label}</a>
    )
}

export default CartUp