import MainPage from "./MainPage"
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import TheRocheLimit from "./physics/theRocheLimit/TheRocheLimit";
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
      {storeWindow === null ? <TheRocheLimit/> : storeWindow}
    </div>
  )
}

export default App
