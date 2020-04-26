import Slider from './slider.js';
import sliderElements from './sliderElements.js';
import Preloader from '../preloadImage/prelodader.js';
import elements from './sliderElements.js';


const $textContainer = document.getElementById('text-container')
const $title = document.getElementById('products__title')
const $par = document.getElementById('products__text')
const $image = document.getElementById('image')
const $arr1 = document.getElementById('arr1')
const $arr2 = document.getElementById('arr2')

const slider = new Slider({
    elements: [...sliderElements],
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

 const images = elements.map((items)=>items.image)

Preloader.preloadImages({
    path:images,
    completed: function(){
        console.log('loaded')
    }
});