import React from "react";
import styles from './_style/layout.module.scss'

type layoutProps = {
    children: React.ReactNode
}
const layout = ({children}: layoutProps) => {
    return <div className={styles.container}>{children}</div>
}

export default layout