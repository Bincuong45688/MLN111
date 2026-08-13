const oldRooms = [
  {
    title: "Phòng 1: Khái niệm giai cấp",
    questions: [
      {
        text: "Theo chủ nghĩa duy vật lịch sử, giai cấp được hình thành chủ yếu dựa trên cơ sở nào?",
        answers: [
          "Vị trí khác nhau của các nhóm người trong hệ thống sản xuất xã hội",
          "Sở thích cá nhân và phong cách tiêu dùng của từng người",
          "Màu da, giới tính hoặc đặc điểm sinh học bẩm sinh",
          "Mức độ nổi tiếng trên mạng xã hội"
        ],
        correct: 0,
        explain: "Giai cấp gắn với vị trí trong sản xuất, đặc biệt là quan hệ với tư liệu sản xuất và phân phối sản phẩm."
      },
      {
        text: "Vì sao phân chia giai cấp trong xã hội có tư hữu về tư liệu sản xuất mang tính khách quan?",
        answers: [
          "Vì nó nảy sinh từ quan hệ kinh tế hiện thực, không phụ thuộc vào ý muốn riêng của cá nhân",
          "Vì mọi người tự nguyện chọn mình thuộc giai cấp nào",
          "Vì nhà nước chỉ cần ban hành luật là tạo ra giai cấp",
          "Vì công nghệ cao tự động xóa mọi bất bình đẳng"
        ],
        correct: 0,
        explain: "Khi tư liệu sản xuất thuộc về một bộ phận xã hội, sự khác biệt lợi ích kinh tế xuất hiện một cách khách quan."
      }
    ]
  },
  {
    title: "Phòng 2: Đấu tranh giai cấp",
    questions: [
      {
        text: "Đấu tranh giai cấp xuất hiện khi nào?",
        answers: [
          "Khi lợi ích cơ bản giữa các giai cấp đối lập không thể điều hòa trong một trật tự xã hội nhất định",
          "Khi mọi người có quan điểm giống nhau về phân phối của cải",
          "Khi xã hội không còn chế độ tư hữu",
          "Khi con người ngừng lao động sản xuất"
        ],
        correct: 0,
        explain: "Đấu tranh giai cấp bắt nguồn từ mâu thuẫn lợi ích giữa những giai cấp có vị trí kinh tế đối lập."
      },
      {
        text: "Trong xã hội số, đấu tranh giai cấp có thể chuyển hóa thành hình thức nào?",
        answers: [
          "Đấu tranh về quyền tiếp cận dữ liệu, nền tảng, kỹ năng số và lợi ích từ công nghệ",
          "Chỉ còn là cuộc thi xem ai dùng điện thoại đời mới hơn",
          "Biến mất hoàn toàn vì internet làm mọi người bình đẳng tuyệt đối",
          "Chỉ là xung đột giữa các hãng sản xuất trò chơi"
        ],
        correct: 0,
        explain: "Hình thức có thể thay đổi, nhưng mâu thuẫn về quyền kiểm soát nguồn lực và lợi ích kinh tế vẫn tồn tại."
      }
    ]
  },
  {
    title: "Phòng 3: Xã hội số và bất bình đẳng",
    questions: [
      {
        text: "Khái niệm 'bất bình đẳng số' trong activity của nhóm nói đến điều gì?",
        answers: [
          "Khoảng cách giữa người có khả năng truy cập, làm chủ công nghệ và người bị bỏ lại phía sau",
          "Sự khác nhau về màu sắc giao diện máy tính",
          "Việc người trẻ chơi game nhiều hơn người lớn tuổi",
          "Sự cạnh tranh giữa các nhân vật trong game Mario"
        ],
        correct: 0,
        explain: "Bất bình đẳng số phản ánh khoảng cách về hạ tầng, kỹ năng, dữ liệu và cơ hội hưởng lợi từ công nghệ."
      },
      {
        text: "Vì sao 'tư duy làm chủ tri thức' chưa đủ để phủ nhận sự tồn tại của giai cấp?",
        answers: [
          "Vì tri thức cũng chịu tác động bởi quyền sở hữu, điều kiện tiếp cận và cơ hội sử dụng công nghệ",
          "Vì tri thức chỉ có trong sách giấy",
          "Vì ai lên mạng cũng tự động có cùng cơ hội phát triển",
          "Vì giai cấp chỉ là khái niệm trong quá khứ, không liên quan kinh tế"
        ],
        correct: 0,
        explain: "Trong xã hội số, tri thức là nguồn lực quan trọng nhưng không được phân phối ngang bằng cho mọi người."
      }
    ]
  },
  {
    title: "Phòng 4: Tính lịch sử và tất yếu",
    questions: [
      {
        text: "Nói phân chia giai cấp có tính lịch sử nghĩa là gì?",
        answers: [
          "Giai cấp không tồn tại vĩnh viễn, mà xuất hiện và biến đổi theo những điều kiện lịch sử nhất định",
          "Giai cấp xuất hiện do một câu chuyện cổ tích",
          "Giai cấp là hiện tượng tự nhiên giống thời tiết",
          "Giai cấp chỉ tồn tại trong môn Lịch sử"
        ],
        correct: 0,
        explain: "Giai cấp ra đời khi sản xuất phát triển đến mức có của cải dư thừa và tư hữu về tư liệu sản xuất."
      },
      {
        text: "Trong các xã hội còn chế độ tư hữu về tư liệu sản xuất, vì sao phân chia giai cấp có tính tất yếu?",
        answers: [
          "Vì tư hữu tạo ra sự khác biệt về quyền chiếm hữu, tổ chức sản xuất và phân phối lợi ích",
          "Vì mọi người sinh ra đã cố định thuộc một giai cấp mãi mãi",
          "Vì chỉ cần có mạng xã hội là tự nhiên có giai cấp",
          "Vì nhà trường bắt buộc phải chia lớp học thành giai cấp"
        ],
        correct: 0,
        explain: "Chừng nào quyền sở hữu và kiểm soát tư liệu sản xuất còn không ngang nhau, phân hóa giai cấp còn có cơ sở tồn tại."
      }
    ]
  },
  {
    title: "Phòng 5: Giai cấp và dân tộc",
    questions: [
      {
        text: "Mối quan hệ giữa vấn đề giai cấp và vấn đề dân tộc nên được hiểu như thế nào?",
        answers: [
          "Hai vấn đề có liên hệ với nhau; lợi ích dân tộc cần được nhìn trong bối cảnh lợi ích giai cấp cụ thể",
          "Hai vấn đề hoàn toàn tách rời, không bao giờ tác động qua lại",
          "Dân tộc chỉ là tên gọi địa lý nên không liên quan xã hội",
          "Giai cấp luôn tự động biến mất khi nhắc đến dân tộc"
        ],
        correct: 0,
        explain: "Trong duy vật lịch sử, dân tộc và giai cấp đều gắn với điều kiện kinh tế - xã hội và lợi ích cụ thể."
      },
      {
        text: "Kết luận phù hợp nhất cho activity của nhóm là gì?",
        answers: [
          "Giai cấp vẫn tồn tại trong xã hội số, còn đấu tranh giai cấp chuyển hóa sang cả lĩnh vực dữ liệu, công nghệ và tri thức",
          "Công nghệ cao đã làm mọi mâu thuẫn giai cấp biến mất hoàn toàn",
          "Chỉ người không biết dùng máy tính mới thuộc giai cấp bị trị",
          "Bất bình đẳng số chỉ là vấn đề giải trí, không liên quan sản xuất"
        ],
        correct: 0,
        explain: "Xã hội số không xóa ngay cơ sở kinh tế của giai cấp; nó làm hình thức phân tầng và đấu tranh trở nên mới hơn."
      }
    ]
  }
];

