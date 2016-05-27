import exploreSrc from '../../../assets/arrow.png'

class FeaturedController {
  constructor() {
    this.name = 'featured';
    console.log(this.image)
    this.imageSrc = `/assets/${this.image}`;
    this.exploreSrc = exploreSrc;
  }
}

export default FeaturedController;
