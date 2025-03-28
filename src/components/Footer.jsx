import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div style={{maxWidth: '100%'}}>
        <h3>Escreva sobre o que tem interesse!</h3>
        <p>Mini Blog &copy; 2025</p>
        </div>
    </footer>
  )
}

export default Footer