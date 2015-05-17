var React = require('react');
var utils= require('../utilities/helpers');

var VolumeControl = React.createClass({
  render: function(){
    var volumeControlStyle = {};

    if (this.props.volume.backgroundSize) {
      var clip = 'rect(0px, ' + (this.props.volume.width * this.props.volume.value) + 'px, ' 
                    + this.props.volume.height + 'px, ' 
                    + (this.props.volume.width * (this.props.volume.backgroundMargin/100)) + 'px)';
      volumeControlStyle = { 'clip': clip }
    }

    return (
      /*jshint ignore:start */
      <a href="#volume" className="sm2-inline-button sm2-volume-control" style={volumeControlStyle} >volume {clip}</a>
      /*jshint ignore:end */
    );
  }
});

module.exports = VolumeControl;