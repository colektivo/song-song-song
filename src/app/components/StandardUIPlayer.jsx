var React = require('react');

var PlayButton = require('./PlayButton');
var PlayerTexture = require('./PlayerTexture');
var PlayerGradient = require('./PlayerGradient');
var PlayInlineStatus = require('./PlayInlineStatus');
var PlayVolume = require('./PlayVolume');
var PlayList = require('./PlayList');
var PlayProgress = require('./PlayProgress');
var utils = require('../utilities/helpers');
var hasSound = require('./HasSoundMixin');

var classNames = require('classnames');

var StandardUIPlayer = React.createClass({

  mixins : [hasSound],
  
  getInitialState: function() {
    return {
      grabbing: false
    };
  },
  handleMouseDown: function(e){
    this.setState({grabbing:true});
  },
  handleMouseUp: function(e){
    this.setState({
      grabbing: false
    });
  },
  render: function(){
    var playing = (this.props.sound.playState == 0) ? false : !this.props.sound.paused;
    var classes = classNames('sm2-bar-ui',
    {'full-width': this.props.fullWidth },
    {'flat': this.props.flat },
    {'textured': this.props.textured },
    {'fixed': this.props.fixed },
    {playing: playing },
    {grabbing: this.state.grabbing },
    {buffering: this.props.sound.isBuffering },
    {paused: !playing });
    
    return (
      /*jshint ignore:start */
      <div className={classes}>
        <div className="sm2-main-controls bd">
          <PlayButton handlePlay={this.props.handlePlay} sound={this.props.sound} />
          <PlayInlineStatus grabbingOn={this.handleMouseDown}
                            grabbingOff={this.handleMouseUp}
                            songName={this.props.songName}
                            author={this.props.author}
                            sound={this.props.sound}
                            position={this.props.sound.position}
                            duration={this.props.sound.durationEstimate} />
          <PlayVolume sound={this.props.sound} />
        </div>
      </div>
      /*jshint ignore:end */
    )
  }
});

module.exports = StandardUIPlayer;
