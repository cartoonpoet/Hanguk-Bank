import styles from "./_style/page.module.scss";
import NavBar from "@/app/_component/NavBar/page";
import React from "react";
import Card from "@/app/_component/Card/Page";

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