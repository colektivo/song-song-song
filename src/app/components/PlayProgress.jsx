var React = require('react');
var Radium = require('radium');
var utils= require('../utilities/helpers');
var ProgressTrack = require('./ProgressTrack');
var PlayPosition = require('./PlayPosition');
var PlayDuration = require('./PlayDuration');

@Radium
class PlayProgress extends React.Component {

  render(){
    return (
      /*jshint ignore:start */
      <div>
        <div style={styles.row}>
          <PlayPosition sound={this.props.sound} />
          <div style={styles.progressSpacing} >
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

}

var styles = {
  row: {
    display: 'table-row'
  },
  progress: {
  },
  progressSpacing: {
    /* spacing between progress track/ball and time (position) */
    padding: '0px 0.8em'
  }
};

PlayProgress.propTypes = {
  sound: React.PropTypes.object.isRequired
};


module.exports = PlayProgress;