'use client'
import { useRobot } from "@/context/RobotContext"
import { useRef, useEffect } from "react"



export default function FooterLog(){
    const { robotState } = useRobot()
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    },[robotState.log])


    return(
        <div style={{
            borderTop:"1px solid #c8d4e0",
            display:"flex",
            flexDirection: "column",
            height: "180px",
            flexShrink: 0,
            backgroundColor:"#1e1e1e"
            }}>


                <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "4px 12px",
                    borderBottom: "1px solid #333",
                    backgroundColor: "#252526",
                    }}
                >
                    <span style={{fontSize: "11px", color: "#aaa", fontFamily: "monospace"}}>
                        ROBOT LOG
                    </span>

                    <button id="export-csv" className={robotState.currentStep==="export"? "robot-active" : ""}
                        style={{
                        padding:"3px 12px",
                        fontSize:"11px",
                        borderRadius:"4px",
                        border:"1px solid #3b6d11",
                        backgroundColor:"#1e3a1e",
                        color:"#4ec94e",
                        fontWeight:"500",
                        cursor:"default"
                    }}>
                        Export CSV
                    </button>
            </div>

            <div ref={scrollRef} style={{flex: 1, overflowY: "auto", padding: "8px 80px"}}>
                {robotState.log.length === 0 ? (
                    <div
                        style={{
                        fontSize: "11px",
                        color: "#4ec94e",
                        fontFamily: "monospace",
                        }}
                    >
                        C:\OrderDesk&gt; in attesa di avvio robot...
                    </div>
                ) : (
                        robotState.log.map((entry, index) => (
                            <div
                            key={index}
                            style={{
                                fontSize: "11px",
                                color: "#4ec94e",
                                fontFamily: "monospace",
                                lineHeight: "1.6",
                            }}
                            >
                            {entry}
                            </div>
                        ))
                    )}
            </div>
        </div>
    )
}