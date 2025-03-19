import MainPage from "./MainPage"
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import Atom from "./chemistry/Atom/Atom";
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
      {storeWindow === null ? <Atom/> : storeWindow}
    </div>
  )
}

export default App
