'use client'
import { useRobot } from "@/context/RobotContext"




export default function FilterArea(){
    const { robotState } = useRobot()
    return(
        <div style={{
            backgroundColor:"#f7f8fa",
            border:"1px solid #c8d4e0",
            borderRadius:"4px",
            padding:"12px",
            marginBottom:"14px",
            display:"flex",
            alignItems:"center",
            gap:"12px",
            flexWrap:"wrap"
            }}>
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"6px"
                    }}>
                        <label style={{fontSize:"11px", color:"#666"}}>
                            Data ordine dal
                        </label>

                        <input id="filter-date-from" type="text" readOnly
                            value={robotState.currentStep === "filter-date-from" || 
                            robotState.currentStep === "filter-date-to" || 
                            robotState.currentStep === "filter-submit" ||
                            robotState.currentStep === "scan-row" ||
                            robotState.currentStep === "paginate" ||
                            robotState.currentStep === "export" ? "10/03/2026" : ""}
                            className={robotState.currentStep === "filter-date-from" ? "robot-active" : ""}
                            style={{
                                border:"1px solid #c8d4e0",
                                borderRadius:"4px",
                                padding:"4px 8px",
                                fontSize:"11px",
                                backgroundColor:"#ffffff",
                                color:"#333",
                                width:"88px"
                            }}
                        />
                </div>


                <div style={{display:"flex", alignItems:"center", gap:"6px"}}>
                    <label style={{fontSize:"11px", color:"#666"}}>
                        al
                    </label>

                    <input id="filter-date-to" type="text" readOnly
                        value={robotState.currentStep === "filter-date-to" ||
                        robotState.currentStep === "filter-submit" ||
                        robotState.currentStep === "scan-row" ||
                        robotState.currentStep === "paginate" ||
                        robotState.currentStep === "export" ? "20/03/2026" : ""}
                        className={robotState.currentStep === "filter-date-to" ? "robot-active" : ""}
                        style={{
                                border:"1px solid #c8d4e0",
                                borderRadius:"4px",
                                padding:"4px 8px",
                                fontSize:"11px",
                                backgroundColor:"#ffffff",
                                color:"#333",
                                width:"88px"
                            }}
                        />
                </div>

                <button style={{
                    padding:"5px 14px",
                    fontSize:"11px",
                    borderRadius:"4px",
                    border:"1px solid #c8d4e0",
                    backgroundColor:"#ffffff",
                    color:"#444",
                    cursor:"default"
                }}>
                    Pulisci
                </button>


                <button id="filter-submit" className={robotState.currentStep === "filter-submit" ? "robot-active" : ""}
                    style={{
                    padding:"5px 14px",
                    fontSize:"11px",
                    borderRadius:"4px",
                    border:"1px solid #1a3a5c",
                    backgroundColor:"#1a3a5c",
                    color:"#ffffff",
                    cursor:"default"
                    }}>
                    Cerca
                </button>
        </div>
    )
}