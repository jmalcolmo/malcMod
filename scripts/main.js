document.addEventListener('DOMContentLoaded', () => {
  const projects = Array.from(document.querySelectorAll('.project'));
  const modal = document.getElementById('modal');
  const modalNum = document.getElementById('modal-num');
  const modalTitle = document.getElementById('modal-title');
  const modalMeta = document.getElementById('modal-meta');
  const modalGallery = document.getElementById('modal-gallery');
  const closeButtons = Array.from(document.querySelectorAll('[data-close]'));
  const navButtons = Array.from(document.querySelectorAll('[data-nav]'));
  let currentIndex = 0;

  function updateActiveProject(index) {
    projects.forEach((project, idx) => {
      project.classList.toggle('is-active', idx === index);
    });
  }

  function getGalleryImages(projectId) {
    const basePath = `images/projects/project-${projectId}`;
    return [1, 2, 3, 4].map((num) => `${basePath}/${String(num).padStart(2, '0')}.png`);
  }

  function openModal(index) {
    currentIndex = index;
    const project = projects[currentIndex];
    const projectId = project.dataset.project;
    const title = project.dataset.title;
    const year = project.dataset.year;
    const tag = project.dataset.tag;

    modalNum.textContent = projectId;
    modalTitle.textContent = title;
    modalMeta.textContent = `${tag} · ${year}`;
    modalGallery.innerHTML = '';

    getGalleryImages(projectId).forEach((imagePath) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = imagePath;
      img.alt = `${title} gallery image`;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.onerror = () => item.remove();
      item.appendChild(img);
      modalGallery.appendChild(item);
    });

    modal.classList.add('is-open');
    document.body.classList.add('modal-open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    modal.setAttribute('aria-hidden', 'true');
  }

  function showNextProject(delta) {
    const nextIndex = (currentIndex + delta + projects.length) % projects.length;
    openModal(nextIndex);
  }

  if (projects.length) {
    updateActiveProject(0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const project = entry.target;
        const index = projects.indexOf(project);
        if (entry.isIntersecting) {
          project.classList.add('is-active');
          currentIndex = index;
        }
      });
    }, { threshold: 0.35 });

    projects.forEach((project) => observer.observe(project));
  }

  projects.forEach((project, index) => {
    const button = project.querySelector('.project__cta');
    const image = project.querySelector('.project__img');
    if (button) {
      button.addEventListener('click', () => openModal(index));
    }
    if (image) {
      image.addEventListener('click', () => openModal(index));
    }
  });

  closeButtons.forEach((button) => button.addEventListener('click', closeModal));
  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dir = button.dataset.nav;
      if (dir === 'prev') {
        showNextProject(-1);
      } else if (dir === 'next') {
        showNextProject(1);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowRight') showNextProject(1);
    if (event.key === 'ArrowLeft') showNextProject(-1);
  });
});
