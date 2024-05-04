document.addEventListener('DOMContentLoaded', function() {
  let isBgChanged = false;
  let switchImg = document.getElementById('switch');
  let overlay = document.querySelector('.video-overlay');

  switchImg.addEventListener('click', function() {

    this.style.transition = 'transform 0.25s ease';
    this.style.transform = 'translateY(16px)'; // 向下位移
    setTimeout(() => {
      this.style.transform = 'translateY(0)'; // 回归原位
    }, 250);

    if (!isBgChanged) {
      overlay.style.backgroundColor = 'rgba(160, 160, 255, 0.95)'; // 新颜色
      isBgChanged = true;
    } else {
      overlay.style.backgroundColor = 'rgba(0, 0, 26, 0.94)'; // 回到初始颜色
      isBgChanged = false;
    }
  });
});

document.querySelectorAll('.image-group').forEach(group => {
  group.addEventListener('mouseenter', function() {
    this.querySelector('.info').classList.add('slideUp');
  });
});


//页面转换动画
document.querySelectorAll('.info').forEach(group => {
  group.addEventListener('click', function() {
    this.classList.add('animating'); // 添加动画类
    const destinationURL = this.getAttribute('data-url'); // 假设每个容器有一个data-url属性

    // 监听动画结束事件
    this.addEventListener('animationend', function() {
      window.location.href = destinationURL; // 动画结束后跳转到新页面
    }, { once: true }); // 确保事件监听器只触发一次
  });
});
