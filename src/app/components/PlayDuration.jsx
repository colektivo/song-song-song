var React = require('react');
var Radium = require('radium');
var utils= require('../utilities/helpers');

@Radium
class Duration extends React.Component {
  render(){

    var duration = utils.getTime(this.props.sound.duration, true);

    return (
      /*jshint ignore:start */
      <div id="Duration" style={styles.duration}>{duration}</div>
      /*jshint ignore:end */
    );
  }
}

var styles = {
  duration: {
    display: 'table-cell',
    width: '1%',
    fontSize: '75%',
    lineHeight: '0.9em',
    minWidth: '2em', /* if you have sounds > 10:00 in length, make this bigger. */
    verticalAlign: 'middle'
  }
}

Duration.propTypes = {
  sound: React.PropTypes.object.isRequired
};

module.exports = Duration;
