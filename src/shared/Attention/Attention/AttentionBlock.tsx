import { FC } from "react"
import { createUseStyles } from "react-jss";
import AttentionSign from "./AttentionSign";

const useStyles = createUseStyles({
	block: {
        border: "2px #404040 solid",
        padding: "30px",
        boxShadow: `0px 0px 13px 4px rgba(60, 60, 60, 0.67)`,
        marginTop: "50px",
        marginBottom: "50px"
	},
    innerBlock: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "30px",
    },
    imgBlock: {
        width: "100px",
        height: "100px",
        display: "flex",
        flexShrink: "0",
    },
    text: {
        color: "rgb(255, 255, 255)",
        fontFamily: "gilroy",
        fontSize: "20px",
        margin: "0",
        textIndent: "35px",
        lineHeight: "25px",
    }
});

type Props = {
    text: string
}

const AttentionBlock: FC<Props> = ({text}) => {
	const classes = useStyles()

	return (
		<div className={classes.block}>
            <div className={classes.innerBlock}>
                <div className={classes.imgBlock}><AttentionSign/></div>
                <p className={classes.text}>{text}</p>
            </div>
        </div>
	)
}

export default AttentionBlock