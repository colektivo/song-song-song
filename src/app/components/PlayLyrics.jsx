var React = require('react');
var utils= require('../utilities/helpers');
var LyricsContainer = require('./LyricsContainer');
var LyricsPlayer = require('./LyricsPlayer');
var hasSound = require('./HasSoundMixin');

var PlayLyrics = React.createClass({

  mixins : [hasSound],

  render: function(){
    return (
      /*jshint ignore:start */
      <div className="">

        <LyricsPlayer ref="lyricsPlayer" />
        <LyricsContainer ref="lyrics" />

      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayLyrics;