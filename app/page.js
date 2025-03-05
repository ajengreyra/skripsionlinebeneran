// /pages/page.js

import { dummySkripsi } from '../data/dummySkripsi';
import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <div style={styles.container}>
      <Navbar />
      
      <div style={styles.content}>
        {/* Bab 1 */}
        <section id="bab1" style={styles.section}>
          <h2 style={styles.stickyHeading}>{dummySkripsi.bab1.judul}</h2>
          {dummySkripsi.bab1.isi.map((paragraf, index) => (
            <p key={index} style={styles.paragraph}>{paragraf}</p>
          ))}
        </section>

        {/* Bab 2 */}
        <section id="bab2" style={styles.section}>
          <h2 style={styles.stickyHeading}>{dummySkripsi.bab2.judul}</h2>
          {dummySkripsi.bab2.isi.map((paragraf, index) => (
            <p key={index} style={styles.paragraph}>{paragraf}</p>
          ))}
        </section>

        {/* Bab 3 */}
        <section id="bab3" style={styles.section}>
          <h2 style={styles.stickyHeading}>{dummySkripsi.bab3.judul}</h2>
          {dummySkripsi.bab3.isi.map((paragraf, index) => (
            <p key={index} style={styles.paragraph}>{paragraf}</p>
          ))}
        </section>

        {/* Bab 4 */}
        <section id="bab4" style={styles.section}>
          <h2 style={styles.stickyHeading}>{dummySkripsi.bab4.judul}</h2>
          {dummySkripsi.bab4.isi.map((paragraf, index) => (
            <p key={index} style={styles.paragraph}>{paragraf}</p>
          ))}
        </section>

        {/* Bab 5 */}
        <section id="bab5" style={styles.section}>
          <h2 style={styles.stickyHeading}>{dummySkripsi.bab5.judul}</h2>
          {dummySkripsi.bab5.isi.map((paragraf, index) => (
            <p key={index} style={styles.paragraph}>{paragraf}</p>
          ))}
        </section>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '60px',  // Untuk memberi ruang di bawah navbar
    fontFamily: '"Roboto", sans-serif',
    backgroundColor: '#f4f7f6',
  },
  content: {
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginBottom: '30px',
  },
  stickyHeading: {
    position: 'sticky',
    top: '60px',  // Sticky heading berada tepat di bawah navbar
    backgroundColor: '#fff',
    padding: '15px 20px',
    margin: '20px 0',
    border: '1px solid #ddd',
    zIndex: 10,
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#2c3e50',
    borderRadius: '8px',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#34495e',
    marginBottom: '15px',
  },
};
