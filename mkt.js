// Countdown
    const targetTime = new Date().getTime() + (6 * 60 * 60 * 1000); // 6 hours
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetTime - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = String(days).padStart(2, "0");
      document.getElementById("hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

      if (diff < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "⏰ Hết hạn";
      }
    };
    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Submit form
    document.getElementById("registerForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.name.value;
      const email = this.email.value;
      const zalo = this.zalo.value;

      alert(`Đăng ký thành công!\nTên: ${name}\nEmail: ${email}\nZalo: ${zalo}`);
      this.reset(); // reset form sau khi submit
    });