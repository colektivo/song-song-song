var React = require('react');

// this mixins specify a required sound object.
var HasSound = {
  propTypes: {
      sound: React.PropTypes.object.isRequired
  }
};

module.exports = HasSound;
