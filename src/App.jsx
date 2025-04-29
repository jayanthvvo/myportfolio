// App.jsx
import React from 'react';

function App() {
  const styles = {
    app: {
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f5f5dc',
      margin: 0,
      padding: 0,
      scrollBehavior: 'smooth'
    },
    header: {
      position: 'fixed', // <-- Make header fixed
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 60px',
      background: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      zIndex: 1000 // <-- Keep it above everything
    },
    
    nav: {
      display: 'flex',
      gap: '15px'
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: 500,
      borderBottom: '2px solid transparent',
      transition: 'border-color 0.3s'
    },
    navLinkHover: {
      borderBottomColor: '#2f80ed'
    },
    activeLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: 500,
      borderBottom: '2px solid #2f80ed'
    },
    hero: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '60px',
      background: 'white',
      borderRadius: '12px',
      margin: '40px auto',
      maxWidth: '1000px'
    },
    heroText: {
      maxWidth: '500px'
    },
    heroTitle: {
      fontSize: '48px',
      marginBottom: '20px'
    },
    highlight: {
      color: '#2f80ed'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#2f80ed',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    buttonHover: {
      backgroundColor: '#256ccf'
    },
    heroImage: {
      backgroundColor: '#2f80ed',
      borderRadius: '50% 40% 50% 50%',
      overflow: 'hidden',
      width: '250px',
      height: '250px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    section: {
      padding: '90px 60px',
      backgroundColor: '#e6ffe6',
      marginTop: '40px'
    },
    sectionTitle: {
      fontSize: '32px',
      marginBottom: '20px'
    },
    skillsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginTop: '20px'
    },
    skillItem: {
      backgroundColor: '#e0ecff',
      padding: '10px 20px',
      borderRadius: '20px',
      fontWeight: 500
    },
    footer: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: 'white',
      marginTop: '20px'
    },
    socialIcon: {
      margin: '0 10px',
      fontSize: '18px',
      textDecoration: 'none',
      color: '#0077b5'
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div><strong>Rahul</strong></div>
        <nav style={styles.nav}>
          <a href="#" style={styles.activeLink} aria-current="page">Home</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#works" style={styles.navLink}>Works</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            <br />
            I'm <span style={styles.highlight}>Rahul</span><br />
          
          </h1>
          <button
            type="button"
            style={styles.button}
            onClick={() => window.location.href = "https://github.com/jayanthvvo"}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          >
            Contact
          </button>
        </div>
        <div style={styles.heroImage}>
          <img
            src="/5044d480-.jpeg"
            alt="RAHUL"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      <section id="about" style={styles.section}>
  <h2 style={styles.sectionTitle}>About Me</h2>
  <p>
    I'm Rahul — a passionate and detail-oriented developer with strong foundations in both programming and web development.
    With hands-on experience in languages like <strong>Java</strong> and <strong>Python</strong>, and a creative touch in <strong>CSS</strong> and <strong>JavaScript</strong>,
    I enjoy building dynamic, interactive, and visually appealing projects.
  </p>
  <p>
    Whether it's crafting beautiful user interfaces with <strong>CSS</strong> or developing logical solutions with <strong>Java</strong> and <strong>Python</strong>,
    I strive to create work that is efficient, user-friendly, and impactful.
  </p>
  <p>
    I'm constantly exploring new technologies, sharpening my coding skills, and challenging myself with projects like dice games and web-based apps. 
    When I'm not coding, you can find me reading about tech innovations or brainstorming new app ideas ☕.
  </p>
</section>

<section id="skills" style={styles.section}>
  <h2 style={styles.sectionTitle}>Skills</h2>
  <div style={styles.skillsList}>
    <div style={styles.skillItem}>Java</div>
    <div style={styles.skillItem}>Python</div>
    <div style={styles.skillItem}>CSS</div>
    <div style={styles.skillItem}>JavaScript</div>
    <div style={styles.skillItem}>React</div> {/* New Skill */}
    <div style={styles.skillItem}>C</div>      {/* New Skill */}
  </div>
</section>


      <section id="works" style={styles.section}>
  <h2 style={styles.sectionTitle}>My Works</h2>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
    {[
      {
        title: "Dice Rolling App",
        description: "A fun dice rolling app that generates a random dice roll every time you click the button.",
        tech: "React, HTML, CSS, JavaScript",
        link: "" // <-- Replace this with your real link
      },
      {
        title: "Rock Paper Scissors App",
        description: "A simple Rock Paper Scissors game where you can play against the computer!",
        tech: "React, HTML, CSS, JavaScript",
        link: "" // <-- Replace this with your real link
      }
    ].map((project, index) => (
      <div
        key={index}
        style={{
          background: '#f7faff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
        }}
      >
        <h3 style={{ marginTop: 0 }}>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>Tech:</strong> {project.tech}</p>
        <button
          type="button"
          style={styles.button}
          onClick={() => window.open(project.link, '_blank')}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        >
          View Project
        </button>
      </div>
    ))}
  </div>
</section>



<section id="contact" style={styles.section}>
  <h2 style={styles.sectionTitle}>Contact</h2>
  <p>Feel free to reach out to me via email or connect with me on LinkedIn or GitHub.</p>
  
  <p style={{ marginTop: '10px', fontWeight: '500' }}>
    📧 Email: <a href="mailto:rahulkrp0644@gmail.com" style={{ color: '#2f80ed', textDecoration: 'none' }}>rahulkrp0644@gmail.com</a>
  </p>
  
  <p style={{ marginTop: '10px', fontWeight: '500' }}>
    🔗 LinkedIn: <a href="https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav" target="_blank" rel="noopener noreferrer" style={{ color: '#2f80ed', textDecoration: 'none' }}>Visit my LinkedIn</a>
  </p>

  <p style={{ marginTop: '10px', fontWeight: '500' }}>
    🛠️ GitHub: <a href="https://" target="_blank" rel="noopener noreferrer" style={{ color: '#2f80ed', textDecoration: 'none' }}>Visit my GitHub</a>
  </p>
</section>




<footer style={styles.footer}>
  <div>
    © 2025 Rahul. All rights reserved.
  </div>
</footer>

    </div>
  );
}

export default App;
