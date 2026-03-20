export default function Topbar(){
    return(
        <div style={{
            backgroundColor:"#1a3a5c",
            padding:"8px 16px",
            display:"flex",
            alignItems:"center",
            gap:"12px"
            }}>
            <span style={{
                color:"#ffffff",
                fontSize:"13px",
                fontWeight:"500",
                letterSpacing:"0.5px"
                }}>
                    OrderDesk
            </span>

            <span style={{
                color:"#aac4e0",
                fontSize:"11px"
                }}>
                    utente: bot_rpa_01
            </span>
        </div>
    )
}