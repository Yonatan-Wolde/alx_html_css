const submitBtn = document.querySelector('form');

submitBtn.addEventListener('submit', (e)=>{
  if (e.target.checkValidity()){
    e.preventDefault();
    alert('Form submitted!');
  } else {
  }
})



// hamburger dropdown
const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.navlinks')
const icon = document.querySelector('.icon')
const closeicon = document.querySelector('.close')

hamburger.addEventListener('click', ()=>{

    icon.classList.toggle('hiddenicon');
    closeicon.classList.toggle('activeclose');
    navlinks.classList.toggle('activenavlinks');
})




// animation for fade in
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));





//mobile and tablet touch

const whatwedoitems = document.querySelectorAll('.whatwedoitem');
const ourresultsitems = document.querySelectorAll('.ourresultsitem');


    // for .whatwedoitem
    whatwedoitems.forEach(whatwedoitem => {
      // Mobile tap
      whatwedoitem.addEventListener('touchstart', () => {
        whatwedoitem.classList.add('whatwedoanimate');
        setTimeout(() => whatwedoitem.classList.remove('whatwedoanimate'), 500);
      });

      //mouse hover
      whatwedoitem.addEventListener('mouseenter', () => {
        whatwedoitem.classList.add('whatwedoanimate');
        setTimeout(() => whatwedoitem.classList.remove('whatwedoanimate'), 500);
      });

      // Optional: also respond to clicks on desktop
      whatwedoitem.addEventListener('click', () => {
        whatwedoitem.classList.add('spin');
        setTimeout(() => whatwedoitem.classList.remove('spin'), 500);
      });
    });

 
    // for .ourresultsitem
    ourresultsitems.forEach(ourresultsitem => {
      // Mobile tap
      ourresultsitem.addEventListener('touchstart', () => {
        ourresultsitem.classList.add('ourresultsanimate');
        setTimeout(() => ourresultsitem.classList.remove('ourresultsanimate'), 500);
      });

      //mouse hover
      ourresultsitem.addEventListener('mouseenter', () => {
        ourresultsitem.classList.add('ourresultsanimate');
        setTimeout(() => ourresultsitem.classList.remove('ourresultsanimate'), 500);
      });

      //clicks on desktop
      ourresultsitem.addEventListener('click', () => {
        ourresultsitem.classList.add('spin');
        setTimeout(() => ourresultsitem.classList.remove('spin'), 500);
      });
    });





//simplified version of the animation

// const whatwedoitems = document.querySelectorAll('.whatwedoitem');


// function triggerAnimation(element) {
//   element.classList.add('whatwedoanimate');
//   setTimeout(() => {element.classList.remove('whatwedoanimate')}, 500)
// }


// whatwedoitems.forEach(item => {
//   item.addEventListener('touchstart', triggerAnimation(item))
//     item.addEventListener('mouseenter', triggerAnimation(item))
//       item.addEventListener('click', triggerAnimation(item))
// });

