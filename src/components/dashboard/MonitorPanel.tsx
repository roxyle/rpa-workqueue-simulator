"use client";

import { useRobot } from "@/context/RobotContext";
import { RobotStepId } from "@/types/robot";

type StepStatus = "pending" | "active" | "done";

interface MonitorStep {
    id: RobotStepId
    label: string
}

interface MonitorGroup {
    label: string
    steps: MonitorStep[]
}

const MONITOR_GROUPS: MonitorGroup[] = [
    {
        label: "01 - Login",
        steps: [
        { id: "login-user", label: "username" },
        { id: "login-password", label: "password" },
        { id: "login-submit", label: "accedi" },
        ],
    },
    {
        label: "02 - Navigazione",
        steps: [
        { id: "nav-home", label: "home" },
        { id: "nav-nuovo-ordine", label: "nuovo ordine" },
        { id: "nav-ricerca-ordini", label: "ricerca ordini" },
        ],
    },
    {
        label: "03 - Ricerca",
        steps: [
        { id: "filter-date-from", label: "data inizio" },
        { id: "filter-date-to", label: "data fine" },
        { id: "filter-submit", label: "cerca" },
        ],
    },
    {
        label: "04 - Elaborazione",
        steps: [
        { id: "scan-row", label: "scansione" },
        { id: "paginate", label: "paginazione" },
        ],
    },
    {
        label: "05 - Export",
        steps: [
        { id: "export", label: "export csv" },
        ],
    },
];

const STEP_ORDER: RobotStepId[] = [
    "idle",
    "login-user",
    "login-password",
    "login-submit",
    "nav-home",
    "nav-nuovo-ordine",
    "nav-ricerca-ordini",
    "filter-date-from",
    "filter-date-to",
    "filter-submit",
    "scan-row",
    "paginate",
    "export",
];

function getStepStatus(stepId: RobotStepId, currentStep: RobotStepId, robotStatus: string): StepStatus {
    if (robotStatus === "idle") return "pending";
    if (robotStatus === "done") return "done";

    const currentIndex = STEP_ORDER.indexOf(currentStep);
    const stepIndex = STEP_ORDER.indexOf(stepId);

    if (stepIndex < currentIndex) return "done";
    if (stepIndex === currentIndex) return "active";
    return "pending";
}

export default function MonitorPanel() {
    const { robotState } = useRobot();

    return (
        <div
        style={{
            width: "160px",
            borderLeft: "1px solid #c8d4e0",
            backgroundColor: "#f7f8fa",
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
        }}
        >
        <div
            style={{
            backgroundColor: "#252526",
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            }}
        >
            <div
            style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: robotState.status === "running" ? "#4ec94e" : "#555",
                flexShrink: 0,
            }}
            />
            <span
            style={{
                fontSize: "10px",
                color: "#aaa",
                fontFamily: "monospace",
            }}
            >
            WORKFLOW
            </span>
        </div>

        <div style={{ flex: 1, padding: "8px", overflowY: "auto" }}>
            {MONITOR_GROUPS.map((group) => (
            <div key={group.label} style={{ marginBottom: "10px" }}>
                <div
                style={{
                    fontSize: "9px",
                    color: "#aaa",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "4px",
                    paddingLeft: "4px",
                }}
                >
                {group.label}
                </div>
                {group.steps.map((step) => {
                const status = getStepStatus(step.id, robotState.currentStep, robotState.status);
                return (
                    <div
                    key={step.id}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "3px 4px",
                        borderRadius: "3px",
                        fontSize: "10px",
                        fontFamily: "monospace",
                        backgroundColor: status === "active" ? "#e8eef5" : "transparent",
                        color: status === "done" ? "#3b6d11" : status === "active" ? "#1a3a5c" : "#aaa",
                        fontWeight: status === "active" ? "500" : "400",
                    }}
                    >
                    <div
                        style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        flexShrink: 0,
                        backgroundColor:
                            status === "done" ? "#3b6d11" :
                            status === "active" ? "#f0a500" :
                            "#ddd",
                        }}
                    />
                    {step.label}
                    </div>
                );
                })}
            </div>
            ))}
        </div>
        </div>
    )
}