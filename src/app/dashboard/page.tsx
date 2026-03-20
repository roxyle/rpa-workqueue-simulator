import Topbar from '@/components/dashboard/Topbar'
import TabBar from '@/components/dashboard/TabBar'
import Sidebar from '@/components/dashboard/Sidebar'
import FilterArea from '@/components/dashboard/FilterArea'
import OrderTable from '@/components/dashboard/OrderTable'
import { ORDERS_PAGE_1 } from '@/constants/orders'
import Pagination from '@/components/dashboard/Pagination'
import FooterLog from '@/components/dashboard/FooterLog'


export default function DashboardPage(){
    return(
        <div style={{
            minHeight:"100vh",
            display:"flex",
            flexDirection:"column",
            backgroundColor:"#e8edf2"
            }}>
                <Topbar/>
                <TabBar/>

                <div style={{display:"flex", flex:1}}>
                    <Sidebar/>
                    
                    <main style={{flex:1, padding:"16px"}}>
                        <div style={{
                            fontSize:"13px",
                            fontWeight:"500",
                            color:"#333",
                            marginBottom:"10px"
                            }}>
                            Ricerca ordini
                        </div>
                        <FilterArea/>
                        
                        <OrderTable orders={ORDERS_PAGE_1} currentPage={1} totalPages={2}/>
                        <Pagination currentPage={1} totalPages={2}/>
                    </main>
                </div>

                <FooterLog log={[]}/>
        </div>
    )
}