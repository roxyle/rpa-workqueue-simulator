'use client'

import Topbar from "@/components/dashboard/Topbar"
import TabBar from "@/components/dashboard/TabBar"
import Sidebar from "@/components/dashboard/Sidebar"
import FilterArea from "@/components/dashboard/FilterArea"
import OrderTable from "@/components/dashboard/OrderTable"
import Pagination from "@/components/dashboard/Pagination"
import FooterLog from "@/components/dashboard/FooterLog"
import {useRobot} from "@/context/RobotContext"
import LoginForm from "@/components/login/LoginForm"
import MonitorPanel from "@/components/dashboard/MonitorPanel"




export default function DashboardPage() {
const {robotState, visibleOrders, tableVisible, showLogin, showDashboardContent, startRobot, stopRobot, resetToLogin} = useRobot();




return (
    <div
    style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e8edf2",
        position:"relative"
    }}>

        {
            showLogin&&(
                <div style={{
                    position:"absolute",
                    inset:0,
                    backgroundColor:"#e8edf2",
                    display:"flex",
                    alignItems: "center",
                    justifyContent:"center",
                    zIndex:10,
                    overflow: "visible"
                    }}>
                        <LoginForm/>
                </div>
            )
        }
    <Topbar />
    <TabBar />
    <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "16px" }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px"
                }}>
                    
                    {showDashboardContent && (<div
                        style={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#333",
                        //marginBottom: "10px",
                        }}
                    >
                        Ricerca ordini
                    </div>)}

                    <button onClick={robotState.status==='running'?stopRobot
                        :robotState.status==="done"||robotState.status==="stopped"? resetToLogin
                            :startRobot  
                        }
                        style={{
                            padding:"5px 16px",
                            fontSize: "11px",
                            borderRadius: "4px",
                            border: robotState.status === "running" ? "1px solid #a32d2d" : "1px solid #1a3a5c",
                            backgroundColor: robotState.status === "running" ?"#fcebeb" : "#1a3a5c",
                            color: robotState.status === "running" ? "#a32d2d" : "#ffffff",
                            cursor: "pointer",
                            fontWeight: "500"
                        }}>
                            {robotState.status === "idle" && "Avvia robot"}
                            {robotState.status === "running" && "Stop robot"}
                            {(robotState.status === "done" || robotState.status==="stopped")&& "Torna al login per rieseguire"}
                    </button>
                </div>

                {showDashboardContent && <FilterArea />}

                {showDashboardContent && tableVisible && (
                    <>
                    <OrderTable
                        orders={visibleOrders}
                        currentPage={robotState.currentPage}
                        totalPages={2}
                    />
                    <Pagination
                        currentPage={robotState.currentPage}
                        totalPages={2}
                    />
                    </>
                )}
        </main>
        <MonitorPanel />
    </div>
    <FooterLog />
    </div>
)
}