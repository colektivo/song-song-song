'use strict';

var React = require('react'),
  SongSongSongApp;

var url = "https://api.soundcloud.com/tracks/73114586/stream?client_id=728189eaa03c689c2bd4eaf42f410196";
var PlayerContainer = require('./components/PlayerContainer');

SongSongSongApp = React.createClass({
  render: function() {
    return (
        /*jshint ignore:start */
        <div>
            <h2>Hello, Play React</h2>
            <PlayerContainer sound={this.props.sound} songName={this.props.songName} author={this.props.author} fullWidth={this.props.fullWidth}/>
        </div>
        /*jshint ignore:end */
    );
  }
});

soundManager.onready(function(){
  console.log("SoundManager ready");

  var sound = soundManager.createSound({

    id: 'mysong',
    autoLoad: false,
    autoPlay: false,
    url: url
  });

  React.render(
      /*jshint ignore:start */
      <SongSongSongApp sound={sound} songName='Morir por qué?' author='No Mataras' fullWidth='true' />,
      /*jshint ignore:end */
      document.getElementById('app')
  );
  
});
