export default class Slider{
    constructor({elements,animationFunc}){
        // debugger
        this.index = 0
        this.size = elements.length
        console.log(this.size)
    }
    
    next(){
        this.index++
        
        if(this.index >= this.size) this.index = 0
        console.log(this.index)
        
    }
    
    prev(){
        this.index--
        
        if(this.index < 0) this.index = this.size -1
        console.log(this.index)

    }

    play(){
        this.interval = setInterval(()=>{
            this.next()
        },1000)
    }

    stop(){
        clearInterval(this.interval)
    }

}

let slider = new Slider({
    elements: [0,1,2,3,4,5,6,7,8,9],
    animationFunc: undefined,
})

slider.play()
setTimeout(function(){
    slider.stop()
},10000)