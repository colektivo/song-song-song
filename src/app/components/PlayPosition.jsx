var React = require('react');
var Radium = require('radium');
var utils= require('../utilities/helpers');

@Radium
class TimeElapsed extends React.Component {
  render(){

    var time = utils.getTime(this.props.sound.position, true);

    return (
      /*jshint ignore:start */
          <div style={styles.time} >{time}</div>
      /*jshint ignore:end */
    );
  }
  
}

var styles = {
  time: {
    display: 'table-cell',
    width: '1%',
    fontSize: '75%',
    lineHeight: '0.9em',
    minWidth: '2em', /* if you have sounds > 10:00 in length, make this bigger. */
    verticalAlign: 'middle',
    color: '#fff'
  }
};

TimeElapsed.propTypes = {
  sound: React.PropTypes.object.isRequired
};


module.exports = TimeElapsed;
