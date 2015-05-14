var React = require('react');
var utils= require('../utilities/helpers');

var ProgressBall = React.createClass({

  render: function(){
    var progressMaxLeft = 100,
        left;

      left = Math.min(progressMaxLeft, Math.max(0, (progressMaxLeft * (this.props.position / this.props.duration)))) + '%';
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