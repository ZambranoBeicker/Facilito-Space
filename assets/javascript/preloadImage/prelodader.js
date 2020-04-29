export default class Preloader {
  static preloadImages({ path, completed }) {
    const promises = path.map((paths) => {
      const vari = Preloader.preloadImage({ paths });
    });

    Promise.all(promises).then(completed);
  }

  static preloadImage({ imagePath }) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imagePath;
      image.onload = resolve;
    });
  }
}
