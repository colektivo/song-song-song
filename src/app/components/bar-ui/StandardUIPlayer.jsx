var React = require('react');
var Radium = require('radium');

var PlayButton = require('./PlayButton');
var PlayerTexture = require('./PlayerTexture');
var PlayerGradient = require('./PlayerGradient');
var PlayInlineStatus = require('./PlayInlineStatus');
var PlayVolume = require('./PlayVolume');
var PlayList = require('./PlayList');
var PlayProgress = require('./PlayProgress');
var utils = require('../../utilities/helpers');

var classNames = require('classnames');

@Radium
class StandardUIPlayer extends React.Component {
  getInitialState() {
    return 
      {grabbing: false}
    ;
  }
  handleMouseDown(e) {
    this.setState({grabbing:true});
  }

  handleMouseUp(e){
    this.setState({
      grabbing: false
    });
  }
  
  render(){ 
    var playing = (this.props.sound.playState == 0) ? false : !this.props.sound.paused;
    var classes = classNames(
    {playing: playing },
    {grabbing: this.state.grabbing },
    {buffering: this.props.sound.isBuffering },
    {paused: !playing });
    return (
      /*jshint ignore:start */
      <div id="mainControl" className={classes} style={styles.barUI}>
        <div id="controls" style={styles.controls}>
          <PlayButton handlePlay={this.props.handlePlay} sound={this.props.sound} />
          <PlayInlineStatus grabbingOn={this.handleMouseDown.bind(this)}
                            grabbingOff={this.handleMouseUp.bind(this)}
                            songName={this.props.songName}
                            author={this.props.author}
                            sound={this.props.sound}
                            position={this.props.sound.position}
                            duration={this.props.sound.durationEstimate} />
          <PlayVolume sound={this.props.sound} />
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
}

StandardUIPlayer.propTypes = {
  sound: React.PropTypes.object.isRequired
};

/* take out overflow if you want an absolutely-positioned playlist dropdown. */
//border-radius: 2px;
//overflow: hidden;

          /*
          <PlayVolume sound={this.props.sound} />
          */


var styles = {
  barUI: {
    backgroundColor: 'rgba(128, 128, 128, 0.54)',
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    left: 0,
    borderRadius: 0,
    overflow: 'visible',
    zIndex: '999',
    maxWidth: '100%',
    minWidth: '20em',
    /* just for fun (animate normal / full-width) */
    transition: 'max-width 0.2s ease-in-out',
    fontSize: 15,
    textShadow: 'none',
    display: 'inline-block',
    width: '100%',
    /* prevent background border bleed */
    WebkitBackgroundClip: 'padding-box',
    backgroundClip: 'padding-box',
    MozOsxFontSmoothing: 'grayscale',
    fontWeight: 'normal',
    fontFamily: 'helvetica, arial, verdana, sans-serif'
  },
  controls: {
    borderRadius: 0,
    borderBottom: 'none',
    width: '100%',
    display: 'table',
    position: 'relative',
    /* because indeed, fonts do look pretty "fat" otherwise in this case. */
    WebkitFontSmoothing: 'antialiased',
  },
  bd: {
    display: 'table',
    borderBottom: 'none'
  }
};


module.exports = StandardUIPlayer;
