var React = require('react');
var utils= require('../utilities/helpers');
var hasSound = require('./HasSoundMixin');

var ProgressBar = React.createClass({

  mixins : [hasSound],

  render: function(){
    var width;
    width = Math.min(100, Math.max(0, (100 * utils.getSoundPosition(this.props.sound) / utils.getSoundPosition(this.props.sound)))) + '%';

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