import styles from './styles.module.css';
import { Header } from "../../components/Header";
import { MagnifyingGlass } from "phosphor-react";

export function Records() {
    return(
        <>
            <Header/>
            {/* <div className={styles.filter}>
                <input type="search" />
                <MagnifyingGlass/>
            </div> */}
            <div className={styles.registers}>
                
            </div>
        </>
    )
}