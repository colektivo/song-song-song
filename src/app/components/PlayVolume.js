var React = require('react');
var utils= require('../utilities/helpers');
var VolumeControl = require('./VolumeControl');

var PlayVolume = React.createClass({

  getInitialState: function(){
    // set as default the only value that we know
    return {
      volume: {
        value: 1
      }
    }
  },

  updateControl: function(){
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
  },

  componentDidMount: function(){

    this.control = React.findDOMNode(this.refs.volumeControl);
    this.controlShade = React.findDOMNode(this.refs.controlShade);
    this.updateControl();
    
  },

  handleMouseDown: function(e){

    if (e.target === this.control || e.target === this.controlShade) {

      var value, x, y, volume, width, height, backgroundSize;
      
      x = utils.position.getOffX(this.control);
      y = utils.position.getOffY(this.control);

      width = this.control.offsetWidth;
      height = this.control.offsetHeight;

      window.addEventListener('mousemove', this.adjustVolume);
      window.addEventListener('mouseup', this.releaseVolume);

      this.adjustVolume(e);

    }
  },

  adjustVolume: function(e) {

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

    this.setState({ volume: controlData });    

    // determine logical volume, including background margin
    pixelMargin = ((backgroundMargin/100) * controlData.width);

    volume = Math.max(0, Math.min(1, ((e.clientX - controlData.x) - pixelMargin) / (controlData.width - (pixelMargin*2))));

    // set volume
    this.props.sound.setVolume(volume * 100);

    if (e.preventDefault) {
      e.preventDefault();
    }

  },

  releaseVolume: function(/* e */) {

    window.removeEventListener('mousemove', this.adjustVolume);
    window.removeEventListener('mouseup', this.releaseVolume); 

  },
  
  render: function(){
    return (
      /*jshint ignore:start */
      <div className="sm2-inline-element sm2-button-element sm2-volume" onMouseDown={this.handleMouseDown}>
        <div className="sm2-button-bd">
          <span className="sm2-inline-button sm2-volume-control volume-shade" ref="controlShade"></span>
          <VolumeControl ref="volumeControl" volume={this.state.volume}/>
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayVolume;