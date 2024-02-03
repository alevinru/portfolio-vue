interface TouchScale extends TouchEvent {
  scale?: number;
}

export default function () {
  window.document.addEventListener('touchmove', (event: TouchScale) => {
    if (event.touches.length > 1 && event.scale && event.scale !== 1) {
      event.preventDefault();
    }
  }, { passive: false });
}
