/* ==========================================================================
   MAIN JAVASCRIPT - TRIẾT HỌC MÁC LÊNIN & GAME INTERACTIVE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTabNavigation();
  initSidebarDrawer();
  initSlidePresentation();
  initLotoGame();
  initMarioGame();
});

/* ==========================================================================
   1. TAB NAVIGATION CONTROLLER
   ========================================================================== */
function initTabNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const tocLinks = document.querySelectorAll('.toc-link');
  const sections = document.querySelectorAll('.app-section');

  window.switchTab = function(targetId) {
    // Update nav tabs
    navTabs.forEach(tab => {
      if (tab.dataset.target === targetId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update toc links
    tocLinks.forEach(link => {
      if (link.dataset.tab === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update sections
    sections.forEach(sec => {
      if (sec.id === `section-${targetId}`) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    // Close sidebar drawer if open
    closeSidebar();

    // Scroll to top smooth
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      switchTab(target);
    });
  });

  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.tab;
      switchTab(target);
    });
  });
}

/* ==========================================================================
   2. SIDEBAR DRAWER CONTROLLER
   ========================================================================== */
function initSidebarDrawer() {
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarToggleText = document.getElementById('sidebarToggleText');
  const tocSidebar = document.getElementById('tocSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  function openSidebar() {
    tocSidebar.classList.add('open');
    sidebarBackdrop.classList.add('open');
    sidebarToggleText.textContent = 'Ẩn mục lục';
  }

  window.closeSidebar = function() {
    tocSidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('open');
    sidebarToggleText.textContent = 'Mục Lục';
  };

  sidebarToggle.addEventListener('click', () => {
    if (tocSidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  sidebarBackdrop.addEventListener('click', closeSidebar);
}

/* ==========================================================================
   3. PRESENTATION SLIDE DECK SYSTEM
   ========================================================================== */
function initSlidePresentation() {
  let currentSlide = 1;
  const slidePages = document.querySelectorAll('.slide-page');
  const totalSlides = slidePages.length || 10;

  const currentSlideNumEl = document.getElementById('currentSlideNum');
  const totalSlideNumEl = document.getElementById('totalSlideNum');
  if (totalSlideNumEl) totalSlideNumEl.textContent = String(totalSlides).padStart(2, '0');
  const slideAccentNumEl = document.getElementById('slideAccentNum');
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const thumbBtns = document.querySelectorAll('.thumb-btn');

  // Presentation Overlay Elements
  const overlay = document.getElementById('presentationOverlay');
  const presContent = document.getElementById('presContent');
  const presCurrentNum = document.getElementById('presCurrentNum');
  const presTotalNum = document.getElementById('presTotalNum');
  const presTitleText = document.getElementById('presTitleText');
  const presExitBtn = document.getElementById('presExitBtn');
  const presPrevBtn = document.getElementById('presPrevBtn');
  const presNextBtn = document.getElementById('presNextBtn');
  const presThumbStrip = document.getElementById('presThumbStrip');

  if (presTotalNum) presTotalNum.textContent = String(totalSlides).padStart(2, '0');

  // Build Dot Strip for Fullscreen Overlay
  if (presThumbStrip && presThumbStrip.children.length === 0) {
    for (let i = 1; i <= totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = `pres-dot ${i === 1 ? 'active' : ''}`;
      dot.dataset.slide = i;
      dot.title = `Slide ${i}`;
      dot.addEventListener('click', () => goToSlide(i));
      presThumbStrip.appendChild(dot);
    }
  }

  function syncFullscreenContent() {
    if (!overlay || !overlay.classList.contains('active')) return;
    
    // Find active slide page element
    const activePage = document.querySelector(`.slide-page[data-slide="${currentSlide}"]`);
    if (activePage && presContent) {
      // Clone active slide content for full screen display
      presContent.innerHTML = '';
      const card = document.createElement('div');
      card.className = 'pres-slide-card';
      card.innerHTML = activePage.innerHTML;
      presContent.appendChild(card);

      // Extract slide title for HUD
      const titleEl = card.querySelector('.slide-title');
      if (titleEl && presTitleText) {
        presTitleText.textContent = titleEl.textContent;
      }
    }

    if (presCurrentNum) presCurrentNum.textContent = String(currentSlide).padStart(2, '0');

    // Update Dots
    const dots = presThumbStrip ? presThumbStrip.querySelectorAll('.pres-dot') : [];
    dots.forEach(dot => {
      if (parseInt(dot.dataset.slide) === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function openFullscreenPresentation() {
    if (!overlay) return;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    
    // Try browser HTML5 fullscreen API for true presentation experience
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen().catch(() => {});
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    }

    syncFullscreenContent();
  }

  function exitFullscreenPresentation() {
    if (!overlay) return;
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');

    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  function goToSlide(slideNum) {
    if (slideNum < 1 || slideNum > totalSlides) return;

    // Determine transition direction before updating currentSlide
    const direction = slideNum >= currentSlide ? 'anim-next' : 'anim-prev';

    currentSlide = slideNum;
    const formattedNum = String(currentSlide).padStart(2, '0');

    // Update Text Counters
    if (currentSlideNumEl) currentSlideNumEl.textContent = formattedNum;
    if (slideAccentNumEl) slideAccentNumEl.textContent = formattedNum;

    // Toggle Active Slide Page (with direction-aware animation)
    slidePages.forEach(page => {
      if (parseInt(page.dataset.slide) === currentSlide) {
        page.classList.remove('anim-next', 'anim-prev');
        void page.offsetWidth; // force reflow so the animation restarts
        page.classList.add('active', direction);
      } else {
        page.classList.remove('active', 'anim-next', 'anim-prev');
      }
    });

    // Toggle Active Thumbnail
    thumbBtns.forEach(btn => {
      if (parseInt(btn.dataset.slide) === currentSlide) {
        btn.classList.add('active');
        // Auto-scroll the thumbnail bar so the active item is centered
        const bar = btn.parentElement;
        if (bar) {
          const barRect = bar.getBoundingClientRect();
          const btnRect = btn.getBoundingClientRect();
          const maxScroll = bar.scrollWidth - bar.clientWidth;
          let target = bar.scrollLeft + (btnRect.left - barRect.left)
            - (bar.clientWidth / 2) + (btnRect.width / 2);
          target = Math.max(0, Math.min(target, maxScroll));
          bar.scrollLeft = target;
        }
      } else {
        btn.classList.remove('active');
      }
    });

    // Sync fullscreen presentation if open
    syncFullscreenContent();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 1) goToSlide(currentSlide - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlide < totalSlides) goToSlide(currentSlide + 1);
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', openFullscreenPresentation);
  }

  if (presExitBtn) {
    presExitBtn.addEventListener('click', exitFullscreenPresentation);
  }

  if (presPrevBtn) {
    presPrevBtn.addEventListener('click', () => {
      if (currentSlide > 1) goToSlide(currentSlide - 1);
    });
  }

  if (presNextBtn) {
    presNextBtn.addEventListener('click', () => {
      if (currentSlide < totalSlides) goToSlide(currentSlide + 1);
    });
  }

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      goToSlide(parseInt(btn.dataset.slide));
    });
  });

  // Keyboard Navigation & Shortcuts for Slides & Fullscreen
  document.addEventListener('keydown', (e) => {
    const isFullscreenActive = overlay && overlay.classList.contains('active');
    const slideSection = document.getElementById('section-slide');
    const isSlideTabActive = slideSection && slideSection.classList.contains('active');

    if (!isFullscreenActive && !isSlideTabActive && !document.fullscreenElement) return;

    if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      if (currentSlide > 1) goToSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      if (currentSlide < totalSlides) goToSlide(currentSlide + 1);
    } else if (e.key === 'Escape' && isFullscreenActive) {
      exitFullscreenPresentation();
    } else if ((e.key === 'f' || e.key === 'F') && isSlideTabActive && !isFullscreenActive) {
      openFullscreenPresentation();
    }
  });

  // Listen for browser native fullscreen exit
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && overlay && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
    }
  });
}


/* ==========================================================================
   4. LÔ TÔ MINI GAME SYSTEM (KỊCH BẢN PHÂN LOẠI TÌNH HUỐNG)
   ========================================================================== */
const lotoQuestions = [
  {
    id: 1,
    question: "Sự biến đổi khí hậu toàn cầu đang tác động trực tiếp làm thay đổi thời tiết, nước biển dâng và làm biến đổi sinh thái trên Trái Đất, bất kể con người có nhận thức được nó hay không.",
    correctType: "khach_quan",
    explain: "Đây thuộc về Biện chứng khách quan. Vì các quy luật tự nhiên và biến đổi khí hậu diễn ra độc lập với ý thức, mong muốn cá nhân của con người."
  },
  {
    id: 2,
    question: "Một bạn sinh viên quan sát hiện tượng thị trường tăng giá, phân tích mối quan hệ cung - cầu và rút ra tư duy kinh doanh phù hợp để giải quyết bài toán tài chính cá nhân.",
    correctType: "ca_hai",
    explain: "Đây là sự kết hợp giữa Biện chứng khách quan (mối quan hệ cung - cầu thị trường) phản ánh vào Biện chứng chủ quan (tư duy phân tích và rút ra bài học con người)."
  },
  {
    id: 3,
    question: "Phương pháp tư duy logic và các nguyên lý mối liên hệ phổ biến được bộ óc con người tổng kết thành các khái niệm, quy luật trong môn Triết học Mác - Lênin.",
    correctType: "chu_quan",
    explain: "Đây là Biện chứng chủ quan. Vì đây là biện chứng của tư duy, được phản ánh và hệ thống hóa thành khái niệm, lý luận trong bộ óc con người."
  },
  {
    id: 4,
    question: "Trong xã hội có chế độ tư hữu, mâu thuẫn về lợi ích kinh tế giữa giai cấp bóc lột và giai cấp bị bóc lột tự động phát sinh và dẫn đến đấu tranh giai cấp.",
    correctType: "khach_quan",
    explain: "Đây là Biện chứng khách quan. Vì mâu thuẫn giai cấp xuất hiện từ vị trí kinh tế hiện thực chứ không phụ thuộc vào ý muốn chủ quan của bất kỳ cá nhân nào."
  },
  {
    id: 5,
    question: "Một lập trình viên nghiên cứu thuật toán AI, áp dụng tư duy biện chứng để cải tiến quy trình viết code nhanh hơn và hiệu quả hơn.",
    correctType: "chu_quan",
    explain: "Đây là Biện chứng chủ quan. Phản ánh khả năng vận dụng quy luật tư duy con người để chủ động cải tiến và giải quyết vấn đề."
  },
  {
    id: 6,
    question: "Lực lượng sản xuất phát triển làm xuất hiện của cải dư thừa, từ đó chế độ tư hữu ra đời làm thay đổi kết cấu giai cấp xã hội qua từng thời kỳ lịch sử.",
    correctType: "khach_quan",
    explain: "Đây là Biện chứng khách quan của sự phát triển lịch sử xã hội, diễn ra theo quy luật vận động vật chất khách quan."
  }
];

