import Slider from './slider.js';

const $title = document.getElementById('products__title')
const $par = document.getElementById('products__text')
const $image = document.getElementById('image')

const slider = new Slider({
    elements: [
        {
            title: "Lorem ipsum consectetur",
            par:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At earum asperiores perspiciatis placeat, ex magni numquam quo veritatis nihil adipisci possimus quisquam',
            image: '../public/images/cu_fil.jpg',
        },
        {
            title: "Lorem ipsum",
            par:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At earum asperiores perspiciatis placeat, ex magni numquam quo veritatis nihil adipisci possimus quisquam,ipsam magnam molestiae maiores iusto deleniti. Qui, repellendus',
            image: '../public/images/ci_fil.jpg',
        },
        {
            title: "Lorem ipsum dolor",
            par:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At earum asperiores perspiciatis placeat, ex magni numquam quo veritatis nihil adipisci possimus quisquam',
            image: '../public/images/se_fil.jpg',
        },
        {
            title: "Lorem ipsum adipisicing",
            par:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At earum asperiores perspiciatis placeat, ex magni numquam quo veritatis nihil adipisci possimus quisquam,ipsam magnam molestiae maiores iusto deleniti. Qui, repellendus',
            image: '../public/images/ter_fil.jpg',
        }
    ],
    animationFunc: function(elements){
        $title.innerText = elements.title
        $par.innerText = elements.par
        $image.src = elements.image

    }
})

slider.play()