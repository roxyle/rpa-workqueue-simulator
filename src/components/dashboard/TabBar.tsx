export default function TabBar(){
    const tabs=["Dashboard","Ordini attivi","Ricerca ordini","Report","Impostazioni"]
    
    
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
                    (tab)=>(
                        <div key={tab} style={{
                            padding:"8px 16px",
                            fontSize:"12px",
                            color:tab==="Ricerca ordini"?"#1a3a5c":"#888",
                            fontWeight:tab==="Ricerca ordini"?"500":"400",
                            borderRight:"1px solid #c8d4e0",
                            borderBottom:tab==="Ricerca ordini"?"2px solid #1a3a5c":"none",
                            backgroundColor:tab==="Ricerca ordini"?"#ffffff":"transparent",
                            cursor:"default"
                            }}>
                                {tab}
                        </div>
                    )
                )
            }
        </div>
    )
}