'use client'
import { useRobot } from "@/context/RobotContext"



export default function FooterLog(){
    const { robotState } = useRobot()
    return(
        <div style={{
            borderTop:"1px solid #c8d4e0",
            padding:"10px 16px",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            backgroundColor:"#f7f8fa"
            }}>
                <div style={{flex:1, fontSize:"10px", color:"#666", fontFamily:"monospace"}}>
                    {robotState.log.length===0?
                    "log robot > in attesa ..."
                    : robotState.log[robotState.log.length-1]
                    }
                </div>

            <button id="export-csv" className={robotState.currentStep==="export"? "robot-active" : ""}
                style={{
                padding:"5px 14px",
                fontSize:"11px",
                borderRadius:"4px",
                border:"1px solid #3b6d11",
                backgroundColor:"#eaf3de",
                color:"#3b6d11",
                fontWeight:"500",
                cursor:"default"
            }}>
                Export CSV
            </button>
        </div>
    )
}