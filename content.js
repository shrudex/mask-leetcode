function replaceDifficultyText() {
  const difficultyTexts = ["Easy", "Medium", "Hard"];

  const difficultyClasses = [
    "text-difficulty-easy",
    "text-difficulty-medium",
    "text-difficulty-hard",
  ];

  difficultyClasses.forEach((difficultyClass) => {
    const elements = document.querySelectorAll(`.${difficultyClass}`);
    elements.forEach((element) => {
      if (difficultyTexts.includes(element.textContent.trim())) {
        element.textContent = "🤔";
      }
    });
  });

  const spanElements = document.querySelectorAll("span");
  spanElements.forEach((element) => {
    if (difficultyTexts.includes(element.textContent.trim())) {
      element.textContent = "🤔";
    }
  });
}

replaceDifficultyText();

const observer = new MutationObserver(replaceDifficultyText);
observer.observe(document.body, { childList: true, subtree: true });
