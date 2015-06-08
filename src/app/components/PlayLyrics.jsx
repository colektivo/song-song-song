var React = require('react');
var utils= require('../utilities/helpers');
var LyricsContainer = require('./LyricsContainer');
var hasSound = require('./HasSoundMixin');

var LyricsPlayer = React.createClass({

  render: function(){
    return (
      /*jshint ignore:start */
      <audio />
      /*jshint ignore:end */
    );
  }
});

var PlayLyrics = React.createClass({

  mixins : [hasSound],

  render: function(){
    return (
      /*jshint ignore:start */
      <div>

        <LyricsPlayer ref="lyricsPlayer" />
        <LyricsContainer ref="lyrics" sound={this.props.sound} />

      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayLyrics;