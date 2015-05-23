var React = require('react');
var utils= require('../utilities/helpers');
var LyricsContainer = require('./LyricsContainer');
var LyricsPlayer = require('./LyricsPlayer');

var PlayLyrics = React.createClass({
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