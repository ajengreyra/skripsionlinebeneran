import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><Link href="#bab1">Bab 1</Link></li>
        <li><Link href="#bab2">Bab 2</Link></li>
        <li><Link href="#bab3">Bab 3</Link></li>
        <li><Link href="#bab4">Bab 4</Link></li>
        <li><Link href="#bab5">Bab 5</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  }
}
