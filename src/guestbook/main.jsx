import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GuesBook from "./GuestBook";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <GuesBook/>
        </StrictMode>
    )