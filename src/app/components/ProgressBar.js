var React = require('react');
var utils= require('../utilities/helpers');

var ProgressBar = React.createClass({

  render: function(){
    var width;
    width = Math.min(100, Math.max(0, (100 * this.props.position / this.props.duration))) + '%';

    var bar = {
      "width": width
    };

    return (
      
      /*jshint ignore:start */
      <div className="sm2-progress-bar" style={bar}></div>
      /*jshint ignore:end */
    );
  }
});

module.exports = ProgressBar;