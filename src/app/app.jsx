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
            <h2>Hello, Play React Rocks.</h2>
            <PlayerContainer url={this.props.url} songName={this.props.songName} author={this.props.author} fullWidth={this.props.fullWidth}/>
        </div>
        /*jshint ignore:end */
    );
  }
});

soundManager.onready(function(){

  var rootInstance = React.render(
      /*jshint ignore:start */
      <SongSongSongApp url={url} songName='Morir por qué?' author='No Mataras' fullWidth='true' />,
      /*jshint ignore:end */
      document.getElementById('app')
  );

  if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
      getRootInstances: function () {
        // Help React Hot Loader figure out the root component instances on the page:
        return [rootInstance];
      }
    });
  }

});
