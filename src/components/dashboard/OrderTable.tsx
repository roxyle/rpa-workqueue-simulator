"use client";

import { useRobot } from "@/context/RobotContext";
import { Order } from "@/types/order";

interface OrderTableProps {
orders: Order[];
currentPage: number;
totalPages: number;
}

export default function OrderTable({ orders, currentPage, totalPages }: OrderTableProps) {
const { robotState } = useRobot();

return (
    <div>
    <div
        style={{
        fontSize: "11px",
        color: "#666",
        marginBottom: "6px",
        }}
    >
        Elenco ordini - Totale: {orders.length} - Pagina {currentPage} di {totalPages}
    </div>

    <table
        style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "11px",
        }}
    >
        <thead>
        <tr style={{ backgroundColor: "#f0f4f8" }}>
            {["Data ordine", "Data cons. prev.", "ID ordine", "Cliente", "Stato ordine", "Dispon. magazzino", "Note"].map((col) => (
            <th
                key={col}
                style={{
                padding: "6px 8px",
                textAlign: "left",
                fontWeight: "500",
                color: "#666",
                borderBottom: "1px solid #c8d4e0",
                whiteSpace: "nowrap",
                }}
            >
                {col}
            </th>
            ))}
        </tr>
        </thead>
        <tbody>
        {orders.map((order, index) => {
            const isScanned = robotState.currentStep === "scan-row" && robotState.currentRowIndex === index;
            const isDimmed = order.statoOrdine === "Spedito" || order.disponibilitaMagazzino === "Attesa fornitore";

            return (
            <tr
                key={order.id}
                id={`row-${order.idOrdine}`}
                className={isScanned ? "robot-active" : ""}
                style={{
                opacity: isDimmed ? 0.4 : 1,
                }}
            >
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #c8d4e0", color: "#333" }}>
                {order.dataOrdine}
                </td>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #c8d4e0", color: "#333" }}>
                {order.dataConsegnaPrevista}
                </td>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #c8d4e0", color: "#333" }}>
                {order.idOrdine}
                </td>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #c8d4e0", color: "#333" }}>
                {order.cliente}
                </td>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #c8d4e0" }}>
                <span
                    style={{
                    display: "inline-block",
                    padding: "2px 7px",
                    borderRadius: "10px",
                    fontSize: "10px",
                    fontWeight: "500",
                    backgroundColor: order.statoOrdine === "Spedito" ? "#eaf3de" : "#e8eef5",
                    color: order.statoOrdine === "Spedito" ? "#3b6d11" : "#1a3a5c",
                    }}
                >
                    {order.statoOrdine}
                </span>
                </td>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #c8d4e0" }}>
                {order.disponibilitaMagazzino && (
                    <span
                    style={{
                        display: "inline-block",
                        padding: "2px 7px",
                        borderRadius: "10px",
                        fontSize: "10px",
                        fontWeight: "500",
                        backgroundColor: order.disponibilitaMagazzino === "Disponibile" ? "#eaf3de" : "#faeeda",
                        color: order.disponibilitaMagazzino === "Disponibile" ? "#3b6d11" : "#854f0b",
                    }}
                    >
                    {order.disponibilitaMagazzino}
                    </span>
                )}
                </td>
                <td style={{ padding: "6px 8px", borderBottom: "1px solid #c8d4e0", color: "#333" }}>
                {order.note}
                </td>
            </tr>
            );
        })}
        </tbody>
    </table>
    </div>
);
}