import "./fade-section.css";

import { useEffect, useRef, useState } from "react";

const FadeSection = (props: any) => {

    const [isVisible, setVisible] = useState(true);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const current = domRef.current;
        if (!current) return;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(current);
        return () => {
            observer.unobserve(current);
        }
    }, []);

    return (
        <div
            className={`fade-in ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeSection;