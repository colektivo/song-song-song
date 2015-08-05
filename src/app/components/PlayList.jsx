var React = require('react');
var Radium = require('radium');

@Radium
class PlayList extends React.Component {
  render() {
    return (
      /*jshint ignore:start */
      <ul id="playListText" style={styles.wrapper}>
        <li style={styles.text}><b>{this.props.author}</b> - {this.props.songName}</li>
      </ul>
      /*jshint ignore:end */
    );
  }
}

var styles = {
  wrapper: {
    position: 'absolute',
    width: '100%',
    listStyleType: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    margin: 0,
    padding: 0
  },
  text: {
    color: '#fff',
    position: 'relative',
    display: 'block',
    height: '1.5em',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center'
  }
};

module.exports = PlayList;