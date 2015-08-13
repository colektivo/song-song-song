var React = require('react');
var Radium = require('radium');
var PlayList = require('./PlayList');
var PlayProgress = require('./PlayProgress');

@Radium
class PlayInlineStatus extends React.Component {
  render() {
    return (
      /*jshint ignore:start */
      <div id="inlineStatus" style={[styles.status]}>

        <div id="playlist" style={styles.playlist}>
          <div id="playlistTarget" style={styles.playlistTarget} >
            <PlayList author={this.props.author} songName={this.props.songName} />
          </div>
        </div>

        <PlayProgress 
            grabbingOn={this.props.grabbingOn} 
            grabbingOff={this.props.grabbingOff} 
            sound={this.props.sound} />

      </div>
      /*jshint ignore:end */
    );
  }

}


var styles = {

  status: {
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    position: 'relative',
    lineHeight: '100%',
    display: 'table-cell',
    minHeight: '2.8em',
    overflow: 'hidden',
    padding: 0,
    paddingLeft: '0.75em',
    paddingRight: '0.75em',
    borderRightWidth: '0.075em',
    borderRightStyle: 'solid',
    borderRightColor: 'rgba(0, 0, 0, 0.1)',
    verticalAlign: 'middle'
  },
  inlineElement: {
    position: 'relative',
    verticalAlign: 'middle',
    padding: 0,
    minWidth: '2.8em',
    minHeight: '2.8em',
    overflow: 'hidden',
    display: 'table-cell',
    width: '1%',
    /* extra-small em scales up nicely, vs. 1px which gets fat */
    borderRight: '0.075em solid rgba(0,0,0,0.1)',
    backgroundColor: 'rgba(0,0,0,0.1)',
    backgroundImage: 'none, none'
  },
  inlineStatus: {
    lineHeight: '100%',
    /* how much to allow before truncating song artist / title with ellipsis */
    display: 'inline-block',
    minWidth: 200,
    maxWidth: '20em',
    /* a little more spacing */
    paddingLeft: '0.75em',
    paddingRight: '0.75em'
  }, 
  fullWidth: {
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%'
  },
  playlist: {
    position: 'relative',
    height: '1.45em',
  },
  playlistTarget: {
    /* initial render / empty case */
    position: 'relative',
    minHeight: '1em'
  }
};

PlayInlineStatus.propTypes = {
  sound: React.PropTypes.object.isRequired
};


module.exports = PlayInlineStatus;