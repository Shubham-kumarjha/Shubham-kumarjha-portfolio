// src/main.js
// ============================================================
// PORTFOLIO LOGIC — for routine content updates, edit data.js.
// Only edit this file if you need to change website behaviour.
// ============================================================
import {
  projects,
  timeline,
  certifications,
  achievements,
  learningTopics,
  skills,
  socialLinks,
  personalInfo,
  codingProfile
} from './data.js';

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. STATIC TEXT ────────────────────────────────────────────
  document.getElementById('heroHeadline').textContent  = personalInfo.headline;
  document.getElementById('heroBio').textContent       = personalInfo.bio;
  document.getElementById('heroLocation').innerHTML     = `<i class="fa-solid fa-location-dot"></i> ${personalInfo.location}`;
  document.getElementById('footerName').textContent    = personalInfo.name;
  document.getElementById('footerTagline').textContent = personalInfo.headline;
  document.getElementById('currentYear').textContent   = new Date().getFullYear();

  document.getElementById('aboutText').innerHTML = `
    <p>${personalInfo.bio}</p>
    <p><strong>Location:</strong> ${personalInfo.location}</p>
    <p><strong>Target role:</strong> ${personalInfo.headline}</p>
  `;


  // ── 2. PROFILE PHOTO ──────────────────────────────────────────
  // Auto-detects /public/assets/images/profile.jpg.
  // To use your photo: rename it profile.jpg and drop it in that folder.
  // The website will display it automatically — no code changes needed.
  const heroProfileImg = document.getElementById('heroProfileImg');
  const profileImg     = new Image();
  const profileSources = ['/assets/images/profile.png', '/assets/images/profile.jpg'];
  let profileSourceIndex = 0;
  profileImg.alt       = personalInfo.name;
  profileImg.className = 'profile-img';
  profileImg.onload = () => {
    heroProfileImg.innerHTML = '';
    heroProfileImg.appendChild(profileImg);
  };
  profileImg.onerror = () => {
    profileSourceIndex += 1;
    if (profileSourceIndex < profileSources.length) {
      profileImg.src = profileSources[profileSourceIndex];
      return;
    }
    heroProfileImg.innerHTML = `
      <div class="placeholder-img">
        <i class="fa-solid fa-camera" style="font-size:1.8rem;margin-bottom:0.5rem;display:block;opacity:0.45;"></i>
        <small>Add <strong>profile.jpg</strong><br>to /public/assets/images/</small>
      </div>`;
  };
  profileImg.src = profileSources[profileSourceIndex];


  // ── 3. SOCIAL LINKS ───────────────────────────────────────────
  // Icons are only rendered when a real URL or email is set in data.js.
  // An empty string ("") causes that icon to be hidden — no broken links.
  function buildSocialLinks() {
    let html = '';
    if (socialLinks.linkedin)
      html += `<a href="${socialLinks.linkedin}" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>`;
    if (socialLinks.github)
      html += `<a href="${socialLinks.github}"   class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>`;
    if (socialLinks.leetcode)
      html += `<a href="${socialLinks.leetcode}" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><i class="fa-solid fa-code"></i></a>`;
    if (socialLinks.substack)
      html += `<a href="${socialLinks.substack}" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Substack"><i class="fa-brands fa-substack"></i></a>`;
    if (socialLinks.linktree)
      html += `<a href="${socialLinks.linktree}" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Linktree"><i class="fa-solid fa-link"></i></a>`;
    if (socialLinks.kaggle)
      html += `<a href="${socialLinks.kaggle}" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Kaggle"><i class="fa-brands fa-kaggle"></i></a>`;
    if (socialLinks.x)
      html += `<a href="${socialLinks.x}" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>`;
    if (personalInfo.email)
      html += `<a href="mailto:${personalInfo.email}" class="social-icon" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>`;
    return html;
  }
  document.getElementById('heroSocials').innerHTML   = buildSocialLinks();
  document.getElementById('footerSocials').innerHTML = buildSocialLinks();
  document.getElementById('navSocials').innerHTML    = buildSocialLinks();


  // ── 4. SKILLS ─────────────────────────────────────────────────
  const skillsContainer = document.getElementById('skillsContainer');
  for (const [category, items] of Object.entries(skills)) {
    const div = document.createElement('div');
    div.className = 'skill-category';
    let icon = 'fa-code';
    if      (category.includes('ML'))          icon = 'fa-brain';
    else if (category.includes('Tools'))       icon = 'fa-wrench';
    else if (category.includes('Concepts'))    icon = 'fa-lightbulb';
    else if (category.includes('Electronics')) icon = 'fa-microchip';
    div.innerHTML = `
      <h3><i class="fa-solid ${icon} text-gradient"></i> ${category}</h3>
      <div class="skill-tags">${items.map(s => `<span class="skill-tag skill-badge">${s}</span>`).join('')}</div>
    `;
    skillsContainer.appendChild(div);
  }


  // ── 5. PROJECTS ───────────────────────────────────────────────
  // GitHub Code, Live Demo, and Details buttons only appear when a
  // URL is set for them in data.js. Empty string = button hidden.
  // Add project images to /public/assets/images/projects/ and set imageUrl.
  const projectsContainer = document.getElementById('projectsContainer');
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Project image or clean placeholder
    const imgHTML = project.imageUrl
      ? `<img src="${project.imageUrl}" alt="${project.title}" class="project-img"
             style="width:100%;height:100%;object-fit:cover;"
             onerror="this.parentElement.innerHTML='<div class=\\'project-placeholder\\'><i class=\\'fa-solid fa-image\\'></i></div>'">`
      : `<div class="project-placeholder">
           <i class="fa-solid fa-diagram-project" style="font-size:2.5rem;opacity:0.2;"></i>
         </div>`;

    // Always show the requested project actions. Unavailable URLs stay visibly
    // disabled rather than pointing to an invented repository or demo.
    const githubBtn  = project.githubUrl
      ? `<a href="${project.githubUrl}" class="btn btn-outline btn-small" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> GitHub Code</a>`
      : `<span class="btn btn-outline btn-small is-disabled" aria-disabled="true" title="Repository link not provided"><i class="fa-brands fa-github"></i> GitHub Code</span>`;
    const demoBtn    = project.liveDemoUrl
      ? `<a href="${project.liveDemoUrl}" class="btn btn-primary btn-small" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`
      : `<span class="btn btn-primary btn-small is-disabled" aria-disabled="true" title="Demo link not provided"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</span>`;
    const detailsBtn = project.detailsUrl
      ? `<a href="${project.detailsUrl}"  class="btn btn-outline btn-small" target="_blank" rel="noopener noreferrer">Details</a>`
      : '';
    const linksHTML  = `<div class="project-links">${githubBtn}${demoBtn}${detailsBtn}</div>`;

    card.innerHTML = `
      <div class="project-img-container">${imgHTML}</div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDescription}</p>
        <div class="project-tech">${project.technologies.map(t => `<span>${t}</span>`).join('')}</div>
        ${linksHTML}
      </div>
    `;
    projectsContainer.appendChild(card);
  });


  // ── 6. TIMELINE ───────────────────────────────────────────────
  const timelineContainer = document.getElementById('timelineContainer');
  timeline.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <div class="timeline-icon">${item.icon}</div>
      <div class="timeline-content">
        <div class="timeline-year">${item.year}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.description}</p>
      </div>
    `;
    timelineContainer.appendChild(el);
  });


  // ── 7. CERTIFICATIONS ─────────────────────────────────────────
  // View Certificate and Download buttons only appear when pdfPath
  // is set in data.js. Drop the PDF in /public/assets/certificates/
  // and set the path — buttons enable automatically.
  const certsContainer = document.getElementById('certsContainer');
  certifications.forEach(cert => {
    const el = document.createElement('div');
    el.className = 'cert-card';
    const certBtns = cert.pdfPath
      ? `<div class="cert-links">
           <a href="${cert.pdfPath}" class="btn btn-outline btn-small" target="_blank" rel="noopener noreferrer">
             <i class="fa-regular fa-file-pdf"></i> View Certificate
           </a>
           <a href="${cert.pdfPath}" class="btn btn-outline btn-small" download>
             <i class="fa-solid fa-download"></i> Download
           </a>
         </div>`
      : '';
    el.innerHTML = `
      <div class="cert-badge" aria-hidden="true"><i class="${cert.icon || 'fa-solid fa-certificate'}"></i></div>
      <h3>${cert.title}</h3>
      <div class="cert-issuer">
        <i class="fa-solid fa-building-columns" style="margin-right:0.35rem;opacity:0.55;"></i>${cert.issuer}
      </div>
      ${cert.date ? `<div class="cert-date">
        <i class="fa-regular fa-calendar" style="margin-right:0.35rem;opacity:0.55;"></i>${cert.date}
      </div>` : ''}
      ${cert.description ? `<p class="cert-desc">${cert.description}</p>` : ''}
      ${certBtns}
    `;
    certsContainer.appendChild(el);
  });

  // ── 8. CODING PROFILE ─────────────────────────────────────────
  const codingCard = document.getElementById('codingCard');
  if (codingCard) {
    codingCard.innerHTML = `
      <div class="coding-card-copy">
        <div class="coding-eyebrow"><i class="fa-solid fa-terminal"></i> ${codingProfile.platform} profile</div>
        <h3>Building stronger analytical problem-solving habits.</h3>
        <p>${codingProfile.description}</p>
        <a class="btn btn-primary" href="${codingProfile.url}" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> View LeetCode Profile
        </a>
      </div>
      <div class="coding-highlights">
        ${codingProfile.highlights.map(item => `
          <div class="coding-highlight">
            <i class="${item.icon}"></i>
            <span>${item.label}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ── 9. ACHIEVEMENTS ───────────────────────────────────────────
  const achievementsContainer = document.getElementById('achievementsContainer');
  achievements.forEach(ach => {
    const el = document.createElement('div');
    el.className = 'achievement-card';
    el.innerHTML = `
      <div class="achievement-icon">${ach.icon}</div>
      <div class="achievement-info">
        <h4>${ach.title}</h4>
        ${ach.description ? `<p>${ach.description}</p>` : ''}
      </div>
    `;
    achievementsContainer.appendChild(el);
  });


  // ── 10. LEARNING JOURNEY ──────────────────────────────────────
  const currentLearningContainer  = document.getElementById('currentLearningContainer');
  const upcomingLearningContainer = document.getElementById('upcomingLearningContainer');

  learningTopics.current.forEach(topic => {
    const el = document.createElement('div');
    el.className = 'upcoming-item';
    el.innerHTML = `<span>${topic.emoji}</span> ${topic.name}`;
    currentLearningContainer.appendChild(el);
  });
  currentLearningContainer.className = 'upcoming-list';

  learningTopics.upcoming.forEach(topic => {
    const el = document.createElement('div');
    el.className = 'upcoming-item';
    el.innerHTML = `<span>${topic.emoji}</span> ${topic.name}`;
    upcomingLearningContainer.appendChild(el);
  });


  // ── 11. RESUME ────────────────────────────────────────────────
  // Checks whether the PDF file actually exists before showing buttons.
  // To enable: drop resume.pdf into /public/ — that's it.
  // resumePath is set in personalInfo inside data.js.
  const viewResumeBtn     = document.getElementById('viewResumeBtn');
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');
  const heroResumeBtn     = document.getElementById('heroResumeBtn');
  const navResumeCta      = document.getElementById('navResumeCta');
  const resumeButtons     = document.querySelector('.resume-buttons');

  if (personalInfo.resumePath && resumeButtons) {
    fetch(personalInfo.resumePath, { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          if (viewResumeBtn) {
            viewResumeBtn.href            = personalInfo.resumePath;
            viewResumeBtn.style.display   = 'inline-flex';
          }
          if (downloadResumeBtn) {
            downloadResumeBtn.href          = personalInfo.resumePath;
            downloadResumeBtn.style.display = 'inline-flex';
            downloadResumeBtn.setAttribute('download', 'Shubham_Kumar_Jha_Resume.pdf');
            downloadResumeBtn.setAttribute('target', '_blank');
            downloadResumeBtn.setAttribute('rel', 'noopener noreferrer');
          }
          if (heroResumeBtn) {
            heroResumeBtn.href = personalInfo.resumePath;
            heroResumeBtn.style.display = 'inline-flex';
            heroResumeBtn.setAttribute('download', 'Shubham_Kumar_Jha_Resume.pdf');
            heroResumeBtn.setAttribute('target', '_blank');
            heroResumeBtn.setAttribute('rel', 'noopener noreferrer');
          }
          if (navResumeCta) {
            navResumeCta.href = personalInfo.resumePath;
            navResumeCta.setAttribute('download', 'Shubham_Kumar_Jha_Resume.pdf');
            navResumeCta.setAttribute('target', '_blank');
            navResumeCta.setAttribute('rel', 'noopener noreferrer');
          }
        } else {
          resumeButtons.innerHTML =
            `<p class="resume-soon">Resume coming soon.<br>
             <small>Drop <code>resume.pdf</code> into <code>/public/</code> to enable the buttons.</small></p>`;
          if (heroResumeBtn) heroResumeBtn.style.display = 'none';
          if (navResumeCta) navResumeCta.style.display = 'none';
        }
      })
      .catch(() => {
        resumeButtons.innerHTML =
          `<p class="resume-soon">Resume coming soon.<br>
           <small>Drop <code>resume.pdf</code> into <code>/public/</code> to enable the buttons.</small></p>`;
        if (heroResumeBtn) heroResumeBtn.style.display = 'none';
        if (navResumeCta) navResumeCta.style.display = 'none';
      });
  }


  // ── 12. NAVIGATION ────────────────────────────────────────────
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 250) current = section.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', !!(current && a.getAttribute('href') === `#${current}`));
    });
  });

  // Hamburger menu
  const hamburger         = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('navLinks');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('active');
      const spans  = hamburger.querySelectorAll('span');
      spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)'   : 'none';
      spans[1].style.opacity   = isOpen ? '0'                                    : '1';
      spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity   = '1';
        spans[2].style.transform = 'none';
      });
    });
  }


  // ── 13. CONTACT FORM ──────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  const contactMsg  = document.getElementById('contactMsg');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const senderName = contactForm.elements.name.value.trim();
      const senderEmail = contactForm.elements.email.value.trim();
      const message = contactForm.elements.message.value.trim();
      const subject = encodeURIComponent(`Portfolio contact from ${senderName}`);
      const body = encodeURIComponent(`Name: ${senderName}\nEmail: ${senderEmail}\n\n${message}`);

      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      contactForm.style.display = 'none';
      contactMsg.style.display  = 'block';
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'flex';
        contactMsg.style.display  = 'none';
      }, 5000);
    });
  }


  // ── 14. SCROLL REVEAL & PROGRESS BARS ────────────────────────
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      entry.target.querySelectorAll('.progress-bar-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // Activate elements already visible on initial load
  setTimeout(() => {
    revealElements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('active');
    });
  }, 100);
});
