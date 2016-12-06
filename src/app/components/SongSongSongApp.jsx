var Radium = require('radium');
var Style = Radium.Style;
var React = require('react'),
  SongSongSongApp;

var PlayerContainer = require('./PlayerContainer');

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

module.exports = SongSongSongApp;
