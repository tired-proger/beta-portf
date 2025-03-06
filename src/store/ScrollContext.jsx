import { createContext, useState } from "react";
import { generateNumObjFromArray } from "../utils/generateNumObjFromArray";
import { servicesList } from "../data/data";

const scrollContext = createContext(null);

function ScrollProvider({ children }) {

    const [scrollState, setScrollState] = useState({
        skillsBlockVisible: false,
        servicesBlockVisible: generateNumObjFromArray(servicesList)
    });

    console.log(generateNumObjFromArray(servicesList));

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    };

    const handleObserver = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                //animation skills list event
                if (entry.target.getAttribute("id") === "scrollAnimationBlock") {
                    setScrollState(state => ({ ...state, skillsBlockVisible: true }));
                    observer.unobserve(entry.target);
                    return;
                }

                //animation services list item event
                if (entry.target.getAttribute("id").slice(0, 12) === "service_card") {
                    const index = entry.target.getAttribute("id").slice(13);
                    setScrollState(state => ({ ...state, servicesBlockVisible: { ...state.servicesBlockVisible, [index]: true } }));
                    observer.unobserve(entry.target);
                    return;
                }

            }
        })
    }

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    const scrollData = { scrollState, observer };

    return (
        <scrollContext.Provider value={scrollData}>{children}</scrollContext.Provider>
    )
}

export default ScrollProvider;
export { scrollContext };