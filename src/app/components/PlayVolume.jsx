var React = require('react');
var Radium = require('radium');
var objectAssign = require('react/lib/Object.assign');
var utils= require('../utilities/helpers');
var VolumeControl = require('./VolumeControl');

@Radium
class PlayVolume extends React.Component {


  constructor() {
    super();
    this.state = {
      isMouseDown: false,
      isMoving: false,
      volume: {
        value: 1
      }
    }
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    
  }
  updateControl() {
    // 60% wide means 20% margin on each side.
    
    var value, x, y, width, height, volume;
    
    x = utils.position.getOffX(this.control);
    y = utils.position.getOffY(this.control);
    
    width = this.control.offsetWidth;
    height = this.control.offsetHeight;
    
    var backgroundSize = parseInt(utils.style(this.control, 'background-size'), 10);

    if (window.navigator.userAgent.match(/msie|trident/i)) {
      backgroundSize = (backgroundSize / width) * 100;
    }
    
    var backgroundMargin = (100 - backgroundSize) / 2;
    
    var volume = {
        backgroundSize: backgroundSize,
        x: x,
        y: y,
        width: this.control.offsetWidth,
        height: this.control.offsetHeight,
        value: 1,
        backgroundMargin: backgroundMargin
      }
    
    this.setState({ volume: volume });    

    return volume;
  }

  componentDidMount(){

    var node = React.findDOMNode(this);

    node.addEventListener('mousedown', this._onMouseDown);

    window.addEventListener('mousemove', this._onMouseMove);
    window.addEventListener('mouseup', this._onMouseUp);


    this.control = React.findDOMNode(this.refs.volumeControl);
    this.controlShade = React.findDOMNode(this.refs.controlShade);

    this.updateControl();
    
  }
  
  componentWillUnmount() {
      var node = React.findDOMNode(this);

      node.removeEventListener('mousedown', this._onMouseDown);
      document.removeEventListener('mousemove', this._onMouseMove);
      document.removeEventListener('mouseup', this._onMouseUp);

  }

  _onMouseDown(e){

    console.log('down1');

    if (e.target === this.control || e.target === this.controlShade) {

      this.setState(objectAssign({
        isMouseDown: true,
        isMoving: false
      }));

      console.log('down2');
      var value, x, y, volume, width, height, backgroundSize;
      
      x = utils.position.getOffX(this.control);
      y = utils.position.getOffY(this.control);

      width = this.control.offsetWidth;
      height = this.control.offsetHeight;

      this._adjustVolume(e);

    }
  }
  
  _onMouseUp(e) {
    console.log(this.state);
      if( this.state.isMouseDown ) {
        console.log('up');
        this.setState({
          isMouseDown: false,
          isMoving: false
        });
        this._adjustVolume(e);
      }
  }

  _onMouseMove(e) {
      if(this.state.isMouseDown) {
        console.log('down move');
        this.setState(
          objectAssign({
            isMoving: true,
          }));
        this._adjustVolume(e);
      }
  }
  
  _adjustVolume(e) {
    
    console.log('adjust');

    var backgroundSize,
        backgroundMargin,
        pixelMargin,
        target,
        value,
        controlData,
        volume;

    controlData = this.updateControl();

    value = 0;

    target = this.control;

    // based on getStyle() result
    backgroundSize = controlData.backgroundSize;

    // figure out spacing around background image based on background size, eg. 60% background size.
    backgroundSize = 100 - backgroundSize;

    // 60% wide means 20% margin on each side.
    backgroundMargin = backgroundSize / 2;

    // relative position of mouse over element
    controlData.value = Math.max(0, Math.min(1, (e.clientX - controlData.x) / controlData.width));

    this.setState(objectAssign({ volume: controlData }));    

    // determine logical volume, including background margin
    pixelMargin = ((backgroundMargin/100) * controlData.width);

    volume = Math.max(0, Math.min(1, ((e.clientX - controlData.x) - pixelMargin) / (controlData.width - (pixelMargin*2))));

    // set volume
    this.props.sound.setVolume(volume * 100);

    if (e.preventDefault) {
      e.preventDefault();
    }

  }

  render(){
    return (
      /*jshint ignore:start */
      <div id="volumeWrapper" style={styles.volumeWrapper} >
        <div id="volumeBorder" style={styles.volumeBorder} >
          <span style={styles.volumeShade} id="controlShade" ref="controlShade"></span>
          <VolumeControl ref="volumeControl" volume={this.state.volume}/>
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
  
  
}

var styles = {
  volumeWrapper: {
    position: 'relative',
    verticalAlign: 'middle',
    padding: 0,
    minWidth: '2.8em',
    minHeight: '2.8em',
    overflow: 'hidden',
    display: 'table-cell',
    width: '1%'
  },
  volumeBorder: {
    minWidth: '2.8em',
    minHeight: '2.8em',
    position: 'relative',
  },
  volumeShade: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: '0.33',
    backgroundPosition: '42% 50%',
    backgroundSize: '56% auto',
    backgroundImage: 'none, url("/src/assets/vendor/sm2/image/icomoon/entypo-25px-000000/SVG/volume.svg")',
    backgroundRepeat: 'no-repeat',
    lineHeight: '10em',
    imageRendering: '-moz-crisp-edges'

  }
  
};

PlayVolume.propTypes = {
  sound: React.PropTypes.object.isRequired
};

module.exports = PlayVolume;