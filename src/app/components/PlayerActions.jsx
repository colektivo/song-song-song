var React = require('react');
var classNames = require('classnames');

var PlayLocalize = React.createClass({
  render: function(){
    return(
      <div>Localize</div>
    );
  }
});

var PlayShare = React.createClass({
  render: function(){
    return(
      <div>Share</div>
    );
  }
});

var PlayCredits = React.createClass({
  render: function(){
    return(
      <div>Credits</div>
    );
  }
});

var PlayerActions = React.createClass({
  render: function(){
    var classes = classNames('player-actions', {'hide': !this.props.visible}, 'actions');
    return (
      /*jshint ignore:start */
      <div className={classes}>
        <div className={'modal'}>
          <PlayShare />
          <PlayCredits />
          <PlayLocalize />
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayerActions;