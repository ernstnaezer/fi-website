"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export type EmailStatus = "idle" | "sending" | "success" | "error";

export const useEmailService = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<EmailStatus>("idle");

    const sendEmail = (e: React.FormEvent, onSuccessCallback?: () => void) => {
        e.preventDefault();
        if (!formRef.current) return;

        // Trim all inputs and textareas before sending
        const formElements = formRef.current.elements;
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i] as HTMLInputElement | HTMLTextAreaElement;
            if (element.value && (element.tagName === "INPUT" || element.tagName === "TEXTAREA")) {
                element.value = element.value.trim();
            }
        }

        setStatus("sending");

        emailjs
            .sendForm(
                "service_mvi596h", // Service ID
                "template_6dp1l6g", // Template ID
                formRef.current,
                "ZKCNzXFJ_ChBAyWv5" // Public Key
            )
            .then(
                () => {
                    setStatus("success");
                    onSuccessCallback?.();
                },
                (error) => {
                    console.error("FAILED...", error);
                    setStatus("error");
                }
            );
    };

    const resetStatus = () => setStatus("idle");

    return { formRef, status, setStatus, sendEmail, resetStatus };
};