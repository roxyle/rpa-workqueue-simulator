'use client'
import { useRobot } from "@/context/RobotContext"
import { useRef, useEffect } from "react"
import {Order} from '@/types/order'




function generateCSV(orders:Order[]): string{
    const headers=[
        "ID Ordine",
        "Data Ordine",
        "Data Consegna Prevista",
        "Cliente",
        "Stato Ordine",
        "Disponibilita Magazzino",
        "Note"
    ]

    const rows=orders.map(
        (order)=>[
            order.idOrdine,
            order.dataOrdine,
            order.dataConsegnaPrevista,
            order.cliente,
            order.statoOrdine,
            order.disponibilitaMagazzino ?? "",
            order.note
        ]
    )

    return [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell}"`).join(","))
    .join("\n")
}


function downloadCSV(orders: Order[], filename: string) {
    const csv = generateCSV(orders);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename
    link.click();
    URL.revokeObjectURL(url);
}




export default function FooterLog(){
    const { robotState, extractedOrders } = useRobot()
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    },[robotState.log])



    const canExport = (robotState.status === "done" || robotState.status === "stopped") && extractedOrders.length > 0
    const filename = robotState.status === "stopped" ? "ordini_parziali.csv" : "ordini_da_evadere.csv"



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

                    <button id="export-csv" className={`${robotState.currentStep === "export" ? "robot-active" : ""} ${canExport ? "cursor-pointer" : ""}`}
                        onClick={canExport ? () => downloadCSV(extractedOrders, filename) : undefined}
                        style={{
                        padding:"3px 12px",
                        fontSize:"11px",
                        borderRadius:"4px",
                        border:"1px solid #3b6d11",
                        backgroundColor: canExport ? "#1e3a1e" : "#2a2a2a",
                        color: canExport ? "#4ec94e" : "#555",
                        cursor: canExport ? "pointer" : "default",
                        fontWeight:"500"
                        
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
                            <div key={index} style={{
                                    fontSize: "11px",
                                    color: entry.includes("interrotta") ? "#e24b4a" : "#4ec94e",
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