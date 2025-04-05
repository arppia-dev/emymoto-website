import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>
          &copy; {new Date().getFullYear()} Emymoto. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 0',
    textAlign: 'center' as const,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
}

export default Footer
