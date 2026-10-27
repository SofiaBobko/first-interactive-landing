// *--- Card animation ---*
const cardWrapper = document.querySelector(".card-wrapper");
const card = document.querySelector(".card");
console.log(cardWrapper, card);

cardWrapper.addEventListener("mousemove", function(event) {
    const rect = cardWrapper.getBoundingClientRect();

    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;

    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;

    const normalizedX = offsetX / (rect.width / 2);
    const normalizedY = offsetY / (rect.height / 2);
    console.log(`Координата курсора относительно центра .card-wrapper: x: ${normalizedX} y: ${normalizedY}`);

    const rotationX = normalizedY * 15;
    const rotationY = normalizedX * 15;

    card.style.transform = `perspective(700px) rotateX(${rotationX}deg) rotateY(${-rotationY}deg)`;
});

cardWrapper.addEventListener("mouseleave", function() {
    card.style.transform = "none";
});

// *--- Underline animation ---*
const headerLinks = document.querySelectorAll(".header-links");
const linkUnderline = document.querySelector(".link-underline");
const navigation = document.querySelector(".navigation");
underlineStartPosition();

headerLinks.forEach(function(link, index) {
    link.addEventListener("mouseenter", function() {
        const linkRect = link.getBoundingClientRect();
        const navigationRect = navigation.getBoundingClientRect();

        linkUnderline.style.left = `${linkRect.x - navigationRect.x}px`;
        linkUnderline.style.width = `${linkRect.width}px`;

        if (index === 0) {
            linkUnderline.style.backgroundColor = "purple";
        } else if (index === 1) {
            linkUnderline.style.backgroundColor = "#d3fc03"
        } else {
            linkUnderline.style.backgroundColor = "#e36ddf";
        }
    });
});

navigation.addEventListener("mouseleave", function() {
    underlineStartPosition();
});

function underlineStartPosition() {
    const homeLink = headerLinks[0];
    const homeLinkRect = homeLink.getBoundingClientRect();

    linkUnderline.style.left = "0";
    linkUnderline.style.width = `${homeLinkRect.width}px`;
    linkUnderline.style.backgroundColor = "purple";
}


