window.addEventListener('DOMContentLoaded', () => {
    const legend = document.querySelector('fieldset legend');
    if (!legend) return;
    // Force GPU layer und Repaint
    legend.style.transform = 'translateZ(0)';
    // Optional: danach wieder entfernen
    requestAnimationFrame(() => {
      legend.style.transform = '';
    });
  });