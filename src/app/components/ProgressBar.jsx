var React = require('react');
var utils= require('../utilities/helpers');
var hasSound = require('./HasSoundMixin');

var ProgressBar = React.createClass({

  mixins : [hasSound],

  render: function(){
    var width;
    width = Math.min(100, Math.max(0, (100 * this.props.sound.position / this.props.sound.duration))) + '%';

    var bar = {
      "width": width
    };

    return (
      
      /*jshint ignore:start */
      <div className="sm2-progress-bar" style={bar}></div>
      /*jshint ignore:end */
    );
  }
});

module.exports = ProgressBar;