var React = require('react');
var Radium = require('radium');

@Radium
class PlayButton extends React.Component {

  render() {
    var playing = (this.props.sound.playState == 0) ? false : !this.props.sound.paused;
    return (
      /*jshint ignore:start */
      <div id='playWrapper' onClick={this.props.handlePlay} style={styles.playWrapper} >
        <div id='buttonBorder' style={styles.playButtonBorder}>
          <a id='playButton' href="#play" style={[styles.inlineButton, styles.unactivePlayButton,  !playing && styles.play, playing && styles.pause]}>Play / pause</a>
        </div>
      </div>
      /*jshint ignore:end */
    );
  }
};

var styles = {

  playWrapper: {
    position: 'relative',
    verticalAlign: 'middle',
    padding: 0,
    minWidth: '2.8em',
    minHeight: '2.8em',
    overflow: 'hidden',
    display: 'table-cell',
    width: '1%'
  },
  
  inlineButton: {
    textDecoration: 'none',
    position: 'absolute',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    /* hide inner text */
    lineHeight: '10em',
    /**
    * image-rendering seems to apply mostly to Firefox in this case. Use with caution.
    * https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering#Browser_compatibility
    */
    imageRendering: ['-moz-crisp-edges', ' -webkit-optimize-contrast', 'crisp-edges',  ],
    msInterpolationMode: ['nearest-neighbor', 'bicubic']
  },

  playButtonBorder: {
    minWidth: '2.8em',
    position: 'relative',
    minHeight: '2.8em'
  },
  
  unactivePlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  
  activePlayButton: {
    msTransform: 'scale(0.9)',
    WebkitTransform: 'scale(0.9)',
    WebkitTransformOrigin: '50% 50%',
    /* firefox doesn't scale quite right. */
    transform: 'scale(0.9)',
    transformOrigin: '50% 50%',
    /* firefox doesn't scale quite right. */
    MozTransform: 'none'
  },

  play: {
    backgroundImage: [ 'url(/src/assets/vendor/sm2/image/icomoon/entypo-25px-ffffff/PNG/play.png)', 'none, url(/src/assets/vendor/sm2/image/icomoon/entypo-25px-ffffff/SVG/play.svg)'],
    backgroundSize: '67.5%',
    backgroundPosition: '40% 53%'
  },

  pause: {
    backgroundImage: ['url(/src/assets/vendor/sm2/image/icomoon/entypo-25px-ffffff/SVG/pause.svg)', 'none, url(/src/assets/vendor/sm2/image/icomoon/entypo-25px-ffffff/SVG/pause.svg)'],
    backgroundSize: '57.6%',
    backgroundPosition: '50% 53%'
  }
};

PlayButton.propTypes = {
  sound: React.PropTypes.object.isRequired
};


module.exports = PlayButton;