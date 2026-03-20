import {RobotStep} from "@/types/robot"


export const ROBOT_STEPS:RobotStep[]=[
    {
        id:"idle",
        label:"in attesa"
    },
    {
        id:"login-user",
        label:"inserimento username"
    },
    {
        id:"login-password",
        label:"inserimento password"
    },
    {
        id:"login-submit",
        label:"click su accedi"
    },
    {
        id:"nav-home",
        label:"navigazione sidebar tab Home ignorato"
    },
    {
        id:"nav-nuovo-ordine",
        label:"navigazione sidebar tab nuovo ordine ignorato"
    },
    {
        id:"nav-ricerca-ordini",
        label:"navigazione sidebar tab ricerca ordini selezionato"
    },
    {
        id:"filter-date-from",
        label:"inserimento data inizio"
    },
    {
        id:"filter-date-to",
        label:"inserimento data fine"
    },
    {
        id:"filter-submit",
        label:"click su cerca"
    },
    {
        id:"scan-row",
        label:"scansione riga"
    },
    {
        id:"paginate",
        label:"click pagina successiva"
    },
    {
        id:"export",
        label:"export csv"
    },
]


export const ROBOT_STEP_DELAY_MS=1200


export const ROBOT_CREDENTIALS={
    username: "bot_rpa_01",
    password: "••••••••",
}


export const ROBOT_DATE_FROM="10/03/2026"
export const ROBOT_DATE_TO="20/03/2026"