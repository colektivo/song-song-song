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
    return {grabbing: false};
  },
  componentWillMount: function() {
    
  },

  componentDidMount: function(){

    //var url = this.props.url;
    var soundInPlayer = this.props.sound;

    //this.setState({soundObject: sound});
    // make sound
  },
  componentWillUnmount: function(){
  },
  update: function(){
    this.setState({updated:true});
  },
  handleMouseDown: function(e){
    this.setState({grabbing:true}); 
  },
  handleMouseUp: function(e){
    this.setState({grabbing:false}); 
  },
  render: function(){
    var classes = classNames('sm2-bar-ui',
    {'full-width': this.props.fullWidth},
    {playing: this.props.sound.playState},
    {grabbing: this.state.grabbing},
    {paused: !this.props.sound.playState})
    return (
      /*jshint ignore:start */
      <div className={classes}>
        <div className="sm2-main-controls" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
          <PlayerTexture sound={this.props.sound} update={this.update} />
          <PlayerGradient sound={this.props.sound} update={this.update}  />
          <PlayButton sound={this.props.sound} update={this.update} />
          <PlayInlineStatus update={this.update} songName={this.props.songName} author={this.props.author} sound={this.props.sound} position={this.props.sound.position} duration={this.props.sound.durationEstimate} />
          <PlayVolume sound={this.props.sound} update={this.update} />
          <PlayMenu sound={this.props.sound} update={this.update} />
        </div>
      </div>
      /*jshint ignore:end */
    )
  }
});

module.exports = StandardUIPlayer;
