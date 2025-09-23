// 문구
const quotes =
[
    "공동체, 균등, 안정.", "성취를 위해서는 대가가 필요하다.",
    "대가를 치르지 않은 믿음은 그가 대가이다.", "과학, 발전, 평화.",
    "반복은 진리를 만든다.", "감정은 결핍이다.", "자유는 투쟁을 만든다.",
    "진보를 만들다.", "안정을 제공합니다.", "New Atlantis",
    "Freedom is the freedom to say that two plus two makes four. If that is granted, all else follows.",
    "Man is the only creature that consumes without producing.",
    "No god. No poetry. No danger. No freedom. No goodness. No sin.",
    "I claim them all.", "How beauteous mankind is."
];

// 클릭 이벤트
document.addEventListener("DOMContentLoaded", () =>
{
    const bgm = document.getElementById("bgm");
    const sfx = document.getElementById("sfx");
    const mainImg = document.querySelector(".mainImg");

    const defaultImg = 'url("/resources/mainImg.png")';
    const hoverImg = 'url("/resources/mainImgHover.png")';

    let bgmStarted = false; // 첫 클릭에서만 실행하도록 플래그

    document.body.addEventListener("click", () =>
    {
        // 첫 클릭 시 배경음 재생
        if (!bgmStarted)
        {
            bgm.play();
            bgmStarted = true;
        }

        // 효과음
        sfx.currentTime = 0;
        sfx.play();

        // 이미지 교체
        mainImg.style.backgroundImage = hoverImg;
        setTimeout(() => { mainImg.style.backgroundImage = defaultImg; }, 2000);

        // 랜덤 문구 선택
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        // 팝업 오픈
        const popupWin = window.open(
            "popup.html", "_blank",
            "width=600, height=200, scrollbars=no,resizable=no"
        );

        popupWin.onload = () => popupWin.postMessage(randomQuote, "*");
    });

    // 노이즈
    const canvas = document.getElementById("noise");
    const ctx = canvas.getContext("2d");

    // 사이즈
    function resize()
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    function generateNoise()
    {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const buffer = imageData.data;

        for (let i = 0; i < buffer.length; i += 4)
        {
            const val = Math.random() * 255;
            buffer[i] = buffer[i+1] = buffer[i+2] = val; // grayscale
            buffer[i+3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
    }

    function loop()
    {
        generateNoise();
        requestAnimationFrame(loop);
    }
    loop();
});

// 팝업
window.addEventListener("message", (event) => { document.querySelector(".text").innerText = event.data; });
document.querySelectorAll(".btn").forEach(btn => { btn.addEventListener("click", () => { window.close(); }); });