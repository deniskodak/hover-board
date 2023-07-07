import React, { useRef, useEffect, useContext } from 'react'
import AppContext from '../../context'
import c from 'classnames'

import styles from './index.module.scss'

const listStyles = {
    3: styles.small,
    9: styles.medium,
    12: styles.large,
}

const HoverLogger = () => {
    const lastItemRef = useRef(null)

    const { appState } = useContext(AppContext)
    const { hoverHistory, pickedMode } = appState

    return (
        <div className={styles.hoverBox}>
            <h2 className={styles.title}>Hover squares</h2>
            <ul
                className={c(styles.list, {
                    [listStyles[pickedMode]]: listStyles[pickedMode],
                })}
            >
                {hoverHistory.map(({ row, col }, idx) => (
                    <li key={idx} className={styles.item}>
                        row: {row} col: {col}
                    </li>
                ))}
                <li ref={lastItemRef} />
            </ul>
        </div>
    )
}

export default HoverLogger
