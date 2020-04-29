
const hasResolutionChange = (resolution, action)=>{ 
    matchMedia(`${resolution}`).addEventListener('change', ()=>{
        action()
    })
}
export default hasResolutionChange 