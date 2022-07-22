import React from 'react'
import styles from './Cursor.module.css'

export interface CursorProps {
  cursorStyle?: string
}

export const Cursor = ({ cursorStyle = '_' }: CursorProps): JSX.Element => {
  return <span className={styles.blinkingCursor}>{cursorStyle}</span>
}
