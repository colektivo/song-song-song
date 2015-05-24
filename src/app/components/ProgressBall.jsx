var React = require('react');
var utils= require('../utilities/helpers');
var hasSound = require('./HasSoundMixin');

var ProgressBall = React.createClass({

  mixins : [hasSound],

  render: function(){
    var progressMaxLeft = 100,
        left;

      left = Math.min(progressMaxLeft, Math.max(0, (progressMaxLeft * (this.props.sound.position / this.props.sound.duration)))) + '%';
      var ball = {
        "left": left
      };

    return (
      /*jshint ignore:start */
      <div className="sm2-progress-ball" style={ball}>
        <div className="icon-overlay"></div>
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = ProgressBall;