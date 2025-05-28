'use server';
import { axiosClient } from "@/lib/utils";

export async function submitQueryForm(data) {
    try {
        console.log('sending form data', data);
        // Fix: Convert data to a plain JavaScript object if it isn't already
        const dataToSend = JSON.parse(JSON.stringify(data));
        
        const response = await axiosClient.post("/mail/landing_page_form", dataToSend);
        
        // Return a formatted response object
        return {
            success: true,
            message: "Form submitted successfully",
            data: response.data || {}
        };
    } catch (error) {
        console.error("Error submitting query form:", error);
        return {
            success: false,
            message: "Error submitting query form",
            error: error instanceof Error ? error.message : "Unknown error"
        };
    }
}