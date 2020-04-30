const hasResolutionChange = (resolution, action)=>{ 
    window.addEventListener('load',()=>{
            if(window.innerWidth > resolution){
                
                action(window.innerWidth > resolution)
            }
    })

    matchMedia(`(min-width:${resolution}px)`).addEventListener('change',(e)=>{
        action(e.matches)
    })
}
export default hasResolutionChange