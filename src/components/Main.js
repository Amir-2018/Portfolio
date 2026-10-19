const skillGroups = [
  {
    title: 'Langages',
    items: ['Java','PHP', 'JavaScript', 'TypeScript', 'Python', 'Dart', 'C#'],
  },
  {
    title: 'Backend',
    items: ['Laravel', 'Symfony', 'API REST', 'Node.js', 'Spring Boot', 'Django', 'Next.js'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'TailwindCSS', 'Angular', 'Vue.js', 'React'],
  },
  {
    title: 'Bases de données',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'DevOps & outils',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Nginx', 'Linux/Ubuntu', 'Git', 'GitHub', 'GitLab', 'Jira', 'Figma'],
  },
  {
    title: 'Concepts & méthodes',
    items: ['POO', 'MVC', 'Scrum', 'Azure', 'Flutter', 'React Native'],
  },
];

const experiences = [
  {
    company: 'Network Technologies Tunisia',
    role: 'Développeur Backend / Full-Stack',
    date: 'Mars 2025 — Aujourd’hui',
    location: 'Ariana, Tunisie',
    details: [
      'Conception, développement et intégration d’API REST.',
      'Développement et optimisation d’une plateforme de suivi de flotte en temps réel.',
      'Intégration et traitement de flux de données issus de dispositifs de géolocalisation de véhicules.',
      'Amélioration du reporting et des notifications, et création de tableaux de bord.',
      'Maintenance des applications, support technique et correction de bugs.',
    ],
    technologies: 'Node.js, Spring Boot, Angular, Next.js, MongoDB, OpenStreetMap, Docker, Kubernetes, Jenkins, GitLab, Jira',
  },
  {
    company: 'Quetratech',
    role: 'Développeur Backend / Full-Stack',
    date: 'Juil. 2024 — Fév. 2025',
    location: 'Mahdia, Tunisie',
    details: [
      'Analyse des besoins et conception technique.',
      'Conception, développement et intégration d’API REST.',
      'Développement de fonctionnalités pour des applications web et mobiles.',
      'Maintenance, tests et correction de bugs.',
    ],
    technologies: 'Spring Boot, Angular, TailwindCSS, PostgreSQL, GitLab, Flutter',
  },
  {
    company: 'Actia Engineering Services',
    role: 'Stagiaire — Projet de fin d’études',
    date: 'Fév. 2024 — Juil. 2024',
    location: 'Sfax, Tunisie',
    details: ['Développement de l’application mobile Chotrana Smart Village.'],
    technologies: 'Flutter, Django, Angular, TailwindCSS, MongoDB, API REST, Jira',
  },
  {
    company: 'Quetratech',
    role: 'Stage d’été',
    date: 'Juil. 2022 — Août 2022',
    location: 'Mahdia, Tunisie',
    details: ['Développement d’une application web de gestion des publications, réservations et commandes.'],
    technologies: 'Spring Boot, Angular, PostgreSQL, API REST',
  },
  {
    company: 'Fablab Mahdia',
    role: 'Stagiaire — Projet de fin d’études',
    date: 'Avr. 2021 — Juil. 2021',
    location: 'Mahdia, Tunisie',
    details: ['Développement logiciel d’un robot éducatif avec intégration de l’API Blockly.'],
    technologies: 'Blockly, Node.js, Vue.js, TailwindCSS, PostgreSQL, API REST',
  },
];

const education = [
  {
    school: 'Institut Supérieur d’Informatique et de Multimédia de Sfax',
    degree: 'Ingénierie en Génie Logiciel',
    date: 'Juil. 2024',
  },
  {
    school: 'Institut Supérieur d’Informatique de Mahdia',
    degree: 'Licence en Informatique',
    date: 'Juil. 2021',
  },
  {
    school: 'Lycée 15 Octobre, Sejnane',
    degree: 'Diplôme du Baccalauréat',
    date: 'Juin 2018',
  },
];

const projects = [
  {
    title: 'Blockly — Apprendre à programmer',
    category: 'Éducation',
    description: 'Application ludique pour initier les enfants à la programmation grâce à des blocs visuels.',
    url: 'https://blockly-project.onrender.com/',
    linkLabel: 'Découvrir le projet',
  },
  {
    title: 'Jeu de QCM',
    category: 'Centre de formation',
    description: 'Jeu de questions à choix multiples conçu pour un centre de formation.',
    url: 'https://deutcsh.onrender.com/',
    linkLabel: 'Découvrir le projet',
  },
  {
    title: 'Gestion des déchets',
    category: 'Projet professionnel',
    description: 'Projet professionnel autour de la gestion des déchets.',
  },
  {
    title: 'NGI GPS',
    category: 'Projet professionnel',
    description: 'Plateforme professionnelle de suivi et de gestion de flotte par GPS.',
    url: 'https://app.ngi-gps.com/#!/login',
    linkLabel: 'Accéder à la plateforme',
  },
  {
    title: 'Réclamations clients',
    category: 'Projet professionnel',
    description: 'Plateforme de gestion des réclamations clients développée dans le cadre de mon expérience en entreprise.',
  },
];

