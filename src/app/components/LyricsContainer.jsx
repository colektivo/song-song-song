var React = require('react');
var utils= require('../utilities/helpers');

var LyricsContainer = React.createClass({
  render: function(){
    return (
      /*jshint ignore:start */
      <div className="">

        <textarea ref="text" />

      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = LyricsContainer;