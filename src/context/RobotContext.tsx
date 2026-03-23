'use client'

import {createContext,useContext,useState,useCallback,useRef,ReactNode} from "react";
import { RobotState, RobotStepId } from "@/types/robot";
import {Order} from "@/types/order";
import { ORDERS_PAGE_1, ORDERS_PAGE_2 } from "@/constants/orders";
//import {useRouter} from 'next/navigation'

interface RobotContextValue {
    robotState: RobotState
    visibleOrders: Order[]
    tableVisible: boolean
    showLogin: boolean
    startRobot: () => void
    stopRobot: () => void
    resetToLogin: () => void
    loginUsername: string
    loginPassword:string
    filterDateFrom:string
    filterDateTo:string
    showDashboardContent: boolean
    extractedOrders: Order[]
}

const initialRobotState: RobotState = {
    status: "idle",
    currentStep: "idle",
    currentRowIndex: null,
    currentPage: 1,
    extractedCount: 0,
    log: [],
}

const RobotContext = createContext<RobotContextValue | null>(null);





export function RobotProvider({children}: {children: ReactNode}) {
    const [robotState, setRobotState] = useState<RobotState>(initialRobotState)
    const [visibleOrders, setVisibleOrders] = useState<Order[]>([])
    const [tableVisible, setTableVisible] = useState(false)
    const [showLogin, setShowLogin] = useState(true)
    const stopRef = useRef(false)
    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [filterDateFrom, setFilterDateFrom] = useState("")
    const [filterDateTo, setFilterDateTo] = useState("")
    const [showDashboardContent, setShowDashboardContent] = useState(false)
    const [extractedOrders, setExtractedOrders] = useState<Order[]>([]);
    //const router=useRouter()
    //const routerRef=useRef(router)

    
    const resetToLogin=useCallback(
        ()=>{
            console.log("resetToLogin chiamato");
            setRobotState(initialRobotState)
            setVisibleOrders([])
            setTableVisible(false)
            setShowLogin(true)
            setLoginUsername("")
            setLoginPassword("")
            setFilterDateFrom("")
            setFilterDateTo("")
            setShowDashboardContent(false)
            setExtractedOrders([])
        }, [])
    

    const addLog = (message: string) => {
        setRobotState(
            (prev: RobotState) => (
                {
                ...prev,
                log: [...prev.log, message]
                }
            )
        )
    }

    const setStep = (step: RobotStepId) => {
        setRobotState(
            (prev: RobotState) => (
                { 
                    ...prev,
                    currentStep: step
                }
            )
        )
    }

    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

    const stopRobot = useCallback(() => {
        stopRef.current = true
        setRobotState((prev: RobotState) => (
            {
            ...prev,
            status: "stopped",
            currentStep: "idle",
            currentRowIndex: null,
            log: [...prev.log, "log robot > esecuzione interrotta dall'utente"]
            }
        ))
        setVisibleOrders([])
        setTableVisible(false)
    }, [])

    const startRobot = useCallback(async () => {
        stopRef.current = false
        setShowLogin(true)
        setRobotState(initialRobotState)
        setVisibleOrders([])
        setTableVisible(false)

        setRobotState((prev: RobotState) => ({ ...prev, status: "running" }))

        const steps = async () => {
        setStep("login-user")
        addLog("log robot > inserimento username")
        await delay(600)
        setLoginUsername("bot_rpa_01")
        await delay(1200)
        if (stopRef.current) return

        setStep("login-password")
        addLog("log robot > inserimento password")
        await delay(600)
        setLoginPassword("••••••••")
        await delay(1200)
        if (stopRef.current) return

        setStep("login-submit")
        addLog("log robot > click su Accedi")
        await delay(1200)
        if (stopRef.current) return

        //await delay(800)
        //if (stopRef.current) return

        //routerRef.current.push("/dashboard")
        setShowLogin(false)
        await delay(600)
        if (stopRef.current) return



        setStep("nav-home")
        addLog("log robot > sidebar - Home (ignorato)")
        await delay(1200)
        if (stopRef.current) return

        setStep("nav-nuovo-ordine")
        addLog("log robot > sidebar - Nuovo ordine (ignorato)")
        await delay(1200)
        if (stopRef.current) return

        setStep("nav-ricerca-ordini")
        addLog("log robot > sidebar - Ricerca ordini (selezionato)")
        await delay(1200)
        if (stopRef.current) return

        setShowDashboardContent(true)

        setStep("filter-date-from")
        addLog("log robot > inserimento data inizio")
        await delay(600)
        setFilterDateFrom("10/03/2026")
        await delay(800)
        if (stopRef.current) return

        setStep("filter-date-to")
        addLog("log robot > inserimento data fine")
        await delay(600)
        setFilterDateTo("20/03/2026")
        await delay(800)
        if (stopRef.current) return

        setStep("filter-submit")
        addLog("log robot > click su Cerca")
        await delay(1200)
        if (stopRef.current) return

        setVisibleOrders(ORDERS_PAGE_1)
        setTableVisible(true)
        await delay(3000)

        if (stopRef.current) return

        for (let i = 0; i < ORDERS_PAGE_1.length; i++) {
            if (stopRef.current) return
            const order = ORDERS_PAGE_1[i]

            setRobotState((prev: RobotState) => (
                {
                ...prev,
                currentStep: "scan-row",
                currentRowIndex: i
                }
            ))

            addLog(`log robot > scansione ${order.idOrdine} - ${order.cliente}`)
            await delay(1200)
            
            if (stopRef.current) return

            if (order.statoOrdine === "Da evadere" && order.disponibilitaMagazzino === "Disponibile") {
                setExtractedOrders((prev)=>[...prev,order])
                setRobotState((prev: RobotState) => (
                {
                    ...prev,
                    extractedCount: prev.extractedCount + 1
                }
            ))

            addLog(`log robot > ${order.idOrdine} estratto`)
            await delay(600)
            if (stopRef.current) return
            }
        }

        setStep("paginate")
        addLog("log robot > click pagina successiva")
        await delay(1200)

        if (stopRef.current) return

        setVisibleOrders(ORDERS_PAGE_2)
        setRobotState((prev: RobotState) => (
            {
                ...prev,
                currentPage: 2,
                currentRowIndex: null
            }
        ))
        await delay(3000)

        if (stopRef.current) return

        for (let i = 0; i < ORDERS_PAGE_2.length; i++) {
            if (stopRef.current) return

            const order = ORDERS_PAGE_2[i]
            setRobotState((prev: RobotState) => (
                {
                ...prev,
                currentStep: "scan-row",
                currentRowIndex: i
                }
            ))

            addLog(`log robot > scansione ${order.idOrdine} - ${order.cliente}`)
            await delay(1200)
            if (stopRef.current) return

            if (order.statoOrdine === "Da evadere" && order.disponibilitaMagazzino === "Disponibile") {
            setRobotState((prev: RobotState) => (
                {
                    ...prev,
                    extractedCount: prev.extractedCount + 1
                }
            ))

            addLog(`log robot > ${order.idOrdine} estratto`)
            await delay(600)

            if (stopRef.current) return
            }
        }

        setStep("export")
        addLog("log robot > export CSV completato")
        await delay(1200)
        if (stopRef.current) return

        setRobotState((prev: RobotState) => (
            {
                ...prev,
                status: "done",
                currentStep: "idle",
                currentRowIndex: null
            }
        ))
        }

        await steps()
    }, [])

    return (
        <RobotContext.Provider value={{ robotState, visibleOrders, tableVisible, showLogin, loginUsername, loginPassword, 
        showDashboardContent, filterDateFrom, filterDateTo, startRobot, stopRobot, extractedOrders, resetToLogin }}>
        {children}
        </RobotContext.Provider>
    )
    }







export function useRobot() {
    const context = useContext(RobotContext)

    if (!context) {
        throw new Error("useRobot deve essere usato dentro RobotProvider")
    }
    
    return context
}