"use client"
import {useRobot} from "@/context/RobotContext"
const SIDEBAR_SECTIONS=[
    {
        title:"Navigazione",
        items: ["Home","Nuovo ordine","Ricerca ordini","Storico"]
    },
    {
        title:"Gestione",
        items:["Magazzino","Fornitori","Clienti"]
    }
]

const STEP_MAP: Record<string, string>={
  "Home": "nav-home",
  "Nuovo ordine": "nav-nuovo-ordine",
  "Ricerca ordini": "nav-ricerca-ordini",
}

const ACTIVE_STEPS=["nav-ricerca-ordini", "filter-date-from", "filter-date-to", "filter-submit", "scan-row", "paginate", "export"]



export default function Sidebar(){
    const {robotState} = useRobot()
    const ricercaAttiva= ACTIVE_STEPS.includes(robotState.currentStep)||robotState.status==="done"



    return(
        <div style={{
            width:"160px",
            borderRight:"1px solid #c8d4e0",
            backgroundColor:"#f7f8fa",
            flexShrink:0
            }}>

            {
                SIDEBAR_SECTIONS.map(
                    (section)=>(
                        <div key={section.title}>
                            <div style={{
                                fontSize:"10px",
                                color:"#aaa",
                                padding:"8px 12px 4px",
                                textTransform:"uppercase",
                                letterSpacing:"0.5px"
                                }}>
                                {section.title}
                            </div>

                            {
                                section.items.map((item) => {
                                    const isRobotActive = STEP_MAP[item] === robotState.currentStep;
                                    const isSelected = item === "Ricerca ordini" && ricercaAttiva;
                                    return (
                                        <div
                                        key={item}
                                        id={`sidebar-${item.toLowerCase().replace(/\s+/g, "-")}`}
                                        className={isRobotActive ? "robot-active" : ""}
                                        style={{
                                            padding: "7px 12px",
                                            fontSize: "12px",
                                            color: isSelected ? "#1a3a5c" : "#666",
                                            fontWeight: isSelected ? "500" : "400",
                                            borderLeft: isSelected ? "2px solid #1a3a5c" : "2px solid transparent",
                                            backgroundColor: isSelected ? "#e8eef5" : "transparent",
                                            cursor: "default",
                                        }}
                                        >
                                        {item}
                                        </div>
                                    );
                                    }
                                )
                            }
                        </div>
                    )
                )
            }
        </div>
    )
}