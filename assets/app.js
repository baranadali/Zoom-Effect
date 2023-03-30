    const base = document.querySelector(".base");
    const img = document.querySelector("#img");

    base.addEventListener("mousemove", (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2)";
    });

    base.addEventListener("mouseleave", () => {
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";
    });