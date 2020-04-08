class AnimationFrame {
  isRunning = false;

  _requestID = undefined;
  fps = 60;
  _callback = undefined;

  constructor(fps = 60, callback = () => {}) {
    this.isRunning = false;
    this._requestID = undefined;
    this.fps = fps;
    this._callback = callback;
  }

  start() {
    let then = performance.now();
    const interval = 1000 / this.fps;
    const tolerance = 0.1;

    const animateLoop = (now) => {
      this._requestID = window.requestAnimationFrame(animateLoop);
      const delta = now - then;

      if (delta >= interval - tolerance) {
        then = now - (delta % interval);
        this._callback(delta);
      }
    };

    this._requestID = window.requestAnimationFrame(animateLoop);

    this.isRunning = true;
  }

  stop() {
    window.cancelAnimationFrame(this._requestID);
    this.isRunning = false;
  }
}
