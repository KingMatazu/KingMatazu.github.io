function scrollToSection(skills) {
    const section = document.getElementById(skills);
    if (section) {
      const offset = 10; // Offset in pixels
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  }