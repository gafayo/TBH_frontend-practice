 const toggleBtn = document.getElementsByClassName('toggle-button')[0];
 const navbarLinks = document.getElementsByClassName('navbar-links')[0];

 const handles = document.querySelectorAll('.faq__entity');
 const paras = document.querySelectorAll('.faq__para');

 toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
 })
 

//  faq starts from here
// handles.forEach(handle => handle.addEventListener('click', function(){
//    paras.forEach(para => para.classList.toggle('open'));
// }));