let currentLotoIndex = 0;
let lotoScore = 0;
let lotoStreak = 0;
let lotoCompleted = 0;

function initLotoGame() {
  // Reset initial stats
  updateLotoUI();
}

function updateLotoUI() {
  document.getElementById('lotoScore').textContent = lotoScore;
  document.getElementById('lotoStreak').textContent = `${lotoStreak} 🔥`;
  document.getElementById('lotoProgress').textContent = `${lotoCompleted} / ${lotoQuestions.length}`;
}

window.drawNextLotoTicket = function() {
  if (lotoCompleted >= lotoQuestions.length) {
    // Reset or loop
    lotoCompleted = 0;
    currentLotoIndex = 0;
  }

  const q = lotoQuestions[currentLotoIndex];
  document.getElementById('lotoTicketNo').textContent = `VÉ SỐ #${q.id}`;
  document.getElementById('lotoQuestionText').textContent = q.question;

  // Show choices, hide feedback
  document.getElementById('lotoChoices').classList.remove('hidden');
  document.getElementById('lotoFeedbackBox').classList.add('hidden');
};

window.checkLotoAnswer = function(selectedType) {
  const q = lotoQuestions[currentLotoIndex];
  const isCorrect = (selectedType === q.correctType);

  const feedbackBox = document.getElementById('lotoFeedbackBox');
  const resultBadge = document.getElementById('lotoResultBadge');
  const explainText = document.getElementById('lotoExplainText');

  if (isCorrect) {
    lotoScore += 10;
    lotoStreak += 1;
    resultBadge.className = 'result-badge success';
    resultBadge.textContent = 'ĐÚNG RỒI! (+10 ĐIỂM)';
  } else {
    lotoStreak = 0;
    resultBadge.className = 'result-badge error';
    resultBadge.textContent = 'CHƯA CHÍNH XÁC!';
  }

  lotoCompleted += 1;
  currentLotoIndex = (currentLotoIndex + 1) % lotoQuestions.length;

  explainText.textContent = q.explain;

  document.getElementById('lotoChoices').classList.add('hidden');
  feedbackBox.classList.remove('hidden');

  updateLotoUI();
};

/* ==========================================================================
   5. MARIO GAME STANDALONE INTEGRATION ENGINE
   ========================================================================== */
const marioRooms = [
  {
    title: "Phòng 1: Khái niệm & Biện chứng",
    questions: [
      {
        text: "Phương pháp tư duy biện chứng nhìn nhận sự vật trong trạng thái nào?",
        answers: [
          "Trong mối liên hệ phổ biến, vận động và phát triển không ngừng",
          "Cô lập, tĩnh tại và không bao giờ thay đổi",
          "Chỉ tồn tại trong ý nghĩ, không có thực",
          "Tùy thuộc hoàn toàn vào may mắn"
        ],
        correct: 0,
        explain: "Tư duy biện chứng xem xét sự vật trong mối liên hệ, vận động và biến đổi khách quan."
      },
      {
        text: "Biện chứng chủ quan là gì?",
        answers: [
          "Là biện chứng của tư duy con người, phản ánh biện chứng khách quan",
          "Là sự biến đổi của thời tiết và vũ trụ",
          "Là các quy luật vật lý tự nhiên",
          "Là suy nghĩ ngẫu nhiên không có quy luật"
        ],
        correct: 0,
        explain: "Biện chứng chủ quan là tư duy, khái niệm được phản ánh vào bộ óc con người."
      }
    ]
  },
  {
    title: "Phòng 2: Phép biện chứng duy vật",
    questions: [
      {
        text: "Phép biện chứng duy vật do ai sáng lập và phát triển?",
        answers: [
          "K. Mác, Ph. Ăng-ghen và V.I. Lênin",
          "Socrates và Plato",
          "Newton và Einstein",
          "Adam Smith"
        ],
        correct: 0,
        explain: "Phép biện chứng duy vật do Mác & Ăng-ghen sáng lập, Lênin phát triển."
      },
      {
        text: "Nguyên lý nào là cột trụ của phép biện chứng duy vật?",
        answers: [
          "Nguyên lý về mối liên hệ phổ biến và Nguyên lý về sự phát triển",
          "Nguyên lý bảo toàn năng lượng",
          "Nguyên lý bất biến của vũ trụ",
          "Nguyên lý ngẫu nhiên"
        ],
        correct: 0,
        explain: "Hai nguyên lý cơ bản nhất là mối liên hệ phổ biến và sự phát triển."
      }
    ]
  },
  {
    title: "Phòng 3: Khái niệm Giai cấp",
    questions: [
      {
        text: "Theo V.I. Lênin, giai cấp được định nghĩa chủ yếu dựa vào yếu tố nào?",
        answers: [
          "Vị trí và quan hệ sở hữu tư liệu sản xuất trong xã hội",
          "Sở thích và phong cách thời trang",
          "Độ tuổi và giới tính",
          "Sự nổi tiếng trên truyền thông"
        ],
        correct: 0,
        explain: "Giai cấp gắn với vị trí trong hệ thống sản xuất và sở hữu tư liệu sản xuất."
      },
      {
        text: "Nguồn gốc sâu xa dẫn đến sự ra đời của giai cấp là gì?",
        answers: [
          "Lực lượng sản xuất phát triển tạo của cải dư thừa và xuất hiện chế độ tư hữu",
          "Do con người thích chia rẽ nhau",
          "Do thiên tai bão lũ",
          "Do chiếu chỉ của nhà vua"
        ],
        correct: 0,
        explain: "Sự ra đời của chế độ tư hữu về tư liệu sản xuất là nguồn gốc trực tiếp hình thành giai cấp."
      }
    ]
  },
  {
    title: "Phòng 4: Kết cấu Xã hội – Giai cấp",
    questions: [
      {
        text: "Giai cấp nào sau đây là giai cấp cơ bản trong xã hội tư bản?",
        answers: [
          "Tư sản và Vô sản",
          "Chủ nô và Nô lệ",
          "Địa chủ và Nông dân",
          "Thợ thủ công nhỏ"
        ],
        correct: 0,
        explain: "Trong xã hội tư bản, Tư sản và Vô sản là 2 giai cấp cơ bản."
      },
      {
        text: "Tầng lớp nào đóng vai trò trung gian trong kết cấu xã hội?",
        answers: [
          "Trí thức, giới tu hành và nhóm nghề nghiệp đặc thù",
          "Giai cấp thống trị",
          "Giai cấp nô lệ",
          "Các hoàng tộc cổ đại"
        ],
        correct: 0,
        explain: "Trí thức là tầng lớp xã hội trung gian có vai trò quan trọng trong đời sống văn hóa tinh thần."
      }
    ]
  },
  {
    title: "Phòng 5: Đấu tranh Giai cấp & Giải cứu",
    questions: [
      {
        text: "Đấu tranh giai cấp giữ vai trò gì đối với sự phát triển của xã hội có giai cấp?",
        answers: [
          "Là động lực trực tiếp của sự phát triển xã hội",
          "Là nguyên nhân gây kìm hãm xã hội",
          "Không có ảnh hưởng gì",
          "Chỉ xảy ra trong quá khứ"
        ],
        correct: 0,
        explain: "Đấu tranh giai cấp thúc đẩy thay đổi hình thái kinh tế - xã hội lên nấc thang cao hơn."
      },
      {
        text: "Trong xã hội số hiện đại, bất bình đẳng giai cấp thể hiện qua khía cạnh nào?",
        answers: [
          "Sở hữu dữ liệu, tri thức, hạ tầng công nghệ và kỹ năng số",
          "Chỉ là việc ai mua máy tính đắt hơn",
          "Không còn bất bình đẳng nào",
          "Chỉ ở điểm số trò chơi"
        ],
        correct: 0,
        explain: "Xã hội số tạo ra khoảng cách tiếp cận công nghệ và quyền kiểm soát dữ liệu tri thức."
      }
    ]
  }
];

function initMarioGame() {
  let playerName = "";
  let currentRoom = 0;
  let currentQ = 0;
  let lives = 5;
  let timerSec = 0;
  let timerInterval = null;

  const startBtn = document.getElementById('startButton');
  const nameInput = document.getElementById('playerNameInput');
  const homeScreen = document.getElementById('homeScreen');
  const gameShell = document.getElementById('marioGameShell');

  const roomText = document.getElementById('roomText');
  const questionText = document.getElementById('questionText');
  const timerText = document.getElementById('timerText');
  const livesText = document.getElementById('livesText');
  const marioEl = document.getElementById('mario');

  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const feedbackEl = document.getElementById('feedback');
  const nextBtn = document.getElementById('nextButton');
  const restartBtn = document.getElementById('restartButton');

  loadLeaderboard();

  startBtn.addEventListener('click', () => {
    playerName = nameInput.value.trim() || "Người chơi";
    homeScreen.classList.add('hidden');
    gameShell.classList.remove('hidden');

    currentRoom = 0;
    currentQ = 0;
    lives = 5;
    timerSec = 0;

    startTimer();
    renderQuestion();
  });

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timerSec++;
      const mins = Math.floor(timerSec / 60);
      const secs = timerSec % 60;
      timerText.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }, 1000);
  }

  function renderQuestion() {
    const room = marioRooms[currentRoom];
    const qData = room.questions[currentQ];

    document.getElementById('roomTitle').textContent = room.title;
    roomText.textContent = `${currentRoom + 1} / ${marioRooms.length}`;
    questionText.textContent = `${currentQ + 1} / ${room.questions.length}`;
    livesText.textContent = "♥ ".repeat(lives);

    // Update Mario Position smoothly across track
    const totalStep = marioRooms.length * 2;
    const currentStep = currentRoom * 2 + currentQ;
    const percent = Math.min(85, 10 + (currentStep / totalStep) * 75);
    marioEl.style.left = `${percent}%`;

    questionEl.textContent = qData.text;
    answersEl.innerHTML = '';
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';
    nextBtn.classList.add('hidden');

    qData.answers.forEach((ans, idx) => {
      const btn = document.createElement('button');
      btn.textContent = `${String.fromCharCode(65 + idx)}. ${ans}`;
      btn.addEventListener('click', () => selectAnswer(idx, qData.correct, qData.explain));
      answersEl.appendChild(btn);
    });
  }

  function selectAnswer(selectedIdx, correctIdx, explain) {
    const btns = answersEl.querySelectorAll('button');
    btns.forEach(b => b.disabled = true);

    if (selectedIdx === correctIdx) {
      btns[selectedIdx].classList.add('correct');
      feedbackEl.textContent = `Chính xác! ${explain}`;
      feedbackEl.className = 'feedback correct';
      nextBtn.classList.remove('hidden');
    } else {
      btns[selectedIdx].classList.add('wrong');
      btns[correctIdx].classList.add('correct');
      lives--;
      livesText.textContent = "♥ ".repeat(Math.max(0, lives));

      if (lives <= 0) {
        feedbackEl.textContent = `Bạn đã hết mạng! Hãy chơi lại để thử sức.`;
        feedbackEl.className = 'feedback wrong';
      } else {
        feedbackEl.textContent = `Chưa đúng. ${explain}`;
        feedbackEl.className = 'feedback wrong';
        nextBtn.classList.remove('hidden');
      }
    }
  }

  nextBtn.addEventListener('click', () => {
    const room = marioRooms[currentRoom];
    if (currentQ < room.questions.length - 1) {
      currentQ++;
      renderQuestion();
    } else if (currentRoom < marioRooms.length - 1) {
      currentRoom++;
      currentQ = 0;
      renderQuestion();
    } else {
      // Victory!
      clearInterval(timerInterval);
      saveScore(playerName, timerSec);
      alert(`Chúc mừng ${playerName}! Bạn đã vượt qua 5 phòng Triết học và giải cứu thành công Công chúa Peach!`);
      gameShell.classList.add('hidden');
      homeScreen.classList.remove('hidden');
      loadLeaderboard();
    }
  });

  restartBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    gameShell.classList.add('hidden');
    homeScreen.classList.remove('hidden');
  });

  async function saveScore(name, time) {
    // 1. Try backend API first
    try {
      const response = await fetch('/api/leaderboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, time })
      });
      if (response.ok) {
        console.log('Score saved to Upstash Redis successfully.');
        return;
      }
    } catch (e) {
      console.warn('Leaderboard API not available, falling back to LocalStorage:', e);
    }

    // 2. Fallback to localStorage
    let board = JSON.parse(localStorage.getItem('mario_rank') || '[]');
    board.push({ name, time });
    board.sort((a, b) => a.time - b.time);
    localStorage.setItem('mario_rank', JSON.stringify(board.slice(0, 5)));
  }

  async function loadLeaderboard() {
    const body = document.getElementById('homeRankBody');
    if (!body) return;
    body.innerHTML = '<tr><td colspan="3">Đang tải bảng xếp hạng...</td></tr>';

    let board = [];
    
    // 1. Try backend API first
    try {
      const response = await fetch('/api/leaderboard');
      if (response.ok) {
        const data = await response.json();
        if (data && Array.isArray(data.rows)) {
          board = data.rows;
        }
      }
    } catch (e) {
      console.warn('Leaderboard API failed to load, falling back to LocalStorage:', e);
      // Fallback
      board = JSON.parse(localStorage.getItem('mario_rank') || '[]');
    }

    body.innerHTML = '';
    if (board.length === 0) {
      body.innerHTML = '<tr><td colspan="3">Chưa có lượt chơi nào</td></tr>';
      return;
    }

    // Display top 5
    board.slice(0, 5).forEach((item, idx) => {
      const mins = Math.floor(item.time / 60);
      const secs = item.time % 60;
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>#${idx + 1}</td><td>${item.name}</td><td>${mins}:${secs < 10 ? '0' : ''}${secs}</td>`;
      body.appendChild(tr);
    });
  }

  const resetRankBtn = document.getElementById('resetRankButton');
  if (resetRankBtn) {
    resetRankBtn.addEventListener('click', async () => {
      const adminCode = prompt('Nhập mã xác nhận của Admin để reset bảng xếp hạng:');
      if (adminCode === null) return; // Cancelled

      // 1. Try API first
      try {
        const response = await fetch('/api/leaderboard', {
          method: 'DELETE',
          headers: {
            'x-admin-code': adminCode
          }
        });
        
        if (response.ok) {
          alert('Đã reset bảng xếp hạng trực tuyến thành công!');
          loadLeaderboard();
          return;
        } else {
          const errData = await response.json();
          alert(`Lỗi: ${errData.error || 'Reset thất bại.'}`);
        }
      } catch (e) {
        console.warn('API reset failed, resetting local storage:', e);
        localStorage.removeItem('mario_rank');
        alert('Đã reset bảng xếp hạng cục bộ (LocalStorage).');
        loadLeaderboard();
      }
    });
  }
}
