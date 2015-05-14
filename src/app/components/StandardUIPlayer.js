var React = require('react');

var PlayButton = require('./PlayButton');
var PlayerTexture = require('./PlayerTexture');
var PlayerGradient = require('./PlayerGradient');
var PlayInlineStatus = require('./PlayInlineStatus');
var PlayVolume = require('./PlayVolume');
var PlayMenu = require('./PlayMenu');
var PlayList = require('./PlayList');
var PlayProgress = require('./PlayProgress');
var utils= require('../utilities/helpers');

var classNames = require('classnames');

var StandardUIPlayer = React.createClass({


  getInitialState: function() {
    return {
      grabbing: false,
      playing: 0
    };
  },
  componentWillMount: function() {
  },
  componentDidMount: function(){
  },
  componentWillUnmount: function(){
  },
  update: function(){
  },
  handleMouseDown: function(e){
    this.setState({grabbing:true}); 
  },
  handleMouseUp: function(e){
    this.setState({
      grabbing: false
    }); 
  },
  handleClick: function(e){
    
    this.props.sound.togglePause();
    this.setState({
      playing: !this.props.sound.paused
    }); 
  },
  render: function(){
    var classes = classNames('sm2-bar-ui',
    {'full-width': this.props.fullWidth },
    {playing: this.state.playing },
    {grabbing: this.state.grabbing },
    {paused: !this.state.playing })
    return (
      /*jshint ignore:start */
      <div className={classes}>
        <div className="sm2-main-controls">
          <PlayerTexture sound={this.props.sound} update={this.update} />
          <PlayerGradient sound={this.props.sound} update={this.update}  />
          <PlayButton handleClick={this.handleClick} sound={this.props.sound} />
          <PlayInlineStatus grabbingOn={this.handleMouseDown} grabbingOff={this.handleMouseUp} songName={this.props.songName} author={this.props.author} sound={this.props.sound} position={this.props.sound.position} duration={this.props.sound.durationEstimate} />
          <PlayVolume sound={this.props.sound} update={this.update} />
          <PlayMenu sound={this.props.sound} update={this.update} />
        </div>
      </div>
      /*jshint ignore:end */
    )
  }
});

module.exports = StandardUIPlayer;
