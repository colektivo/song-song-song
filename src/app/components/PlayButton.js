var React = require('react');
var classNames = require('classnames');

var PlayButton = React.createClass({
  getInitialState: function(){
    return { 
      playing: false 
    }
  },
  handleClick: function(e){

    console.log("play");
    
    this.setState({playing: !this.state.playing});
    this.props.sound.togglePause();

    //var soundObject = this.props.player.makeSound(this.props.url);
    //soundObject.play({
    //  url: this.props.url,
    //  position: 0
    //});
  },
  render: function(){
    //var check = this.props.player.state.soundObject.playState;
    var classes = classNames( 
            'sm2-inline-element',
            'sm2-button-element',
            { playing: ( this.state.playing ) },
            { paused: ( !this.state.playing ) }
          );
    return (
      /*jshint ignore:start */
      <div className={classes}>
        <div className="sm2-button-bd">
          <a href="#play" className="sm2-inline-button play-pause" onClick={this.handleClick}>Play / pause</a>
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayButton;