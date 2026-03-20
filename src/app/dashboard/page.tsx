import Topbar from '@/components/dashboard/Topbar'
import TabBar from '@/components/dashboard/TabBar'
import Sidebar from '@/components/dashboard/Sidebar'


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
                        
                    </main>
                </div>
        </div>
    )
}