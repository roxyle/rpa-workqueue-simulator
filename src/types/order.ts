export type OrderStatus="Da evadere"|"Spedito"

export type WarehouseStatus="Disponibile"|"Attesa fornitore"

export interface Order{
    id:string,
    dataOrdine:string,
    dataConsegnaPrevista:string,
    idOrdine:string,
    cliente:string,
    statoOrdine:OrderStatus,
    disponibilitaMagazzino:WarehouseStatus|null,
    note:string
}