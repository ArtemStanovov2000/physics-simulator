import { FC } from "react";
import { createUseStyles } from "react-jss";
import { useEffect, useState } from "react";

const useStyles = createUseStyles({
    canvas: {
    },
});

const Canvas: FC = () => {
    const [time, setTime] = useState(0);
    const classes = useStyles()

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time => time + 1);
        }, 30);

        return () => clearInterval(timer);
    }, [time]);

    return (
        <div className={classes.canvas}>
            <canvas/>
        </div>
    )
}

export default Canvas