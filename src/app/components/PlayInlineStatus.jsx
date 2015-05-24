var React = require('react');
var PlayList = require('./PlayList');
var PlayProgress = require('./PlayProgress');
var hasSound = require('./HasSoundMixin');


var PlayInlineStatus = React.createClass({

  mixins : [hasSound],

  render: function(){
    return (
      /*jshint ignore:start */
      <div className="sm2-inline-element sm2-inline-status">

        <div className="sm2-playlist">
          <div className="sm2-playlist-target">
            <PlayList author={this.props.author} songName={this.props.songName} />
          </div>
        </div>

        <PlayProgress 
            grabbingOn={this.props.grabbingOn} 
            grabbingOff={this.props.grabbingOff} 
            sound={this.props.sound} />

      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayInlineStatus;