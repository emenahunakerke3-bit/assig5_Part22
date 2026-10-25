document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // TASK 6: Glow Tracker (Counter with Click Events)
  // Талап: 0-ден бастау, теріс санға өткізбеу, тек 1 жаңарту функциясын қолдану
  // =========================================================================
  let count = 0;
  const counterValue = document.getElementById('counterValue');
  const incBtn = document.getElementById('incBtn');
  const decBtn = document.getElementById('decBtn');
  const resetBtn = document.getElementById('resetBtn');

  function renderCount() {
    counterValue.textContent = count;
  }

  incBtn.addEventListener('click', () => {
    count++;
    renderCount();
  });

  decBtn.addEventListener('click', () => {
    if (count > 0) {
      count--;
      renderCount();
    }
  });

  resetBtn.addEventListener('click', () => {
    count = 0;
    renderCount();
  });


  // =========================================================================
  // TASK 7: Sweet Note Live Preview
  // Талап: input оқиғасы, таңба саны, бос кезде плашка, Clear батырмасы + focus()
  // =========================================================================
  const liveInput = document.getElementById('liveInput');
  const clearInputBtn = document.getElementById('clearInputBtn');
  const previewText = document.getElementById('previewText');
  const charCount = document.getElementById('charCount');

  liveInput.addEventListener('input', () => {
    const note = liveInput.value;
    charCount.textContent = note.length;

    if (note.length > 0) {
      previewText.textContent = note;
    } else {
      previewText.textContent = 'Your text will appear here';
    }
  });

  clearInputBtn.addEventListener('click', () => {
    liveInput.value = '';
    charCount.textContent = '0';
    previewText.textContent = 'Your text will appear here';
    liveInput.focus(); // Курсорды қайта енгізу өрісіне қайтару
  });


  // =========================================================================
  // TASK 8: Change Product Image via Select
  // Талап: change оқиғасы, кемінде 3 опция, src, alt және caption жаңарту
  // =========================================================================
  const imgSelect = document.getElementById('imgSelect');
  const displayImg = document.getElementById('displayImg');
  const imgCaption = document.getElementById('imgCaption');

  imgSelect.addEventListener('change', () => {
    const chosen = imgSelect.options[imgSelect.selectedIndex];
    displayImg.src = chosen.value;
    displayImg.alt = chosen.getAttribute('data-alt');
    imgCaption.textContent = chosen.getAttribute('data-caption');
  });


  // =========================================================================
  // TASK 9: Keyboard Events
  // Талап: keydown, event.key көрсету, Enter басылғанда бөлек шығару (preventDefault),
  // Escape екі өрісті де тазалайды
  // =========================================================================
  const keyInput = document.getElementById('keyInput');
  const keyStatus = document.getElementById('keyStatus');
  const enterResult = document.getElementById('enterResult');

  keyInput.addEventListener('keydown', (e) => {
    keyStatus.textContent = e.key;

    if (e.key === 'Enter') {
      e.preventDefault();
      enterResult.textContent = keyInput.value.trim() !== '' ? keyInput.value : '-';
    } else if (e.key === 'Escape') {
      keyInput.value = '';
      enterResult.textContent = '-';
      keyStatus.textContent = 'Escape (Cleared)';
    }
  });


  // =========================================================================
  // TASK 10: Mouse and Focus Events
  // Талап: tabindex="0", mouseenter, mouseleave, focus, blur, оқиғаны сипаттау
  // =========================================================================
  const focusCard = document.getElementById('focusCard');
  const cardInstruction = document.getElementById('cardInstruction');

  function activateCard(eventType) {
    focusCard.classList.add('highlight');
    cardInstruction.textContent = `Card is Active! Triggered by: "${eventType}" event.`;
  }

  function deactivateCard(eventType) {
    focusCard.classList.remove('highlight');
    cardInstruction.textContent = `Instruction: Hover over the card or press Tab to focus. (Last trigger left: "${eventType}")`;
  }

  // Тінтуірмен басқару
  focusCard.addEventListener('mouseenter', () => activateCard('mouseenter'));
  focusCard.addEventListener('mouseleave', () => deactivateCard('mouseleave'));

  // Пернетақтамен басқару (Tab арқылы)
  focusCard.addEventListener('focus', () => activateCard('focus'));
  focusCard.addEventListener('blur', () => deactivateCard('blur'));

});