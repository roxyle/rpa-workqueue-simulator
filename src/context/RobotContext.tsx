"use client"

import {createContext,useContext,useState,useCallback,ReactNode,} from "react";
import { RobotState, RobotStepId } from "@/types/robot";
import { Order } from "@/types/order";
import { ORDERS_PAGE_1, ORDERS_PAGE_2 } from "@/constants/orders";

interface RobotContextValue {
robotState: RobotState;
visibleOrders: Order[];
tableVisible: boolean;
startRobot: () => void;
}

const initialRobotState: RobotState = {
status: "idle",
currentStep: "idle",
currentRowIndex: null,
currentPage: 1,
extractedCount: 0,
log: [],
};

const RobotContext = createContext<RobotContextValue | null>(null);

export function RobotProvider({ children }: { children: ReactNode }) {
const [robotState, setRobotState] = useState<RobotState>(initialRobotState);
const [visibleOrders, setVisibleOrders] = useState<Order[]>([]);
const [tableVisible, setTableVisible] = useState(false);

const addLog = (message: string) => {
    setRobotState((prev) => ({
    ...prev,
    log: [...prev.log, message],
    }));
};

const setStep = (step: RobotStepId) => {
    setRobotState((prev) => ({ ...prev, currentStep: step }));
};

const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

const startRobot = useCallback(async () => {
    setRobotState(initialRobotState);
    setVisibleOrders([]);
    setTableVisible(false);

    setRobotState((prev) => ({ ...prev, status: "running" }));

    // login
    setStep("login-user");
    addLog("log robot > inserimento username");
    await delay(1200);

    setStep("login-password");
    addLog("log robot > inserimento password");
    await delay(1200);

    setStep("login-submit");
    addLog("log robot > click su Accedi");
    await delay(1200);

    // navigazione sidebar
    setStep("nav-home");
    addLog("log robot > sidebar - Home (ignorato)");
    await delay(1200);

    setStep("nav-nuovo-ordine");
    addLog("log robot > sidebar - Nuovo ordine (ignorato)");
    await delay(1200);

    setStep("nav-ricerca-ordini");
    addLog("log robot > sidebar - Ricerca ordini (selezionato)");
    await delay(1200);

    // filtri
    setStep("filter-date-from");
    addLog("log robot > inserimento data inizio");
    await delay(1200);

    setStep("filter-date-to");
    addLog("log robot > inserimento data fine");
    await delay(1200);

    setStep("filter-submit");
    addLog("log robot > click su Cerca");
    await delay(1200);

    // tabella
    setVisibleOrders(ORDERS_PAGE_1);
    setTableVisible(true);
    await delay(3000);

    // scansione pagina 1
    for (let i = 0; i < ORDERS_PAGE_1.length; i++) {
    const order = ORDERS_PAGE_1[i];
    setRobotState((prev) => ({ ...prev, currentStep: "scan-row", currentRowIndex: i }));
    addLog(`log robot > scansione ${order.idOrdine} - ${order.cliente}`);
    await delay(1200);

    if (order.statoOrdine === "Da evadere" && order.disponibilitaMagazzino === "Disponibile") {
        setRobotState((prev) => ({ ...prev, extractedCount: prev.extractedCount + 1 }));
        addLog(`log robot > ${order.idOrdine} estratto`);
        await delay(600);
    }
    }

    // paginazione
    setStep("paginate");
    addLog("log robot > click pagina successiva");
    await delay(1200);

    setVisibleOrders(ORDERS_PAGE_2);
    setRobotState((prev) => ({ ...prev, currentPage: 2, currentRowIndex: null }));
    await delay(3000);

    // scansione pagina 2
    for (let i = 0; i < ORDERS_PAGE_2.length; i++) {
    const order = ORDERS_PAGE_2[i];
    setRobotState((prev) => ({ ...prev, currentStep: "scan-row", currentRowIndex: i }));
    addLog(`log robot > scansione ${order.idOrdine} - ${order.cliente}`);
    await delay(1200);

    if (order.statoOrdine === "Da evadere" && order.disponibilitaMagazzino === "Disponibile") {
        setRobotState((prev) => ({ ...prev, extractedCount: prev.extractedCount + 1 }));
        addLog(`log robot > ${order.idOrdine} estratto`);
        await delay(600);
    }
    }

    // export
    setStep("export");
    addLog("log robot > export CSV completato");
    await delay(1200);

    setRobotState((prev) => ({ ...prev, status: "done", currentRowIndex: null }));
}, []);

return (
    <RobotContext.Provider
    value={{ robotState, visibleOrders, tableVisible, startRobot }}
    >
    {children}
    </RobotContext.Provider>
);
}

export function useRobot() {
const context = useContext(RobotContext);
if (!context) {
    throw new Error("useRobot deve essere usato dentro RobotProvider");
}
return context;
}