import MainPage from "./MainPage"
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import OxygenIon from "./chemistry/Playground/OxygenIon";
import "./index.css"

const useStyles = createUseStyles({
  app: {
    width: "100%",
    height: "100%",
  }
});

function App() {
  const classes = useStyles()
  const storeWindow = useSelector((store: any) => store.window.window)

  return (
    <div className={classes.app}>
      {storeWindow === null ? <OxygenIon/> : storeWindow}
    </div>
  )
}

export default App
