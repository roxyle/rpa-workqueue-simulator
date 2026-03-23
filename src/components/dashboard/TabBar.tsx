'use client'
import {useRobot} from '@/context/RobotContext'



const ACTIVE_STEPS=["nav-ricerca-ordini", "filter-date-from", "filter-date-to", "filter-submit", "scan-row", "paginate", "export"]



export default function TabBar(){
    const {robotState}=useRobot()

    const tabs=["Dashboard","Ordini attivi","Ricerca ordini","Report","Impostazioni"]
    
    const ricercaAttiva= ACTIVE_STEPS.includes(robotState.currentStep)||robotState.status==="done"
    
    return(
        <div style={{
            display:"flex",
            backgroundColor:"#f0f4f8",
            borderBottom:"1px solid #c8d4e0",
            //paddingLeft:"68.5px"
            paddingLeft:"160px"
            }}>

            {
                tabs.map(
                    (tab)=>{
                        const isActive=tab==="Ricerca ordini"&&ricercaAttiva
                        return (
                        <div key={tab} style={{
                            padding:"8px 16px",
                            fontSize:"12px",
                            color:isActive?"#1a3a5c":"#888",
                            fontWeight:isActive?"500":"400",
                            borderRight:"1px solid #c8d4e0",
                            borderBottom:isActive?"2px solid #1a3a5c":"none",
                            backgroundColor:isActive?"#ffffff":"transparent",
                            cursor:"default"
                            }}>
                                {tab}
                        </div>
                        )
                    }
                )
            }
        </div>
    )
}