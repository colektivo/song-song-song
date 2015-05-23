var React = require('react');
var utils= require('../utilities/helpers');

var TimeElapsed = React.createClass({

  render: function(){

    var time = utils.getTime(this.props.sound.position, true);

    return (
      /*jshint ignore:start */
          <div className="sm2-inline-time">{time}</div>
      /*jshint ignore:end */
    );
  }
});

module.exports = TimeElapsed;
