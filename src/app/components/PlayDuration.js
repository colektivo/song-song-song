var React = require('react');
var utils= require('../utilities/helpers');

var Duration = React.createClass({

  render: function(){

    var duration = utils.getTime(this.props.duration, true);

    return (
      /*jshint ignore:start */
      <div className="sm2-inline-duration">{duration}</div>
      /*jshint ignore:end */
    );
  }
});

module.exports = Duration;