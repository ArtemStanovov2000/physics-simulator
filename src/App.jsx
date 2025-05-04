import MainPage from "./MainPage";
import { createUseStyles } from "react-jss";
import "./index.css";
const useStyles = createUseStyles({
    app: {
        width: "100%",
        height: "100%",
    }
});
function App() {
    const classes = useStyles();
    return (<div className={classes.app}>
      <MainPage />
    </div>);
}
export default App;
//# sourceMappingURL=App.jsx.map