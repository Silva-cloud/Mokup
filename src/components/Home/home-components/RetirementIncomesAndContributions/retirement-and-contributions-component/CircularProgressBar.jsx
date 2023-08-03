import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
import './CircularProgressBar.css'
const CircularProgressBarComponent = ({label, value}) => {
  return (
    <div className="CircularProgressbarContainer">
            <CircularProgressbar
              value={value}
              text={`${value}%`}
              strokeWidth	= {10}
              styles={buildStyles({
                textColor: "#000",
                pathColor: "#22d6aa",
                trailColor: "#d3f7ee"
              })}
            />
            <div className='smText  textColorPrimary boldFontWeight' >{label}</div>
          </div>
  )
}

export default CircularProgressBarComponent