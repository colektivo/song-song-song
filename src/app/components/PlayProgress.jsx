var React = require('react');
var utils= require('../utilities/helpers');
var ProgressTrack = require('./ProgressTrack');
var TimeElapsed = require('./PlayPosition');
var PlayDuration = require('./PlayDuration');
var hasSound = require('./HasSoundMixin');

var PlayProgress = React.createClass({

  mixins : [hasSound],

  render: function(){
    return (
      /*jshint ignore:start */
      <div className="sm2-progress">
        <div className="sm2-row">
          <TimeElapsed sound={this.props.sound} />
          <div className="sm2-progress-bd">
            <ProgressTrack 
                grabbingOn={this.props.grabbingOn} 
                grabbingOff={this.props.grabbingOff} 
                sound={this.props.sound} />
          </div>
          <PlayDuration sound={this.props.sound} />
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayProgress;