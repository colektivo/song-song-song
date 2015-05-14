var React = require('react');
var PlayList = require('./PlayList');
var PlayProgress = require('./PlayProgress');


var PlayInlineStatus = React.createClass({
  render: function(){
    return (
      /*jshint ignore:start */
      <div className="sm2-inline-element sm2-inline-status">

        <div className="sm2-playlist">
          <div className="sm2-playlist-target">
            <PlayList author={this.props.author} songName={this.props.songName} />
          </div>
        </div>

        <PlayProgress position={this.props.position} duration={this.props.duration} sound={this.props.sound} />

      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayInlineStatus;