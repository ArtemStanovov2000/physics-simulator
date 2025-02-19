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
    onClick: MouseEventHandler<HTMLButtonElement>
}

const ButtonUp: FC<Props> = ({ onClick }) => {
    const classes = useStyles()

    return (
        <button onClick={onClick} className={classes.button}>
            <svg className={classes.svg} viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="122" height="122" rx="12" stroke="#155b8c" strokeWidth="4" />
                <path d="M60.1752 31.9707C61.7592 29.6025 65.2408 29.6025 66.8248 31.9707L100.473 82.2761C102.251 84.9339 100.346 88.5 97.1484 88.5H29.8516C26.6541 88.5 24.7491 84.9339 26.5268 82.2761L60.1752 31.9707Z" fill="#155b8c" />
            </svg>
        </button>
    )
}

export default ButtonUp