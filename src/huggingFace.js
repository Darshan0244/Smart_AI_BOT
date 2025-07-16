import { prevUser } from "./context/UserContext";


export async function query() {
    const response = await fetch(
        // The below https:// link is Free for Hugging Face Text to image Model.
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3-medium-diffusers",
        {
            headers: {
                
                Authorization: "Bearer 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",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ "inputs": prevUser.prompt}),
        }
    );
    const result = await response.blob();
    return result;
}

// -------------------------------------------