const Main = ({ onMenuToggle }) => (
  <>
    <button
      type="button"
      className="mobile-nav-toggle d-xl-none"
      aria-label="Ouvrir ou fermer le menu"
      onClick={onMenuToggle}
    >
      <i className="bi bi-list" aria-hidden="true"></i>
    </button>

    <main id="main">
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Portfolio — Tunisie</p>
          <h1>Amir Maalaoui</h1>
          <p className="hero-role">Ingénieur en génie logiciel</p>
          <p className="hero-description">
            Développeur backend et full-stack, spécialisé en API REST et applications web.
          
          </p>
          <a className="primary-button" href="#projects">
            Découvrir mes projets <i className="bi bi-arrow-down-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="hero-decoration" aria-hidden="true">
          <span>&lt;</span>
          <span>/&gt;</span>
        </div>
      </section>

      <section id="about" className="portfolio-section about-section">
        <div className="content-container">
          <div className="section-heading">
            <p className="eyebrow">Qui suis-je ?</p>
            <h2>À propos</h2>
          </div>
          <div className="about-card">
            <div className="about-mark" aria-hidden="true">AM</div>
            <div>
              <h3>Développeur Backend / Full-Stack</h3>
              <p>
                Ingénieur en génie logiciel avec plus de deux ans d’expérience en
                développement backend et full-stack. J’ai travaillé sur la conception
                d’API REST, des applications web et le traitement de données en temps
                réel..
              </p>
              <div className="contact-details">
                <a href="tel:+21693379344"><i className="bi bi-telephone" aria-hidden="true"></i> +216 93 379 344</a>
                <a href="mailto:amir.maalaoui27@gmail.com"><i className="bi bi-envelope" aria-hidden="true"></i> amir.maalaoui27@gmail.com</a>
                <span><i className="bi bi-geo-alt" aria-hidden="true"></i> Manouba, Tunisie</span>
                <a href="https://www.linkedin.com/in/amir-maalaoui-12b67020a/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin" aria-hidden="true"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="portfolio-section skills-section">
        <div className="content-container">
          <div className="section-heading">
            <p className="eyebrow">Technologies & méthodes</p>
            <h2>Compétences</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="portfolio-section projects-section">
        <div className="content-container">
          <div className="section-heading">
            <p className="eyebrow">Réalisations sélectionnées</p>
            <h2>Projets</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <span className="project-category">{project.category}</span>
                  <i className="bi bi-code-slash" aria-hidden="true"></i>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                    {project.linkLabel} <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                  </a>
                ) : (
                  <span className="project-link project-link-unavailable">Projet réalisé en entreprise</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="portfolio-section experience-section">
        <div className="content-container">
          <div className="section-heading">
            <p className="eyebrow">Expérience professionnelle</p>
            <h2>Mon parcours</h2>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={`${experience.company}-${experience.date}`}>
                <div className="timeline-date">{experience.date}</div>
                <div className="timeline-card">
                  <div className="timeline-card-heading">
                    <div>
                      <h3>{experience.company}</h3>
                      <p>{experience.role} <span>· {experience.location}</span></p>
                    </div>
                    <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                  </div>
                  <ul>
                    {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                  <p className="technology-list"><strong>Technologies :</strong> {experience.technologies}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="portfolio-section education-section">
        <div className="content-container">
          <div className="section-heading">
            <p className="eyebrow">Formation académique</p>
            <h2>Études</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.school}>
                <span className="education-date">{item.date}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="languages" className="portfolio-section languages-section">
        <div className="content-container languages-content">
          <div className="section-heading">
            <p className="eyebrow">Communication</p>
            <h2>Langues</h2>
          </div>
          <div className="language-list">
            <span><strong>Arabe</strong> Langue maternelle</span>
            <span><strong>Français</strong> Avancé</span>
            <span><strong>Anglais</strong> Intermédiaire</span>
            <span><strong>Allemand</strong> Débutant</span>
          </div>
        </div>
      </section>

      <footer id="contact" className="portfolio-footer">
        <div className="content-container footer-content">
          <div>
            <p className="eyebrow">Une opportunité en tête ?</p>
            <h2>Parlons de votre projet.</h2>
          </div>
          <a className="primary-button" href="mailto:amir.maalaoui27@gmail.com">
            Me contacter <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
          </a>
          <p className="footer-note">© {new Date().getFullYear()} Amir Maalaoui</p>
        </div>
      </footer>
    </main>
  </>
);

export default Main;
