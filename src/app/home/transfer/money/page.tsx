import styles from "./_style/page.module.scss";
import NavBar from "@/_components/common/NavBar/page";
import React from "react";

const Money = () => {
    return (
        <main className={styles.container}>
            <div className={styles.top}>
                <NavBar leftControl="icon" rightControl="icon" title/>

            </div>
        </main>
    )
};

export default Money;