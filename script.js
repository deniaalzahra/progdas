//biar tombol landing page smooth
const learnbtn = document.querySelector('.btn[href="#testimoni"]');
if (learnbtn) {
    learnbtn.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector("#testimoni");
        if (target) {
            target.scrollIntoView({behavior: "smooth"});
        }
    })
}


//notifikasi setelah sumbit form kontak
const form = document.querySelector(".contact-form");
if (form){
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert("pesan berasil terkirim!");
        form.reset();   
    
    })
}