'use client'

import React from 'react'
import { motion, MotionStyle } from 'framer-motion'
import styles from './style.module.css'

interface Props {
  children: React.ReactNode
  style?: MotionStyle
  onclick?: () => void
  className?: string
}

export const Modal: React.FC<Props> = ({
  children,
  style,
  onclick,
  className
}) => {
  return (
    <motion.div
      className={`${styles.modal_backdrop} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={e => {
        if (e.target === e.currentTarget) {
          if (onclick) {
            onclick()
          }
        }
      }}
    >
      <motion.div
        style={{ maxWidth: 500, ...style }}
        className={styles.modal_content}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
