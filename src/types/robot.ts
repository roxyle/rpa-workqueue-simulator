export type RobotStepId =
| "idle"
| "login-user"
| "login-password"
| "login-submit"
| "nav-home"
| "nav-nuovo-ordine"
| "nav-ricerca-ordini"
| "filter-date-from"
| "filter-date-to"
| "filter-submit"
| "scan-row"
| "paginate"
| "export"


export interface RobotStep{
    id: RobotStepId,
    label:string
}


export type RobotStatus="idle"|"running"|"done"|"error"


export interface RobotState{
    status:RobotStatus,
    currentStep:RobotStepId,
    currentRowIndex:number|null,
    currentPage:number,
    extractedCount:number,
    log:string[]
}