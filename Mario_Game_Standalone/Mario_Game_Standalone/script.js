const rooms = [
  {
    title: "Phòng 1: Nhận thức Biện chứng",
    questions: [
      {
        text: "Một sinh viên đi học trễ 20 phút. Sau khi biết thêm rằng hôm đó trời mưa lớn, xe buýt thay đổi lịch trình và bạn ấy đã xuất phát sớm, cách đánh giá nào phù hợp nhất với cách nhìn biện chứng?",
        answers: [
          "Không thể đánh giá hành vi đi trễ vì mọi nguyên nhân đều có thể được chấp nhận",
          "Vẫn kết luận sinh viên thiếu ý thức vì kết quả cuối cùng là đi học trễ",
          "Xem xét việc đi trễ trong các mối liên hệ cụ thể và quá trình dẫn đến nó, đồng thời không phủ nhận trách nhiệm cá nhân nếu có",
          "Chỉ cần xác định một nguyên nhân quan trọng nhất rồi bỏ qua các yếu tố còn lại"
        ],
        correct: 2,
        explain: "Cách nhìn biện chứng yêu cầu xem xét sự vật trong mối liên hệ, sự tác động và quá trình vận động, biến đổi, không đồng nghĩa với biện minh vô điều kiện."
      },
      {
        text: "Trong tình huống cây bị héo, phát biểu nào dưới đây thể hiện đầy đủ nhất điều mà cách nhìn biện chứng yêu cầu?",
        answers: [
          "Cây héo có thể do nhiều nguyên nhân khác nhau nên không thể xác định nguyên nhân nào",
          "Cần quan sát thêm các yếu tố như nước, đất, rễ, ánh sáng, nhiệt độ và xem xét quá trình thay đổi theo thời gian",
          "Chỉ cần kiểm tra đất đang khô hay ướt vì nước là yếu tố trực tiếp nhất",
          "Không nên đưa ra bất kỳ kết luận nào vì mọi sự vật đều thay đổi liên tục"
        ],
        correct: 1,
        explain: "Điểm cốt lõi của biện chứng là xem xét sự vật trong mạng lưới các mối liên hệ và quá trình vận động, biến đổi tự thân của nó."
      }
    ]
  },
  {
    title: "Phòng 2: Biện chứng Khách quan trong thực tế",
    questions: [
      {
        text: "Một doanh nghiệp thấy doanh số giảm 3 tháng liên tiếp và lập tức kết luận 'nhân viên bán hàng kém hiệu quả'. Cách xử lý nào phù hợp nhất với cách nhìn biện chứng?",
        answers: [
          "Giữ nguyên kết luận vì doanh số giảm là kết quả trực tiếp của hoạt động bán hàng",
          "Chỉ đánh giá lại năng lực của đội ngũ bán hàng vì đây là yếu tố nội bộ dễ kiểm soát",
          "Xem xét đồng thời các yếu tố nhu cầu thị trường, giá cả, đối thủ, chất lượng sản phẩm và sự biến động của chúng trước khi kết luận",
          "Không nên đưa ra bất kỳ kết luận nào vì doanh số chịu ảnh hưởng của quá nhiều yếu tố"
        ],
        correct: 2,
        explain: "Tư duy biện chứng đòi hỏi đánh giá sự vật toàn diện qua các mối liên hệ tác động lẫn nhau chứ không nhìn phiến diện một khía cạnh lẻ tẻ."
      },
      {
        text: "Hiện tượng sạt lở đất xảy ra do sự kết hợp của mưa lớn kéo dài, địa hình dốc và thảm thực vật bị chặt phá. Đây là biểu hiện của loại biện chứng nào?",
        answers: [
          "Biện chứng chủ quan",
          "Biện chứng khách quan",
          "Cả biện chứng khách quan và chủ quan",
          "Sự tĩnh tại của tự nhiên"
        ],
        correct: 1,
        explain: "Sạt lở đất là sự vận động, tác động qua lại của các yếu tố vật lý tự nhiên bên ngoài độc lập với ý thức con người, nên thuộc biện chứng khách quan."
      }
    ]
  },
  {
    title: "Phòng 3: Sự chuyển hóa giữa Khách quan & Chủ quan",
    questions: [
      {
        text: "Một sinh viên đi học muộn. Bạn thay đổi đánh giá từ 'lười biếng ngủ nướng' sang 'thông cảm' sau khi biết đường bị ngập sâu và kẹt xe. Sự chuyển biến suy nghĩ này thuộc về:",
        answers: [
          "Biện chứng khách quan",
          "Biện chứng chủ quan",
          "Cả biện chứng khách quan và chủ quan",
          "Không thuộc loại biện chứng nào"
        ],
        correct: 1,
        explain: "Mưa ngập đường là hiện tượng khách quan, nhưng sự chuyển biến nhận thức trong não bộ của bạn để phản ánh hiện thực đó chính là biện chứng chủ quan."
      },
      {
        text: "Xét 2 hiện tượng: (1) App xe công nghệ tự tăng giá do trời mưa ngập thiếu tài xế. (2) Người dùng nhận ra tăng giá là hợp lý nên quyết định chờ tạnh mưa. Chúng tương ứng với:",
        answers: [
          "(1) Biện chứng chủ quan – (2) Biện chứng khách quan",
          "Cả (1) và (2) đều là Biện chứng khách quan",
          "(1) Biện chứng khách quan – (2) Biện chứng chủ quan",
          "Cả (1) và (2) đều là Biện chứng chủ quan"
        ],
        correct: 2,
        explain: "Sự thay đổi giá cước ngoài thực tế (1) là biện chứng khách quan. Sự nhận thức và ra quyết định trong suy nghĩ người dùng (2) là biện chứng chủ quan."
      }
    ]
  },
  {
    title: "Phòng 4: Đặc trưng của Phép biện chứng Duy vật",
    questions: [
      {
        text: "Chốt lại, điểm khác biệt cốt lõi nhất giữa biện chứng khách quan (BCKQ) và biện chứng chủ quan (BCCQ) là gì?",
        answers: [
          "BCKQ tồn tại trong tư duy, BCCQ tồn tại ngoài thực tế",
          "BCKQ luôn luôn đúng, BCCQ đôi khi bị sai lệch",
          "BCCQ quyết định sự tồn tại của BCKQ",
          "BCKQ độc lập với ý thức con người, BCCQ là sự phản ánh BCKQ đó vào trong tư duy"
        ],
        correct: 3,
        explain: "Biện chứng khách quan là hiện thực bên ngoài độc lập với ta. Biện chứng chủ quan là tư duy phản chiếu hiện thực đó trong đầu óc."
      },
      {
        text: "Phép biện chứng duy vật là sự thống nhất hữu cơ giữa thế giới quan duy vật và phương pháp luận biện chứng.",
        answers: [
          "Đúng",
          "Sai"
        ],
        correct: 0,
        explain: "Đặc điểm nổi bật của phép biện chứng duy vật là sự kết hợp khăng khít giữa thế giới quan duy vật khoa học và phương pháp luận biện chứng."
      }
    ]
  },
  {
    title: "Phòng 5: Học thuyết biện chứng kinh điển",
    questions: [
      {
        text: "Theo V.I. Lênin, 'hạt nhân' của phép biện chứng là học thuyết về:",
        answers: [
          "Sự vận động của vật chất",
          "Mối liên hệ phổ biến",
          "Sự thống nhất của các mặt đối lập",
          "Sự phát triển của tư duy"
        ],
        correct: 2,
        explain: "Lênin khẳng định hạt nhân của phép biện chứng chính là học thuyết về sự thống nhất và đấu tranh của các mặt đối lập."
      },
      {
        text: "Điền từ vào ô trống: 'Phép biện chứng là khoa học về những quy luật phổ biến của sự vận động và sự __________ của tự nhiên, xã hội và tư duy.' (Ph. Ăng-ghen)",
        answers: [
          "tư duy",
          "phát triển",
          "đa dạng",
          "lặp lại"
        ],
        correct: 1,
        explain: "Ăng-ghen định nghĩa phép biện chứng là khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, xã hội và tư duy."
      }
    ]
  }
];

