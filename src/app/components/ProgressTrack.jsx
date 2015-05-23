var React = require('react');
var utils= require('../utilities/helpers');
var ProgressBall = require('./ProgressBall');
var ProgressBar = require('./ProgressBar');
var classNames = require('classnames');

var ProgressTrack = React.createClass({
  
  componentDidMount: function() {
    this.target = React.findDOMNode(this);
  },

  componentWillUnmount: function() {
  },

  handleRelease: function(e){

    window.removeEventListener('mousemove', this.handleMouse);

    if (e.preventDefault) {
      e.preventDefault();
    }

    this.props.grabbingOff();

    window.removeEventListener('mouseup', this.handleRelease);

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

  handleMouse: function(e){

    var barX, barWidth, x, newPosition;

    barX = utils.position.getOffX(this.target);
    barWidth = this.target.offsetWidth;
    x = (e.clientX - barX);
    newPosition = (x / barWidth);

    if (this.canSeek()) {
      this.props.sound.setPosition(this.props.sound.duration * newPosition);
      // a little hackish: ensure UI updates immediately with current position, even if audio is buffering and hasn't moved there yet.
      this.props.sound._iO.whileplaying.apply(this.props.sound);
    }
    
    if (e.preventDefault) {
      e.preventDefault();
    }
    
  },

  handleMouseDown: function(e){

    window.addEventListener('mousemove', this.handleMouse);
    window.addEventListener('mouseup', this.handleRelease);

    this.props.grabbingOn();

    return this.handleMouse(e);

  },

  render: function(){

    var classes = classNames('sm2-progress-track');
    
    return (
      
      /*jshint ignore:start */
      <div ref='progressTrack' className={classes} onMouseDown={this.handleMouseDown} >
        <ProgressBar sound={this.props.sound} />
        <ProgressBall ref='progressBall' sound={this.props.sound} />
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = ProgressTrack;