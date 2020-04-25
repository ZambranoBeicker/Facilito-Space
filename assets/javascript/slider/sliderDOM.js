import Slider from './slider.js';

const $textContainer = document.getElementById('text-container')
const $title = document.getElementById('products__title')
const $par = document.getElementById('products__text')
const $image = document.getElementById('image')
const $arr1 = document.getElementById('arr1')
const $arr2 = document.getElementById('arr2')

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
        $textContainer.classList.add('hide')
        $image.classList.add('hide')
        setTimeout(()=>{
            
            $title.innerText = elements.title
            $par.innerText = elements.par
            $image.src = elements.image

            $textContainer.classList.remove('hide')
            $image.classList.remove('hide')
        },600)

    }
})

slider.play()

$arr1.addEventListener('click',()=>{
    slider.stop()
    slider.prev()
    slider.play()
})
$arr2.addEventListener('click',()=>{
    slider.stop()
    slider.next()
    slider.play()
})
