document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('message');
  const charCount = document.getElementById('charCount');
  const livePreview = document.getElementById('livePreview');
  const previewText = document.getElementById('previewText');
  const submitBtn = document.getElementById('submitBtn');
  const form = document.getElementById('contactForm');

  textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    charCount.textContent = `${length} / 500`;
    if (length > 0) {
      livePreview.classList.remove('hidden');
      previewText.textContent = textarea.value;
    } else {
      livePreview.classList.add('hidden');
    }
  });

  submitBtn.addEventListener('click', () => {
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const msg = textarea.value;

    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push({ firstName, lastName, email, msg });
    localStorage.setItem('submissions', JSON.stringify(submissions));

    form.reset();
    charCount.textContent = '0 / 500';
    livePreview.classList.add('hidden');

    alert("Form submitted (fake). Check console or localStorage!");
    console.log("Saved submission:", { firstName, lastName, email, msg });
  });
});