const state = {
  room: 0,
  question: 0,
  lives: 5,
  locked: false,
  finished: false,
  transitioning: false,
  enteringRoom: false,
  sceneTimer: null,
  roomTimer: null,
  finishTimer: null,
  entryTimer: null,
  answerTimer: null,
  giftTimer: null,
  castleTimer: null,
  fireworkTimer: null,
  clockTimer: null
};

const sceneNames = [
  "Khu vườn nhận thức",
  "Hầm gạch đấu tranh",
  "Phòng công nghệ số",
  "Đêm lịch sử",
  "Lâu đài công chúa"
];

const stage = document.getElementById("stage");
const sceneLabel = document.getElementById("sceneLabel");
const roomsElement = document.getElementById("rooms");
const mario = document.getElementById("mario");
const princess = document.getElementById("princess");
const roomText = document.getElementById("roomText");
const questionText = document.getElementById("questionText");
const timerText = document.getElementById("timerText");
const livesText = document.getElementById("livesText");
const roomProgressText = document.getElementById("roomProgressText");
const roomTimerText = document.getElementById("roomTimerText");
const roomLivesText = document.getElementById("roomLivesText");
const roomTitle = document.getElementById("roomTitle");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const startButton = document.getElementById("startButton");
const playerNameInput = document.getElementById("playerNameInput");
const resetRankButton = document.getElementById("resetRankButton");
const homeRankBody = document.getElementById("homeRankBody");
const endRankPanel = document.getElementById("endRankPanel");
const endRankBody = document.getElementById("endRankBody");
const LEADERBOARD_KEY = "marioPrincessLeaderboard";
const LEADERBOARD_API = "/api/leaderboard";
const LOCAL_ADMIN_RESET_CODE = "admin";
let gameStarted = false;
let currentPlayer = "";
let runStartTime = 0;
let scoreSaved = false;

