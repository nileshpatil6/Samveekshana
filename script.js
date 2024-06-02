
window.addEventListener('load', () => {
    const underwaterScene = document.querySelector('.underwater-scene');

    for (let i = 0; i < 60; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 50}vw`;
        bubble.style.top = `${Math.random() * 500}vh`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubble.style.transform = `translateZ(${Math.random() * 1000 - 500}px) scale(${Math.random() * 0.5 + 0.5})`;
        underwaterScene.appendChild(bubble);
    }

    for (let i = 0; i < 4; i++) {
        const plant = document.createElement('div');
        plant.classList.add('plant');
        plant.style.left = `${Math.random() * 5}vw`;
       plant.style.top = `${Math.random() * 100}vw`;
        plant.classList.add(Math.random() > 8? 'seaweed' : 'coral');
        underwaterScene.appendChild(plant);
    }
});

// Water ripple effect
document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = `${e.pageX - 25}px`; // Use e.pageX
        ripple.style.top = `${e.pageY - 25}px`; // Use e.pageY
        document.body.appendChild(ripple);
      
        setTimeout(() => {
          ripple.remove();
        }, 1000);
      });
      
      document.addEventListener('mouseover', (e) => {
        const ripple1 = document.createElement('div');
        ripple1.classList.add('ripple1');
        ripple1.style.left = `${e.pageX - 15}px`; // Use e.pageX
        ripple1.style.top = `${e.pageY - 15}px`; // Use e.pageY
        document.body.appendChild(ripple1);
      
        setTimeout(() => {
          ripple1.remove();
        }, 1000);
      });
      
      document.addEventListener('touchstart', (e) => {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = `${e.touches[0].pageX - 25}px`; // Use e.touches[0].pageX
        ripple.style.top = `${e.touches[0].pageY - 25}px`; // Use e.touches[0].pageY
        document.body.appendChild(ripple);
      
        setTimeout(() => {
          ripple.remove();
        }, 500);
      });
      
      document.addEventListener('touchstart', (e) => {
        const ripple1 = document.createElement('div');
        ripple1.classList.add('ripple1');
        ripple1.style.left = `${e.touches[0].pageX - 15}px`; // Use e.touches[0].pageX
        ripple1.style.top = `${e.touches[0].pageY - 15}px`; // Use e.touches[0].pageY
        document.body.appendChild(ripple1);
      
        setTimeout(() => {
          ripple1.remove();
        }, 100);
      });
      
      
// Define a timeline using GSAP

window.addEventListener('scroll', function() {
    var image = document.querySelector('.spinning-image');
    var scrollPosition = window.scrollY;

    // Adjust the speed of rotation based on the scroll position
    var rotation = 'rotate(' + (scrollPosition / 10) + 'deg)';
    image.style.transform = 'translateX(10%) ' + rotation;
    image.style.top =  (scrollPosition * 1.5) + 'px';
image.style. left =  (scrollPosition * 0.5) + 'px';
  
  
}); 