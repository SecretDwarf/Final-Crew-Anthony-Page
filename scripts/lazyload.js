const images = document.querySelectorAll('[data-src]');

const options = { threshold: .0};

function preloadImage(img) {
    const source = img.getAttribute('data-src')
    if(!source) {
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver (
    (entries) => {
        entries.forEach( entry =>{
            if(!entry.isIntersecting){
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target)
            }
        })
        
    },
    options
);

images.forEach(img =>{
    io.observe(img);
})

const RandomPicture = document.querySelector('.picture-container');
for (let i = RandomPicture.children.length; i >= 0; i--) {
    RandomPicture.appendChild(RandomPicture.children[Math.random() * i | 0]);
}