const showMenuItems = ($menu,show)=>{
    let clicks = 0
    $menu.addEventListener('click',()=>{
        clicks++
        show(clicks%2 === 0)
    })
}

export default showMenuItems