function createRooms() {
  rooms.forEach((_, index) => {
    const room = document.createElement("div");
    room.className = "room";
    room.dataset.room = index + 1;
    room.style.left = `${index * 18 + 1}%`;
    roomsElement.appendChild(room);
  });
}

function render() {
  const currentRoom = rooms[state.room];
  const currentQuestion = currentRoom.questions[state.question];

  setScene(state.room);
  document.body.classList.add("room-active");
  document.body.classList.remove("room-entry");
  stage.classList.add("in-room");
  stage.classList.remove("entering-room", "rescue-room", "castle-ready", "gift-scene", "carry-scene", "castle-walk", "firework-scene");
  roomText.textContent = `${state.room + 1} / ${rooms.length}`;
  questionText.textContent = `${state.question + 1} / 2`;
  updateLifeDisplays();
  updateRoomProgress();
  roomTitle.textContent = `Câu ${getGlobalQuestionNumber()}`;
  question.textContent = currentQuestion.text;
  feedback.textContent = "";
  nextButton.classList.add("hidden");
  state.locked = false;
  state.transitioning = false;
  state.enteringRoom = false;
  stage.classList.remove("transitioning");
  mario.classList.remove("walking", "entering");

  mario.style.left = "13%";
  princess.classList.toggle("saved", state.finished);

  [...roomsElement.children].forEach((room, index) => {
    room.classList.toggle("active", index === state.room && !state.finished);
    room.classList.toggle("cleared", index < state.room || state.finished);
    room.classList.remove("opening");
  });

  answers.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(index, button));
    answers.appendChild(button);
  });
}

