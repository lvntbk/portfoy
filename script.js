/* ==========================
   Tech Badge Filter
========================== */
const filterButtons = document.querySelectorAll('.filter-buttons button');
const techs = document.querySelectorAll('.techs span');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Aktif butonu güncelle
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Tech badge filtreleme
    techs.forEach(tech => {
      tech.style.display = (filter === 'all' || tech.classList.contains(filter)) ? 'flex' : 'none';
    });
  });
});

/* ==========================
   Letter by Letter Başlık
========================== */
const heroTitle = document.querySelector('#hero h1');
const letters = heroTitle.textContent.split('');
heroTitle.textContent = '';

letters.forEach((letter, idx) => {
  const span = document.createElement('span');
  span.textContent = letter;
  span.style.opacity = 0;
  span.style.transform = 'translateY(20px)';
  span.style.transition = 'all 0.3s ease';
  heroTitle.appendChild(span);

  setTimeout(() => {
    span.style.opacity = 1;
    span.style.transform = 'translateY(0)';
  }, idx * 100);
});

/* ==========================
   Section Scroll Animasyonu
========================== */
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

/* ==========================
   Back to Top Butonu
========================== */
const topBtn = document.createElement('button');
topBtn.id = 'topBtn';
topBtn.textContent = '↑';
topBtn.style.display = 'none';
topBtn.style.position = 'fixed';
topBtn.style.bottom = '30px';
topBtn.style.right = '30px';
topBtn.style.padding = '10px 15px';
topBtn.style.fontSize = '18px';
topBtn.style.border = 'none';
topBtn.style.borderRadius = '50%';
topBtn.style.background = '#555';
topBtn.style.color = '#fff';
topBtn.style.cursor = 'pointer';
topBtn.style.zIndex = '1000';
document.body.appendChild(topBtn);

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

/* ==========================
   Soft Skills Ekleme
========================== */
const softSkills = ['Eleştirel Düşünce', 'Analitik Beceriler', 'İletişim', 'Takım Çalışması', 'Problem Çözme'];
const softSkillsContainer = document.createElement('div');

softSkillsContainer.className = 'techs';
softSkillsContainer.style.display = 'flex';
softSkillsContainer.style.flexWrap = 'wrap';
softSkillsContainer.style.justifyContent = 'center';
softSkillsContainer.style.marginTop = '20px';

softSkills.forEach(skill => {
  const span = document.createElement('span');
  span.textContent = skill;
  span.style.background = '#555';
  span.style.color = '#fff';
  span.style.padding = '6px 12px';
  span.style.borderRadius = '8px';
  span.style.margin = '5px';
  span.style.fontSize = '0.95em';
  span.style.display = 'flex';
  span.style.alignItems = 'center';
  softSkillsContainer.appendChild(span);
});

// Soft skills container'ı Hero bölümüne ekle
document.querySelector('#hero').appendChild(softSkillsContainer);
