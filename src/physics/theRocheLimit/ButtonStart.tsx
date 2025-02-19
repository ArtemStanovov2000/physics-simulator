import { FC } from "react"
import { createUseStyles } from "react-jss"
import { MouseEventHandler } from "react";

const useStyles = createUseStyles({
    button: {
        position: "relative",
        width: "80px",
        height: "80px",
        border: "none",
        padding: "0",
        backgroundColor: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            cursor: "pointer",
        },
    },
    svg: {
        width: "76px",
        height: "76px",
        "&:hover": {
            width: "80px",
            height: "80px",
        },
    }
});

type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const ButtonStart: FC<Props> = ({ onClick }) => {
    const classes = useStyles()

    return (
        <button onClick={onClick} className={classes.button}>
            
        </button>
    )
}

export default ButtonStart