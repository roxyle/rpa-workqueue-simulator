'use client'
import { useRobot } from '@/context/RobotContext'
// import {useState} from 'react'
// import {useRouter} from 'next/navigation'
// import { ROBOT_CREDENTIALS } from '@/constants/robot'


export default function LoginForm(){
    // const router=useRouter()
    // const [username, setUserName]=useState("")
    // const [password, setPassword]=useState("")
    const {startRobot,robotState,loginUsername, loginPassword}=useRobot()

    return(
        <div style={{
            backgroundColor:"#ffffff",
            border:"1px solid #c8d4e0",
            padding:"40px 48px",
            width:"380px"
            }}>

            <div style={{
                textAlign:"center",
                marginBottom:"28px"
                }}>

                <div style={{
                    fontSize:"22px",
                    fontWeight:"600",
                    color:"#1a3a5c",
                    marginBottom:"4px"
                    }}>
                        OrderDesk
                </div>

                <div style={{fontSize:"12px", color:"#888"}}>
                    WorkQueue Manager v.2
                </div>
            </div>

            <div style={{marginBottom:"16px"}}>
                <label style={{
                    display:"block",
                    fontSize:"12px",
                    color:"#444",
                    marginBottom:"6px"
                    }}>
                        Login:
                </label>
                <input id='login-username' type='text' value={loginUsername} readOnly
                    className={robotState.currentStep === "login-user" ? "robot-active" : ""}
                    //onChange={(elem)=>setUserName(elem.target.value)}
                    style={{
                        width:"100%",
                        border:"1px solid #c8d4e0",
                        padding: "6px 8px",
                        fontSize:"13px",
                        outline:"none"
                    }}
                />
            </div>

            <div style={{marginBottom:"24px"}}>
                <label style={{
                    display:"block",
                    fontSize:"12px",
                    color:"#444",
                    marginBottom:"6px"
                    }}>
                    Password:
                </label>
                <input id='login-password' type='password' value={loginPassword} readOnly
                    className={robotState.currentStep === "login-password" ? "robot-active" : ""}
                    //onChange={(elem)=>setPassword(elem.target.value)}
                    style={{
                        width:"100%",
                        border:"1px solid #c8d4e0",
                        padding:"6px 8px",
                        fontSize:"13px",
                        outline:"none"
                    }}
                />
            </div>

            <div style={{
                display:"flex",
                gap:"8px",
                justifyContent:"center",
                marginBottom:"24px"
                }}>
                <button style={{
                    padding:"6px 18px",
                    fontSize:"12px",
                    border:"1px solid #c8d4e0",
                    backgroundColor:"#f0f4f8",
                    color:"#444",
                    cursor:"default"
                    }}>
                        Cambia password
                </button>

                <button id='login-submit' className={robotState.currentStep === "login-submit" ? "robot-active" : ""}
                    style={{
                        padding:"6px 18px",
                        fontSize:"12px",
                        border:"1px solid #1a3a5c",
                        backgroundColor:"#1a3a5c",
                        color:"#ffffff",
                        cursor:"default"
                    }}>
                        Accedi
                </button>
            </div>

            <div style={{ borderTop: "1px solid #e8edf2", paddingTop: "8px", textAlign: "center" }}>
                <button onClick={startRobot}
                    style={{
                        padding: "7px 24px",
                        fontSize: "12px",
                        borderRadius: "4px",
                        border: "1px solid #1a3a5c",
                        backgroundColor: "#19be8c",
                        color: "#ffffff",
                        cursor: "pointer",
                        fontWeight: "500",
                    }}>
                        Avvia robot
                </button>


                <div style={{ borderTop: "1px solid #e8edf2", paddingTop: "16px", marginTop: "8px", textAlign: "center" }}>
                    <div style={{ fontSize: "11px", color: "#888", lineHeight: "1.6" }}>
                        <span style={{ color: "#f0a500", fontWeight: "500"}}>Attenzione⚠️Si sconsiglia di visionare la demo su mobile.</span>
                        {" "}Questa demo è ottimizzata per desktop in quanto simula un processo RPA avviato su 
                        gestionali enterprise, i quali solitamente non sono progettati per dispositivi mobili.
                    </div>
                </div>
            </div>

        </div>
    )
}