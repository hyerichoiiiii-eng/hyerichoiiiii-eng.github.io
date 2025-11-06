// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: '',
    image: 'img/portfolio/p1.jpg',
    description: ''
  },
    project2: {
    title: '',
    image: 'img/portfolio/p2.jpg',
    description: ''
  },
  project3: {
    title: '',
    image: 'img/portfolio/p3.jpg',
    description: ''
  },
  project4: {
    title: '',
    image: 'img/portfolio/p4.jpg',
    description: ''
  },
  project5: {
    title: '',
    image: 'img/portfolio/p5.jpg',
    description: ''
  },
  project6: {
    title: '',
    image: 'img/portfolio/p6.jpg',
    description: ''
  }
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});