import playButtonSrc from '../../../assets/ic_play_circle_outline_white_2x_web_48dp.png'

class PlayButtonController {
  constructor() {
    this.name = 'playButton';
    this.imgSrc = playButtonSrc;
    this.playVideo = () => {
    	console.log('clicked', this.video);
    }
  }
}

export default PlayButtonController;
