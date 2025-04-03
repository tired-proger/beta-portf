import { createContext, useState } from "react";

const modalContext = createContext(null);

export default function ModalProvider({ children }) {

    //types modal ["skills", "project", "form", "error"]

    const [modalData, setModalData] = useState({
        isOpen: false,
        isVisible: false,
        type: "skills",
        data: {}
    });

    return (
        <modalContext.Provider value={{ modalData, setModalData }}>{children}</modalContext.Provider>
    );

}

export {modalContext};