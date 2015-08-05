var React = require('react');
var Radium = require('radium');
var utils= require('../utilities/helpers');

@Radium
class ProgressBar extends React.Component {
  render(){
    
    var width;
    width = Math.min(100, Math.max(0, (100 * utils.getSoundPosition(this.props.sound) / utils.getSoundDuration(this.props.sound)))) + '%';

    var bar = {
      "width": width
    };

    return (
      /*jshint ignore:start */
      <div style={[bar, styles.bar]}></div>
      /*jshint ignore:end */
    );
  }

}

var styles = {
  bar: {
    height: '0.65em',
    borderRadius: '0.65em',
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.33)',
    backgroundImage: ['url(/src/assets/vendor/sm2/image/black-33.png)', 'none, none']
  }
};

ProgressBar.propTypes = {
  sound: React.PropTypes.object.isRequired
};


module.exports = ProgressBar;