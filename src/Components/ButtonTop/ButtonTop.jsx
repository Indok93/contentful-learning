import { useEffect, useState } from "react"
import styles from "./ButtonTop.module.scss"

export const ButtonTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        handleScroll();
        
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

  return (
    <button 
        className={`${styles.buttonTop} ${isVisible ? styles.visible : ""}`} 
        onClick={scrollToTop}
        >
        Top
    </button>
  )
}
