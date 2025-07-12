(() => {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const emptyState = document.getElementById("emptyState");
  const mascotMessage = document.getElementById("mascotMessage");
  const streakDisplay = document.getElementById("streak");
  const themeToggle = document.getElementById("themeToggle");
  const onboarding = document.getElementById("onboarding");
  const closeOnboarding = document.getElementById("closeOnboarding");

  let tasks = [];

  // === Init ===
  try {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  } catch {
    tasks = [];
  }

  renderTasks();
  updateStreak();
  checkEmpty();

  if (!localStorage.getItem("seenOnboarding")) {
    onboarding.showModal();
  }

  // === THEME TOGGLE ===
  themeToggle.addEventListener("click", () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";

    html.setAttribute("data-theme", next);
    themeToggle.textContent = next === "light" ? "🌙 Switch to Dark" : "🌞 Switch to Light";
    document.querySelector('meta[name="theme-color"]')
      .setAttribute("content", next === "light" ? "#fcb3c1" : "#18141c");
  });

  // === CREATE TASK ELEMENT ===
  function createTaskElement(taskObj, index) {
    const { text, time, done, color } = taskObj;
    const li = document.createElement("li");
    li.className = `todo__item todo__item--${color || "pink"}${done ? " todo__item--done" : ""}`;

    const topRow = document.createElement("div");
    topRow.className = "todo__top";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo__checkbox";
    checkbox.checked = done;
    checkbox.setAttribute("aria-label", `Mark task "${text}" as ${done ? "incomplete" : "complete"}`);

    const taskText = document.createElement("p");
    taskText.className = "todo__text";
    taskText.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "todo__delete";
    deleteBtn.innerText = "🗑️";
    deleteBtn.title = "Delete task";
    deleteBtn.setAttribute("aria-label", `Delete task: ${text}`);

    const timestamp = document.createElement("span");
    timestamp.className = "todo__timestamp";
    timestamp.textContent = time;

    checkbox.addEventListener("change", () => {
      taskObj.done = checkbox.checked;
      li.classList.toggle("todo__item--done");
      showMascotMessage(checkbox.checked ? getRandomPraise() : "You got this! 🐇");
      if (checkbox.checked) triggerConfetti();
      saveTasks();
      updateStreak();
    });

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      refreshList();
      showMascotMessage("Task removed 👋");
    });

    topRow.append(checkbox, taskText, deleteBtn);
    li.append(topRow, timestamp);
    return li;
  }

  // === ADD TASK ===
  function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const colorOptions = ["pink", "blue", "yellow", "green", "purple", "orange"];
    const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];

    const newTask = { text, time, done: false, color };
    tasks.push(newTask);
    saveTasks();
    refreshList();
    showMascotMessage("Task added ✨");
    taskInput.value = "";
  }

  // === RENDER / REFRESH ===
  function refreshList() {
    taskList.innerHTML = "";
    renderTasks();
    updateStreak();
    checkEmpty();
  }

  function renderTasks() {
    tasks.forEach((task, i) => {
      taskList.appendChild(createTaskElement(task, i));
    });
  }

  // === SAVE TASKS ===
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // === EMPTY STATE ===
  function checkEmpty() {
    emptyState.style.display = tasks.length === 0 ? "block" : "none";
  }

  // === STREAK ===
  function updateStreak() {
    const completed = tasks.filter(t => t.done).length;
    streakDisplay.textContent = `Streak: ${completed} task${completed !== 1 ? "s" : ""} ✅`;
  }

  // === MASCOT MESSAGES ===
  function showMascotMessage(msg) {
    mascotMessage.textContent = msg;
  }

  function getRandomPraise() {
    const phrases = [
      "Nice one! ✅",
      "Well done! 🌟",
      "Look at you go! 🐰",
      "Task conquered! 💪",
      "You're unstoppable! ✨",
      "Another one bites the dust 🧹",
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  // === CONFETTI ===
  function triggerConfetti() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sparkle = document.createElement("div");
    sparkle.textContent = "✨";
    sparkle.style.position = "absolute";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 60 + 20}%`;
    sparkle.style.fontSize = "1.5rem";
    sparkle.style.opacity = "0";
    sparkle.style.transition = "all 1s ease";
    sparkle.style.zIndex = 9999;
    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {
      sparkle.style.transform = "translateY(-20px)";
      sparkle.style.opacity = "1";
    });

    setTimeout(() => sparkle.remove(), 1000);
  }

  // === ONBOARDING CLOSE ===
  closeOnboarding.addEventListener("click", () => {
    onboarding.close();
    localStorage.setItem("seenOnboarding", "true");
  });

  // === EVENT LISTENERS ===
  addBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
  });
})();
