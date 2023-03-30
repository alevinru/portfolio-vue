interface TouchScale extends TouchEvent {
  scale?: number;
}

export default function () {
  window.document.addEventListener('touchmove', (event: TouchScale) => {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  }, { passive: false });
}