function startRoomEntry(roomIndex) {
  clearPendingTimers();
  state.room = roomIndex;
  state.question = 0;
  state.locked = true;
  state.transitioning = true;
  state.enteringRoom = true;
  state.finished = false;

  setScene(state.room);
  document.body.classList.remove("room-active");
  document.body.classList.add("room-entry");
  stage.classList.add("entering-room");
  stage.classList.remove("in-room", "transitioning", "rescue-room", "castle-ready", "gift-scene", "carry-scene", "castle-walk", "firework-scene");
  mario.classList.remove("entering");
  mario.classList.add("walking");
  mario.style.left = `${state.room * 18 + 7}%`;
  princess.classList.remove("saved");

  roomText.textContent = `${state.room + 1} / ${rooms.length}`;
  questionText.textContent = "Chuẩn bị";
  updateLifeDisplays();
  roomProgressText.textContent = `Phòng ${state.room + 1} · Đang mở cửa`;
  roomTitle.textContent = rooms[state.room].title;
  question.textContent = "Mario đang mở cửa bước vào căn phòng...";
  feedback.textContent = "Căn phòng sẽ hiện ra rồi câu hỏi mới xuất hiện.";
  answers.innerHTML = "";
  nextButton.classList.add("hidden");

  [...roomsElement.children].forEach((room, index) => {
    room.classList.toggle("active", index === state.room);
    room.classList.toggle("cleared", index < state.room);
    room.classList.toggle("opening", index === state.room);
  });

  state.entryTimer = setTimeout(() => {
    render();
  }, 1250);
}

function setScene(roomIndex) {
  stage.classList.remove("theme-1", "theme-2", "theme-3", "theme-4", "theme-5");
  stage.classList.add(`theme-${roomIndex + 1}`);
  sceneLabel.textContent = sceneNames[roomIndex];
}

function updateLifeDisplays() {
  const hearts = "♥ ".repeat(state.lives).trim() || "0";
  livesText.textContent = hearts;
  roomLivesText.textContent = hearts;
}

function updateRoomProgress() {
  roomProgressText.textContent = `Phòng ${state.room + 1} · Câu ${state.question + 1}`;
}

function getGlobalQuestionNumber() {
  return state.room * 2 + state.question + 1;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.max(0, Math.round(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateRunTimer() {
  const elapsed = runStartTime ? Date.now() - runStartTime : 0;
  const text = formatTime(elapsed);
  timerText.textContent = text;
  roomTimerText.textContent = text;
}

function startRunTimer() {
  clearInterval(state.clockTimer);
  updateRunTimer();
  state.clockTimer = setInterval(updateRunTimer, 500);
}

function stopRunTimer() {
  clearInterval(state.clockTimer);
  state.clockTimer = null;
  updateRunTimer();
}

function getLeaderboard() {
  try {
    const saved = JSON.parse(localStorage.getItem(LEADERBOARD_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveLeaderboard(rows) {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(rows));
}

async function fetchOnlineLeaderboard() {
  const response = await fetch(LEADERBOARD_API);

  if (!response.ok) {
    throw new Error("Cannot load online leaderboard.");
  }

  const payload = await response.json();
  return Array.isArray(payload.rows) ? payload.rows : [];
}

async function submitOnlineScore(row) {
  const response = await fetch(LEADERBOARD_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(row)
  });

  if (!response.ok) {
    throw new Error("Cannot save online score.");
  }

  const payload = await response.json();
  return Array.isArray(payload.rows) ? payload.rows : [];
}

async function resetOnlineLeaderboard(code) {
  const response = await fetch(LEADERBOARD_API, {
    method: "DELETE",
    headers: {
      "x-admin-code": code
    }
  });

  if (!response.ok) {
    const error = new Error("Cannot reset online leaderboard.");
    error.status = response.status;
    throw error;
  }
}

async function resetLeaderboardByAdmin() {
  const code = window.prompt("Nhập mã admin để reset bảng xếp hạng:");

  if (code === null) return;

  const adminCode = code.trim();

  if (!adminCode) {
    window.alert("Bạn chưa nhập mã admin.");
    return;
  }

  const confirmed = window.confirm("Reset bảng xếp hạng sẽ xóa toàn bộ người chơi hiện tại. Bạn chắc chắn muốn xóa?");

  if (!confirmed) return;

  try {
    await resetOnlineLeaderboard(adminCode);
    localStorage.removeItem(LEADERBOARD_KEY);
    renderLeaderboard([]);
    window.alert("Đã reset bảng xếp hạng online. Phiên mới có thể bắt đầu.");
  } catch (error) {
    if (error.status === 403 || adminCode !== LOCAL_ADMIN_RESET_CODE) {
      window.alert("Sai mã admin. Bảng xếp hạng chưa bị xóa.");
      return;
    }

    localStorage.removeItem(LEADERBOARD_KEY);
    renderLeaderboard([]);
    window.alert("Đã reset bảng trên máy này. Nếu đã deploy Vercel, hãy kiểm tra lại cấu hình Redis online.");
  }
}

function createEmptyRankRow(body) {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = 3;
  cell.className = "empty-rank";
  cell.textContent = "Chưa có lượt chơi nào.";
  row.appendChild(cell);
  body.appendChild(row);
}

function fillRankTable(body, rows) {
  body.innerHTML = "";

  if (!rows.length) {
    createEmptyRankRow(body);
    return;
  }

  rows.forEach((row, index) => {
    const tableRow = document.createElement("tr");
    const rankCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const timeCell = document.createElement("td");

    rankCell.textContent = `#${index + 1}`;
    nameCell.textContent = row.name;
    timeCell.textContent = formatTime(row.time);

    tableRow.append(rankCell, nameCell, timeCell);
    body.appendChild(tableRow);
  });
}

function getSortedLeaderboardRows(rows) {
  return rows
    .filter(row => row && typeof row.name === "string" && Number.isFinite(row.time))
    .sort((a, b) => a.time - b.time)
    .slice(0, 10);
}

function renderLeaderboard(rows = getLeaderboard()) {
  const sortedRows = getSortedLeaderboardRows(rows);

  fillRankTable(homeRankBody, sortedRows);
  fillRankTable(endRankBody, sortedRows);
}

async function syncLeaderboard() {
  try {
    const rows = await fetchOnlineLeaderboard();
    saveLeaderboard(rows);
    renderLeaderboard(rows);
  } catch {
    renderLeaderboard();
  }
}

function saveCurrentScore() {
  if (scoreSaved || !runStartTime) return null;

  const elapsed = Date.now() - runStartTime;
  stopRunTimer();
  const row = {
    name: currentPlayer || "Người chơi",
    time: elapsed,
    finishedAt: new Date().toISOString()
  };
  const rows = getLeaderboard();
  rows.push(row);
  rows.sort((a, b) => a.time - b.time);
  saveLeaderboard(rows.slice(0, 50));
  scoreSaved = true;
  renderLeaderboard(rows);
  submitOnlineScore(row)
    .then(onlineRows => {
      saveLeaderboard(onlineRows);
      renderLeaderboard(onlineRows);
    })
    .catch(() => {
      renderLeaderboard(rows);
    });
  endRankPanel.classList.remove("hidden");
  return elapsed;
}

function chooseAnswer(index, selectedButton) {
  if (state.locked || state.finished || state.transitioning || state.enteringRoom) return;

  const currentQuestion = rooms[state.room].questions[state.question];
  const buttons = [...answers.querySelectorAll("button")];
  const isCorrect = index === currentQuestion.correct;

  state.locked = true;

  if (isCorrect) {
    buttons.forEach((button, buttonIndex) => {
      button.disabled = true;
      if (buttonIndex === currentQuestion.correct) button.classList.add("correct");
    });
    feedback.textContent = `Đúng rồi! ${currentQuestion.explain}`;
    nextButton.classList.add("hidden");
    state.answerTimer = setTimeout(advanceAfterCorrectAnswer, 900);
    return;
  }

  selectedButton.classList.add("wrong");
  selectedButton.disabled = true;
  state.lives -= 1;
  updateLifeDisplays();

  if (state.lives <= 0) {
    feedback.textContent = "Mario đã hết 5 mạng. Trò chơi quay lại phòng 1.";
    nextButton.textContent = "Bắt đầu lại";
    nextButton.classList.remove("hidden");
    return;
  }

  feedback.textContent = "Sai rồi, Mario mất 1 mạng. Hãy chọn lại đáp án khác.";
  nextButton.classList.add("hidden");
  state.locked = false;
}

function isLastQuestion() {
  return state.room === rooms.length - 1 && state.question === rooms[state.room].questions.length - 1;
}

function advanceAfterCorrectAnswer() {
  state.answerTimer = null;

  if (state.lives <= 0) {
    resetGame();
    return;
  }

  if (isLastQuestion()) {
    finishGame();
    return;
  }

  if (state.question === 0) {
    state.question = 1;
    render();
  } else {
    moveToNextRoom();
  }
}

function goNext() {
  if (state.transitioning || state.enteringRoom) return;

  if (state.lives <= 0) {
    resetGame();
    return;
  }

  if (state.finished) {
    returnToHome();
    return;
  }

  const currentQuestion = rooms[state.room].questions[state.question];
  const correctButton = [...answers.querySelectorAll("button")][currentQuestion.correct];
  const answeredCorrectly = correctButton && correctButton.classList.contains("correct") && !answers.querySelector(".wrong");

  if (!answeredCorrectly) {
    render();
    return;
  }

  if (isLastQuestion()) {
    finishGame();
    return;
  }

  if (state.question === 0) {
    state.question = 1;
    render();
  } else {
    moveToNextRoom();
  }
}

function moveToNextRoom() {
  const nextRoom = state.room + 1;

  state.transitioning = true;
  state.locked = true;
  stage.classList.add("transitioning");
  mario.classList.add("walking");
  nextButton.classList.add("hidden");
  feedback.textContent = "Mario đang bước vào phòng tiếp theo...";
  mario.style.left = `${nextRoom * 18 + 7}%`;

  state.sceneTimer = setTimeout(() => {
    setScene(nextRoom);
    mario.classList.add("entering");
    [...roomsElement.children].forEach((room, index) => {
      room.classList.toggle("opening", index === nextRoom);
    });
  }, 420);

  state.roomTimer = setTimeout(() => {
    startRoomEntry(nextRoom);
  }, 980);
}

function finishGame() {
  state.finished = true;
  state.transitioning = false;
  state.enteringRoom = false;
  state.locked = true;
  const elapsed = saveCurrentScore();
  document.body.classList.remove("room-entry");
  document.body.classList.add("room-active");
  stage.classList.add("in-room", "rescue-room", "castle-ready");
  stage.classList.remove("transitioning", "entering-room");
  setScene(4);
  mario.classList.add("walking");
  mario.style.left = "18%";
  nextButton.classList.add("hidden");
  roomText.textContent = "5 / 5";
  questionText.textContent = "Hoàn thành";
  roomProgressText.textContent = "Phòng cứu công chúa";
  updateLifeDisplays();
  sceneLabel.textContent = "Phòng cứu công chúa";
  roomTitle.textContent = "Công chúa đang chờ Mario";
  question.textContent = "Bạn đã trả lời hết câu hỏi. Mario sang phòng cuối để cứu công chúa!";
  answers.innerHTML = "";
  feedback.textContent = elapsed === null ? "Chuẩn bị xem đoạn kết..." : `Hoàn thành trong ${formatTime(elapsed)}. Chuẩn bị xem đoạn kết...`;
  princess.classList.add("saved");
  [...roomsElement.children].forEach(room => room.classList.add("cleared"));

  state.finishTimer = setTimeout(() => {
    mario.classList.remove("walking");
    stage.classList.add("carry-scene");
    roomTitle.textContent = "Mario bế công chúa";
    question.textContent = "Mario bế công chúa sau khi vượt qua toàn bộ thử thách.";
    feedback.textContent = "Công chúa đã được giải cứu thành công!";
  }, 850);

  state.giftTimer = setTimeout(() => {
    stage.classList.add("castle-walk");
    mario.classList.add("walking");
    roomTitle.textContent = "Mario đưa công chúa vào lâu đài";
    question.textContent = "Mario bế công chúa bước vào lâu đài để kết thúc hành trình.";
    feedback.textContent = "Lâu đài đang mở cửa chào đón hai người.";
  }, 2450);

  state.castleTimer = setTimeout(() => {
    stage.classList.remove("gift-scene", "carry-scene", "castle-walk");
    stage.classList.add("firework-scene");
    mario.classList.remove("walking");
    roomTitle.textContent = "Pháo hoa chiến thắng";
    question.textContent = "Kết luận: Trong xã hội số, giai cấp vẫn tồn tại khi còn khác biệt về quyền sở hữu, kiểm soát tư liệu sản xuất, dữ liệu, nền tảng và tri thức.";
    feedback.textContent = "Nhóm đã vượt qua 5 phòng và hoàn thành nội dung activity.";
  }, 4200);

  state.fireworkTimer = setTimeout(() => {
    nextButton.textContent = "Người chơi tiếp theo";
    nextButton.classList.remove("hidden");
  }, 5200);
}

function resetGame() {
  clearPendingTimers();
  if (gameStarted) {
    runStartTime = Date.now();
    scoreSaved = false;
    startRunTimer();
  }
  state.room = 0;
  state.question = 0;
  state.lives = 5;
  state.locked = false;
  state.finished = false;
  state.transitioning = false;
  state.enteringRoom = false;
  document.body.classList.remove("room-entry");
  document.body.classList.remove("room-active");
  endRankPanel.classList.add("hidden");
  startRoomEntry(0);
}

function returnToHome() {
  clearPendingTimers();
  gameStarted = false;
  currentPlayer = "";
  runStartTime = 0;
  scoreSaved = false;
  stopRunTimer();
  state.room = 0;
  state.question = 0;
  state.lives = 5;
  state.locked = false;
  state.finished = false;
  state.transitioning = false;
  state.enteringRoom = false;
  document.body.classList.add("home-active");
  document.body.classList.remove("room-entry", "room-active");
  stage.classList.remove("in-room", "entering-room", "transitioning", "rescue-room", "castle-ready", "gift-scene", "carry-scene", "castle-walk", "firework-scene");
  mario.classList.remove("walking", "entering");
  princess.classList.remove("saved");
  nextButton.classList.add("hidden");
  endRankPanel.classList.add("hidden");
  playerNameInput.value = "";
  syncLeaderboard();
}

function clearPendingTimers() {
  clearTimeout(state.sceneTimer);
  clearTimeout(state.roomTimer);
  clearTimeout(state.finishTimer);
  clearTimeout(state.entryTimer);
  clearTimeout(state.answerTimer);
  clearTimeout(state.giftTimer);
  clearTimeout(state.castleTimer);
  clearTimeout(state.fireworkTimer);
  state.sceneTimer = null;
  state.roomTimer = null;
  state.finishTimer = null;
  state.entryTimer = null;
  state.answerTimer = null;
  state.giftTimer = null;
  state.castleTimer = null;
  state.fireworkTimer = null;
}

nextButton.addEventListener("click", goNext);
restartButton.addEventListener("click", resetGame);
resetRankButton.addEventListener("click", resetLeaderboardByAdmin);
startButton.addEventListener("click", () => {
  if (gameStarted) return;
  gameStarted = true;
  currentPlayer = playerNameInput.value.trim() || "Người chơi";
  runStartTime = Date.now();
  scoreSaved = false;
  startRunTimer();
  endRankPanel.classList.add("hidden");
  document.body.classList.remove("home-active");
  startRoomEntry(0);
});

// Leaderboard Toggle Event Listeners
const showRankButton = document.getElementById("showRankButton");
const closeRankButton = document.getElementById("closeRankButton");
const startScreenContent = document.getElementById("startScreenContent");
const homeRankSection = document.getElementById("homeRankSection");

if (showRankButton && closeRankButton && startScreenContent && homeRankSection) {
  showRankButton.addEventListener("click", () => {
    startScreenContent.classList.add("hidden");
    homeRankSection.classList.remove("hidden");
  });

  closeRankButton.addEventListener("click", () => {
    startScreenContent.classList.remove("hidden");
    homeRankSection.classList.add("hidden");
  });
}

createRooms();
syncLeaderboard();
