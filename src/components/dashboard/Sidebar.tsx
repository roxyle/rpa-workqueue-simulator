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


export default function Sidebar(){
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
                                section.items.map(
                                    (item)=>(
                                        <div key={item} id={`sidebar-${item.toLowerCase().replace(/\s+/g,"-")}`}
                                            style={{
                                                padding:"7px 12px",
                                                fontSize:"12px",
                                                color:item==="Ricerca ordini"?"#1a3a5c":"#666",
                                                fontWeight:item==="Ricerca ordini"?"500":"400",
                                                borderLeft:item==="Ricerca ordini"?"2px solid #1a3a5c":"2px solid transparent",
                                                backgroundColor:item==="Ricerca ordini"?"#e8eef5":"transparent",
                                                cursor:"default"
                                            }}>
                                            {item}
                                        </div>
                                    )
                                )
                            }
                        </div>
                    )
                )
            }
        </div>
    )
}