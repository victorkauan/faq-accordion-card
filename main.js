const Modal = {
  toggle(number) {
    const question = document.querySelector(
      `#faq ul li:nth-child(${number}) h2`
    );
    const arrow = document.querySelector(`
      #faq ul li:nth-child(${number}) img
    `);
    const answer = document.querySelector(`
      #faq ul li:nth-child(${number}) p
    `);

    question.classList.toggle("active");
    arrow.classList.toggle("active");
    answer.classList.toggle("active");
  },
};