const rooms = [
  {
    title: "Ph?ng 1",
    questions: [
      {
        text: "Giai ?o?n n?o H? Ch? Minh h?nh th?nh t? t??ng y?u n??c v? ch? h??ng c?u n??c?",
        answers: [
          "1911-1920",
          "1920-1930",
          "Tr??c 1911",
          "T? n?m 1941 ??n n?m 1969"
        ],
        correct: 2,
        explain: "Tr??c n?m 1911, H? Ch? Minh ?? h?nh th?nh t? t??ng y?u n??c v? ch? h??ng c?u n??c t? truy?n th?ng gia ??nh, qu? h??ng v? d?n t?c."
      },
      {
        text: "N?m n?o Nguy?n T?t Th?nh ra ?i t?m ???ng c?u n??c?",
        answers: [
          "1911",
          "1920",
          "N?m 1930",
          "N?m 1941 khi Ng??i tr? v? n??c"
        ],
        correct: 0,
        explain: "Ng?y 5/6/1911, Nguy?n T?t Th?nh ra ?i t?m ???ng c?u n??c t? B?n Nh? R?ng."
      }
    ]
  },
  {
    title: "Ph?ng 2",
    questions: [
      {
        text: "S? ki?n n?o ???c xem l? b??c ngo?t quan tr?ng gi?p Nguy?n ?i Qu?c t?m th?y con ???ng c?u n??c ??ng ??n?",
        answers: [
          "Th?nh l?p ??ng C?ng s?n Vi?t Nam",
          "Tr? v? Vi?t Nam tr?c ti?p l?nh ??o c?ch m?ng",
          "Th?ng l?i c?a C?ch m?ng th?ng T?m n?m 1945",
          "??c Lu?n c??ng c?a L?nin"
        ],
        correct: 3,
        explain: "Vi?c ??c Lu?n c??ng c?a L?nin gi?p Nguy?n ?i Qu?c t?m th?y con ???ng gi?i ph?ng d?n t?c theo c?ch m?ng v? s?n."
      },
      {
        text: "Y?u t? l? lu?n n?o quy?t ??nh b?n ch?t khoa h?c v? c?ch m?ng c?a t? t??ng H? Ch? Minh?",
        answers: [
          "Tinh hoa v?n h?a c?a c?c qu?c gia ph??ng T?y",
          "Nh?ng gi? tr? truy?n th?ng t?t ??p c?a d?n t?c Vi?t Nam",
          "Ch? ngh?a M?c-L?nin",
          "C?c t? t??ng ti?n b? c?a v?n h?a ph??ng ??ng v? ph??ng T?y"
        ],
        correct: 2,
        explain: "Ch? ngh?a M?c-L?nin l? c? s? l? lu?n quy?t ??nh b?n ch?t khoa h?c v? c?ch m?ng c?a t? t??ng H? Ch? Minh."
      }
    ]
  },
  {
    title: "Ph?ng 3",
    questions: [
      {
        text: "V? sao th?i k? 1911-1920 ???c xem l? th?i k? c? ? ngh?a b??c ngo?t trong qu? tr?nh h?nh th?nh t? t??ng H? Ch? Minh?",
        answers: [
          "V? ??y l? th?i k? H? Ch? Minh tr?c ti?p l?nh ??o nh?n d?n ti?n h?nh C?ch m?ng th?ng T?m.",
          "V? trong giai ?o?n n?y, H? Ch? Minh ?? ho?n thi?n to?n b? h? th?ng quan ?i?m v? x?y d?ng ch? ngh?a x? h?i t?i Vi?t Nam.",
          "V? ??y l? qu? tr?nh Ng??i kh?o nghi?m nhi?u con ???ng c?u n??c, ti?p c?n ch? ngh?a M?c-L?nin v? chuy?n t? l?p tr??ng c?a m?t ng??i y?u n??c sang l?p tr??ng c?a ng??i c?ng s?n.",
          "V? ??y l? th?i k? Vi?t Nam ?? gi?nh ???c ??c l?p v? b?t ??u ti?n h?nh x?y d?ng m?t nh? n??c m?i."
        ],
        correct: 2,
        explain: "Giai ?o?n 1911-1920 ??nh d?u s? chuy?n bi?n t? ch? ngh?a y?u n??c ??n l?p tr??ng c?ng s?n, m? ra con ???ng c?u n??c ??ng ??n."
      },
      {
        text: "? ngh?a quan tr?ng nh?t c?a vi?c Nguy?n ?i Qu?c ??c S? th?o Lu?n c??ng c?a L?nin n?m 1920 l? g??",
        answers: [
          "Gi?p Ng??i hi?u r? h?n v? l?ch s? c?c cu?c c?ch m?ng t? s?n ?? di?n ra t?i ch?u ?u.",
          "Gi?p Nguy?n ?i Qu?c x?c ??nh r?ng nhi?m v? tr??c m?t ch? c?n t?p trung v?o ??u tranh kinh t? c?a c?ng nh?n.",
          "Gi?p Ng??i nh?n th?c r? s? ph?t tri?n c?a ch? ngh?a t? b?n t?i c?c n??c ph??ng T?y ???ng th?i.",
          "Gi?p Nguy?n ?i Qu?c t?m th?y l?i gi?i cho v?n ?? gi?i ph?ng d?n t?c, x?c ??nh con ???ng c?ch m?ng v? s?n l? con ???ng ph? h?p ?? ??u tranh gi?nh ??c l?p cho d?n t?c Vi?t Nam."
        ],
        correct: 3,
        explain: "S? th?o Lu?n c??ng c?a L?nin gi?p Nguy?n ?i Qu?c t?m th?y con ???ng c?ch m?ng v? s?n cho s? nghi?p gi?i ph?ng d?n t?c Vi?t Nam."
      }
    ]
  },
  {
    title: "Ph?ng 4",
    questions: [
      {
        text: "Trong giai ?o?n 1920-1930, n?i dung n?o sau ??y ???c h?nh th?nh c? b?n trong t? t??ng H? Ch? Minh?",
        answers: [
          "??u tranh gi?nh ??c l?p b?ng con ???ng c?i c?ch ?n h?a v? d?a v?o c?c n??c t? b?n ph?t tri?n.",
          "C?ch m?ng gi?i ph?ng d?n t?c mu?n th?ng l?i ph?i ?i theo con ???ng c?ch m?ng v? s?n.",
          "Ch? giai c?p c?ng nh?n m?i ???c tham gia v?o qu? tr?nh ??u tranh gi?nh l?i ??c l?p d?n t?c.",
          "Vi?t Nam c?n ti?n h?nh c?ch m?ng t? s?n tr??c r?i m?i xem x?t ??n v?n ?? ??c l?p d?n t?c."
        ],
        correct: 1,
        explain: "Trong giai ?o?n 1920-1930, t? t??ng v? con ???ng c?ch m?ng v? s?n cho gi?i ph?ng d?n t?c ???c h?nh th?nh c? b?n."
      },
      {
        text: "?i?m n?i b?t trong c?ch H? Ch? Minh ti?p thu ch? ngh?a M?c-L?nin l? g??",
        answers: [
          "Ti?p thu to?n b? l? lu?n v? ?p d?ng gi?ng ho?n to?n m? h?nh c?a c?ch m?ng Nga.",
          "Ch? l?a ch?n nh?ng n?i dung li?n quan tr?c ti?p ??n ??u tranh c?a giai c?p c?ng nh?n.",
          "B? qua c?c y?u t? truy?n th?ng d?n t?c ?? t?p trung ho?n to?n v?o l? lu?n c?ch m?ng ph??ng T?y.",
          "Ti?p thu c? ch?n l?c v? v?n d?ng s?ng t?o v?o ?i?u ki?n th?c ti?n c? th? c?a c?ch m?ng Vi?t Nam."
        ],
        correct: 3,
        explain: "H? Ch? Minh ti?p thu ch? ngh?a M?c-L?nin m?t c?ch ch?n l?c, s?ng t?o v? g?n v?i th?c ti?n Vi?t Nam."
      }
    ]
  },
  {
    title: "Ph?ng 5",
    questions: [
      {
        text: "T?i ??i h?i Tua th?ng 12/1920, Nguy?n ?i Qu?c t?n th?nh t? ch?c qu?c t? n?o?",
        answers: [
          "Qu?c t? th? hai",
          "H?i Qu?c Li?n",
          "Qu?c t? III",
          "Li?n minh c?c d?n t?c thu?c ??a"
        ],
        correct: 2,
        explain: "T?i ??i h?i Tua th?ng 12/1920, Nguy?n ?i Qu?c t?n th?nh Qu?c t? III v? tham gia s?ng l?p ??ng C?ng s?n Ph?p."
      },
      {
        text: "Theo t? t??ng H? Ch? Minh, ??c l?p d?n t?c ph?i g?n li?n v?i ?i?u g??",
        answers: [
          "Ph?t tri?n t? b?n",
          "C?ng nghi?p h?a ??t n??c",
          "H?i nh?p v?i c?c n??c ph??ng T?y",
          "Ch? ngh?a x? h?i"
        ],
        correct: 3,
        explain: "Theo t? t??ng H? Ch? Minh, ??c l?p d?n t?c ph?i g?n li?n v?i ch? ngh?a x? h?i."
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

createRooms();
syncLeaderboard();
