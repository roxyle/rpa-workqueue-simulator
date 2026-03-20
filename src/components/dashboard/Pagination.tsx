'use client'
import { useRobot } from "@/context/RobotContext"
interface PaginationProps{
    currentPage:number,
    totalPages:number
}


export default function Pagination({currentPage,totalPages}:PaginationProps){
    const { robotState } = useRobot()
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:"8px",
            marginTop:"10px",
            fontSize:"11px",
            color:"#666"
            }}>
                <button id="paginate-prev" style={{
                    border:"1px solid #c8d4e0",
                    borderRadius:"4px",
                    padding:"3px 8px",
                    backgroundColor:"#ffffff",
                    fontSize:"11px",
                    color:"#444",
                    cursor:"default"
                }}>
                    &lt;
                </button>

                <span>
                    Pagina {currentPage} di {totalPages}
                </span>

                <button id="paginate-next" className={robotState.currentStep==="paginate"? "robot-active":""}
                style={{
                    border:"1px solid #c8d4e0",
                    borderRadius:"4px",
                    padding:"3px 8px",
                    backgroundColor:"#ffffff",
                    fontSize:"11px",
                    color:"#444",
                    cursor:"default"
                }}>
                    &gt;
                </button>
        </div>
    )
}