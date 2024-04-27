

let selection =document.querySelector('section');
let navlinks =document.querySelector('header nav a');
window.onscroll = () => {
    selection.forEach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetTop - 150;
        let height =sec.offsetheight;
        let id= sec.getAtribute('id');
        if ( top>=  offset && top <  offset +  height ){
            navlinks.forEach(links => {
                links.classlist.remove('active')
                document.querySelector('header nav a[herf*='+id+']').classList.add('active');
            });

        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    
};
ScrollReveal({ 
    reset: true,
    distance : '80px',
    duration : 2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading,.footer-text,.footer-icontop a,.footer-icontop a i ,.social-mediaR a '  ,{ delay: 400 });
ScrollReveal().reveal('.home-img, .service-container, .service-box,.contact form,.skill-box,.about-img img,.about-content h2,.about-content h3,.about-content p' ,{ delay: 400 });

function downloadFile() {
    const fileUrl = 'https://IT%20book/1585472513_924676543.pdf'; // replace with your file URL
    const fileName = 'file.pdf'; // replace with your desired file name
  
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(error => {
        console.error(error);
        alert('File download failed.');
      });
  }