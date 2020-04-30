const ResolutionChange = {

hasResolutionChange: (resolution, actionChange)=>{ 
    window.addEventListener('load',()=>{
            if(window.innerWidth > resolution){
                
                actionChange(window.innerWidth > resolution)
            }
    })
},

removeFirstChild: ($element)=>{
    if($element.children[0]){
        $element.children[0].remove()
    }else{
        console.log('Nada de nada')
    }
}

}

export default ResolutionChange