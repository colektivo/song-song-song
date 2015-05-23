var React = require('react');
var classNames = require('classnames');

var PlayButton = React.createClass({
  render: function(){

    var classes = classNames( 
            'sm2-inline-element',
            'sm2-button-element'
          );
    return (
      /*jshint ignore:start */
      <div className={classes} onClick={this.props.handlePlay}>
        <div className="sm2-button-bd">
          <a href="#play" className="sm2-inline-button play-pause" >Play / pause</a>
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayButton;