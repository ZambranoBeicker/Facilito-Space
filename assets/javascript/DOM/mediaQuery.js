
const hasResolutionChange = (resolution, action)=>{ 
    matchMedia(`${resolution}`).addEventListener('change', (e)=>{
            action(e.matches)
    })
}
export default hasResolutionChange