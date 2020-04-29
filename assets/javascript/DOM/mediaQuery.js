
const hasResolutionChange = (resolution, action)=>{ 
    matchMedia(`${resolution}`).addEventListener('change', (e)=>{
        if(e.matches){
            action()
        }
    })
}
export default hasResolutionChange