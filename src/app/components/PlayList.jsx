var React = require('react');

var PlayList = React.createClass({
  render: function(){
    return (
      /*jshint ignore:start */
      <ul className="sm2-playlist-bd">
        <li><b>{this.props.author}</b> - {this.props.songName}</li>
      </ul>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayList;