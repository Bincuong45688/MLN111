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
function initMarioGame() {
  console.log("Mario Game is running independently inside the embedded iframe.");

  const fsBtn = document.getElementById('marioFullscreenBtn');
  const iframe = document.getElementById('marioIframe');

  if (fsBtn && iframe) {
    fsBtn.addEventListener('click', () => {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    });
  }
}
