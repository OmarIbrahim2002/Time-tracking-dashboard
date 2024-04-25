let options = document.querySelectorAll(".option p");
let time = document.querySelectorAll(".timeLine p");

options.forEach(p => {
    p.addEventListener("click", (p) => {
        options.forEach(p => {
            p.classList.remove("active");
        });
        p.currentTarget.classList.add("active");
    });
});

options.forEach(p => {
    p.addEventListener("click", (p) => {
        time.forEach(t => {
            t.style.display = "none";
        });
        document.querySelectorAll(p.currentTarget.dataset.time)
            .forEach(a => {
                a.style.display = "block";
            });
    });
});