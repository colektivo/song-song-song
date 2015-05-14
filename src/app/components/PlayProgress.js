var React = require('react');
var utils= require('../utilities/helpers');
var ProgressTrack = require('./ProgressTrack');
var TimeElapsed = require('./PlayPosition');
var PlayDuration = require('./PlayDuration');

var PlayProgress = React.createClass({

  render: function(){
    return (
      /*jshint ignore:start */
      <div className="sm2-progress">
        <div className="sm2-row">
          <TimeElapsed position={this.props.position} />
          <div className="sm2-progress-bd">
            <ProgressTrack 
                grabbingOn={this.props.grabbingOn} 
                grabbingOff={this.props.grabbingOff} 
                position={this.props.position} 
                duration={this.props.duration} 
                sound={this.props.sound} />
          </div>
          <PlayDuration duration={this.props.duration} />
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayProgress;