import React from 'react'
import styles from './PlaceHolder.module.css'
interface Props {}

export const PlaceHolder: React.FC<Props> = () => {
    return <div className={styles.root}>Block</div>
}
