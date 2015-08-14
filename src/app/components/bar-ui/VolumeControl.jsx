var React = require('react');
var Radium = require('radium');

@Radium
class VolumeControl extends React.Component {
  render(){
    var volumeControlStyle = {};

    if (this.props.volume.backgroundSize) {
      var clip = 'rect(0px, ' + (this.props.volume.width * this.props.volume.value) + 'px, ' 
                    + this.props.volume.height + 'px, ' 
                    + (this.props.volume.width * (this.props.volume.backgroundMargin/100)) + 'px)';
      volumeControlStyle = { 'clip': clip }
    }

    return (
      /*jshint ignore:start */
      <a href="#volume" style={[volumeControlStyle, styles.volume ]} >volume</a>
      /*jshint ignore:end */
    );
  }

}

var bg = require('./images/icomoon/entypo-25px-ffffff/SVG/volume.svg');

var styles = {
  volume: {
    textDecoration: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundPosition: '42% 50%',
    backgroundSize: '56% auto',
    backgroundImage: 'none, url('+ bg +')',
    backgroundRepeat: 'no-repeat',
    lineHeight: '10em',
    imageRendering: '-moz-crisp-edges'
  }
};

module.exports = VolumeControl;