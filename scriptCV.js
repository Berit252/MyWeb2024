document.addEventListener('DOMContentLoaded', function() {
  let switchImg = document.getElementById('switch'); // 获取开关图片元素
  // let body = document.body; // 获取body元素，以便稍后更改背景颜色
  // let content = document.querySelectorAll('p');
  // let title = document.querySelectorAll('.title');
  // let td = document.querySelectorAll('td');
  // const arrowImgBlack = document.getElementById('backBlack');
  // const arrowImgWhite = document.getElementById('backWhite');

  // 检查localStorage中的背景色设置
  if (localStorage.getItem('isDarkMode') === 'true') {
    applyDarkMode();
  }

  switchImg.addEventListener('click', function() {
    this.style.transition = 'transform 0.25s ease';
    this.style.transform = 'translateY(16px)';
    setTimeout(() => {
      this.style.transform = 'translateY(0)';
    }, 250);

    if (localStorage.getItem('isDarkMode') !== 'true') {
      applyDarkMode();
      localStorage.setItem('isDarkMode', 'true');
    } else {
      applyLightMode();
      localStorage.setItem('isDarkMode', 'false');
    }
  });
});

function applyDarkMode() {
  document.body.style.backgroundColor = '#333';
  document.querySelectorAll('p, .title, td').forEach(function(element) {
    element.style.color = '#f1f1f1';
  });
  document.getElementById('backBlack').style.display = 'none';
  document.getElementById('backWhite').style.display = 'block';
}

function applyLightMode() {
  document.body.style.backgroundColor = '#f1f1f1';
  document.querySelectorAll('p, .title, td').forEach(function(element) {
    element.style.color = '#333';
  });
  document.getElementById('backWhite').style.display = 'none';
  document.getElementById('backBlack').style.display = 'block';
}

// Back Button
document.getElementById('backBlack').addEventListener('click', function(){
  window.location.href = 'index.html';
})
document.getElementById('backWhite').addEventListener('click', function(){
  window.location.href = 'index.html';
})


// Gallery Effect
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function moveSlide(direction) {
    if (direction === 1 && currentSlide < totalSlides - 1) {
        currentSlide++;
    } else if (direction === -1 && currentSlide > 0) {
        currentSlide--;
    } else {
        return; // No more slides in that direction
    }
    const slideWidth = document.querySelector('.slides img').clientWidth;
    slides.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}




// Contact Interface
emailjs.init("AM9PUKkB5sDc68EHT");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 使用 'this' 引用当前的表单
    emailjs.sendForm('service_252Tang', 'template_0ttbc0s', this)
        .then(function() {
            console.log('SUCCESS!');
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message, please try again.');
        });
});
