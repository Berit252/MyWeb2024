const works = [
  {
      time: '10.2023.',
      title: 'Close Up A Bit',
      description: 'Communicate with me here without words, just get closer.',
      background: 'url(img/016.jpg)',
      link: './DetailPages/CloseUpABit.html'
  },
  {
      time: '09.2023.',
      title: 'The Same Underneath',
      description: 'An installation using the structure of ANS as inspiration.',
      background: 'url(img/C026.jpg)',
      link: './DetailPages/TheSameUnderneath.html'
  },
  {
      time: '09.2023.',
      title: 'Flow',
      description: 'An experimental video.',
      background: 'url(img/C028.jpg)',
      link: './DetailPages/Flow.html'
  },
  {
    time: '12.2023.',
    title: 'Ramadan Manual',
    description: 'This set of manuals is written from the perspective of a fictional futuristic machine.',
    background: 'url(img/C029.jpg)',
    link: './DetailPages/RoboWorld.html'
  },
  {
    time: '03.2024.',
    title: 'Sentences Popping Machine',
    description: 'What do you need? What should I do? The more guidance I get, the more confused I get in the maze with no signposts.',
    background: 'url(img/C034.jpeg)',
    link: './DetailPages/SentencesPoppingMachine.html'
  },
  {
    time: '04.2024.',
    title: 'Copyloop (Group Project)',
    description: 'Copy loop.',
    background: 'url(img/C028.jpg)',
    link: './DetailPages/Copyloop.html'
  },
  {
    time: '05.2024.',
    title: 'Simulation & Dreams - Gameplay Video',
    description: 'Drawing on the theories about simulation, I designed a first person game.',
    background: 'url(img/SDGameVideoAssets/SDVideoScreenShot-1.jpg)',
    link: './DetailPages/SDGameVideo.html'
  },
  {
    time: '05.2024.',
    title: 'Simulation & Dreams - Dream Frames',
    description: 'Random drop of some pieces of my dreams.',
    background: 'url(img/SDInstallationAssets/SDVideoScreenShot-4.jpg)',
    link: './DetailPages/SDInstallation.html'
  },
  {
    time: '##.####.',
    title: 'Other Works',
    description: 'A little archive of my previous works.',
    background: 'url(img/group0/C042.jpg)',
    link: './DetailPages/Others.html'
  }
];

let currentIndex = 0;
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
const containerElement = document.querySelector('.container');
const bodyElement = document.body;

function updateWork(index) {
  titleElement.textContent = works[index].title;
  descriptionElement.textContent = works[index].description;
  bodyElement.style.backgroundImage = works[index].background;
}

function nextWork() {
  containerElement.classList.add('hidden');
  setTimeout(() => {
      currentIndex = (currentIndex + 1) % works.length;
      updateWork(currentIndex);
      containerElement.style.transform = 'translate(-50%, -60%)';
      setTimeout(() => {
          containerElement.style.transform = 'translate(-50%, -50%)';
          containerElement.classList.remove('hidden');
      }, 30);
  }, 300);
}

function previousWork() {
  containerElement.classList.add('hidden');
  setTimeout(() => {
      currentIndex = (currentIndex - 1 + works.length) % works.length;
      updateWork(currentIndex);
      containerElement.style.transform = 'translate(-50%, -40%)';
      setTimeout(() => {
          containerElement.style.transform = 'translate(-50%, -50%)';
          containerElement.classList.remove('hidden');
      }, 30);
  }, 300);
}

updateWork(currentIndex);

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

containerElement.addEventListener('click', () => {
  window.location.href = works[currentIndex].link;
});

let xDown = null;
let yDown = null;

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
      return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // Horizontal swipe
  } else {
      if (yDiff > 0) {
          // Swipe up
          nextWork();
      } else {
          // Swipe down
          previousWork();
      }
  }

  xDown = null;
  yDown = null;
}



// if (window.innerWidth > 768) {
//     window.location.href = "index.html";
// }