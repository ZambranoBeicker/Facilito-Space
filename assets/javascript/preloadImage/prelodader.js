export default class Preloader{
    
    static preloadImages({path,completed}){
        const promises = path.map((paths)=>{
            const vari = Preloader.preloadImage({paths})
            console.dir('this is vari:'+ vari)
        })

        Promise.all(promises).then(completed)
        console.log('this is the onload:\n' + promises.resolve)
    }

    static preloadImage({imagePath}){
        return new Promise((resolve,reject)=>{
            const image = new Image()
            image.src = imagePath
            image.onload = resolve
            console.log(`This is my log:\n ${image.onload}\n${resolve}`);
        })
    }
}