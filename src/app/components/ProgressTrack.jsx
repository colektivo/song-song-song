var React = require('react/addons');
var utils= require('../utilities/helpers');
var ProgressBar = require('./ProgressBar');
var classNames = require('classnames');
var hasSound = require('./HasSoundMixin');
var Draggable = require('react-draggable2');

var ProgressTrack = React.createClass({
  
  mixins : [hasSound],
  
  getInitialState: function () {
    return {
      position: {
        top: 0, left: 0
      },
      activeDrags: 0
    };
  },

  handleClick: function(e){
    this.setNewPosition(e);
  },

  handleDrag: function (e, ui) {
    this.setNewPosition(e);
    this.setState({
      position: ui.position
    });
  },

  onStart: function() {
    this.props.grabbingOn();
    this.setState({activeDrags: ++this.state.activeDrags});
  },

  componentDidMount: function() {
    this.target = React.findDOMNode(this);
  },

  componentWillUnmount: function() {
  },

  //
  // This avoid to seek before start playing
  //
  canSeek: function(){
    return (
      this.props.sound && this.props.sound.duration && (
        (this.props.sound.playState != 0 && !this.props.sound.paused) || 
          this.props.sound.paused
        )
      );
  },
  
  setNewPosition: function(e){

    var barX, barWidth, x, newPosition;
    var clientPos = utils.getXY(e);

    barX = utils.position.getOffX(this.target);
    barWidth = this.target.offsetWidth;

    x = (clientPos.clientX - barX);
    newPosition = (x / barWidth);

    if (this.canSeek()) {
      this.props.sound.setPosition(this.props.sound.duration * newPosition);
      // a little hackish: ensure UI updates immediately with current position, even if audio is buffering and hasn't moved there yet.
      this.props.sound._iO.whileplaying.apply(this.props.sound);
    }
  },

  onStop: function(e){
    this.props.grabbingOff();
    this.setState({activeDrags: --this.state.activeDrags});
  },

  render: function(){

    var classes = classNames('sm2-progress-track');
    var progressMaxLeft = 100
    var left = Math.min(progressMaxLeft, Math.max(0, (progressMaxLeft * ( utils.getSoundPosition(this.props.sound) / utils.getSoundDuration(this.props.sound))))) + '%';
    
    return (
      
      /*jshint ignore:start */
      <div ref='progressTrack' className={classes} onClick={this.handleClick}>
        <ProgressBar sound={this.props.sound} />
        <Draggable bound="all box" onDrag={this.handleDrag} axis="x" zIndex={100} start={{x: left}} handle=".handle" onStart={this.onStart} onStop={this.onStop}>
          <div className="sm2-progress-ball handle">
            <div className="icon-overlay"></div>
          </div>
        </Draggable>
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = ProgressTrack;