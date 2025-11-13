//biar tombol landing page smooth
const learnbtn = document.querySelector('.btn[href="#testimoni"]');
if (learnbtn) {
    learnbtn.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector("#testimoni");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    })
}

//notifikasi setelah sumbit form kontak
const form = document.querySelector(".contact-form");
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert("pesan berasil terkirim!");
        form.reset();
    })
}

const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {

    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";

    }

}

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({ top: 0, behavior: "smooth" });

});