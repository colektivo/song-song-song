var React = require('react');

var PlayVolume = React.createClass({
  render: function(){
    return (
      /*jshint ignore:start */
      <div className="sm2-inline-element sm2-button-element sm2-volume">
        <div className="sm2-button-bd">
          <span className="sm2-inline-button sm2-volume-control volume-shade"></span>
          <a href="#volume" className="sm2-inline-button sm2-volume-control">volume</a>
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayVolume;