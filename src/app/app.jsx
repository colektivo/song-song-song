'use strict';
var Radium = require('radium');
var Style = Radium.Style;
var React = require('react'),
  SongSongSongApp;

var url = "https://api.soundcloud.com/tracks/202637761/stream?client_id=728189eaa03c689c2bd4eaf42f410196&secret_token=s-SFJ0A";
var PlayerContainer = require('./components/PlayerContainer');

SongSongSongApp = React.createClass({

  componentWillMount: function(){
    document.body.style.backgroundImage = 'url(' + this.props.background + ')';
  },
  componentWillUnmount: function(){
    document.body.style.backgroundImage = null;
  },
  render: function() {
    return (
        /*jshint ignore:start */
        <div>
          <Style rules={{
            html: {
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              top: 0,
              margin: 0,
              padding: 0
            },
            body: {
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              top: 0,
              margin: 0,
              padding: 0,
              backgroundColor : '#333',
              backgroundSize : 'cover',
              backgroundRepeat : 'no-repeat'
            }
          }} />
          <PlayerContainer windowed={true} url={this.props.url} songName={this.props.songName} author={this.props.author} fixed={this.props.fixed} fullWidth={this.props.fullWidth}/>
        </div>
        /*jshint ignore:end */
    );
  }
});

soundManager.onready(function(){

  var rootInstance = React.render(

      /*jshint ignore:start */
      <SongSongSongApp background='/src/assets/images/inconsciente01.jpg' url={url} songName='Inconsciente' author='No Mataras' fullWidth={true} flat={true} fixed={true} />,
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
