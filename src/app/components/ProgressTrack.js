var React = require('react');
var utils= require('../utilities/helpers');
var ProgressBall = require('./ProgressBall');
var ProgressBar = require('./ProgressBar');
var classNames = require('classnames');

var ProgressTrack = React.createClass({
  
  getInitialState: function(){
    return {mouseDown: false}
  },

  handleRelease: function(e){
    this.handleClick(e);
    this.setState({mouseDown: false});
  },

  handleMove: function(e){
    if (this.state.mouseDown){
      this.handleClick(e);
    }
  },

  handleClick: function(e){

    this.setState({mouseDown: true});

    var barX, barWidth, x, newPosition, target;

    target = React.findDOMNode(this);

    barX = utils.position.getOffX(target);
    barWidth = target.offsetWidth;
    x = (e.clientX - barX);
    newPosition = (x / barWidth);

    if (this.props.sound && this.props.sound.duration) {

      this.props.sound.setPosition(this.props.sound.duration * newPosition);
      // a little hackish: ensure UI updates immediately with current position, even if audio is buffering and hasn't moved there yet.
      this.props.sound._iO.whileplaying.apply(this.props.sound);

    }
    
  },

  render: function(){

    var classes = classNames('sm2-progress-track',
    {'dragging': this.state.mouseDown});
    
    return (
      
      /*jshint ignore:start */
      <div className={classes} onMouseDown={this.handleClick} onMouseMove={this.handleMove} onMouseUp={this.handleRelease}>
        <ProgressBar  position={this.props.position} duration={this.props.duration} />
        <ProgressBall ref='progressBall' position={this.props.position} duration={this.props.duration} />
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = ProgressTrack;