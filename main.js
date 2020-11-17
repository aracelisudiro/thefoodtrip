ScrollReveal().reveal('.content-cabecera');
ScrollReveal().reveal('.content1', { delay: 500 });
ScrollReveal().reveal('.content2', { delay: 500 });
ScrollReveal().reveal('.content3', { delay: 500 });
ScrollReveal().reveal('.content4', { delay: 500 });



ScrollReveal().reveal('.img1', { delay: 500 });
ScrollReveal().reveal('.img2', { delay: 600 });
ScrollReveal().reveal('.img3', { delay: 700 });
ScrollReveal().reveal('.img4', { delay: 800 });


let text = document.getElementById('typed')
let str = text.innerHTML; 

text.innerHTML = "";

let speed = 200;
let i = 0;

function typeWriter() {
 if(i < str.length) {
     text.innerHTML += str.charAt(i);
     i++;
     setTimeout(typeWriter, speed);

 }

}

setTimeout(typeWriter, speed); 





