'use client'
import {useState} from 'react'
// import {useRouter} from 'next/navigation'
// import { ROBOT_CREDENTIALS } from '@/constants/robot'


export default function LoginForm(){
    // const router=useRouter()
    const [username, setUserName]=useState("")
    const [password, setPassword]=useState("")

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
                <input id='login-username' type='text' value={username}
                    onChange={(elem)=>setUserName(elem.target.value)}
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
                <input id='login-password' type='password' value={password}
                    onChange={(elem)=>setPassword(elem.target.value)}
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
                marginBottom:"12px"
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

                <button id='login-submit'
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

        </div>
    )
}