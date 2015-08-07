var React = require('react/addons');
var Radium = require('radium');
var utils= require('../utilities/helpers');
var ProgressBar = require('./ProgressBar');
var classNames = require('classnames');
var Draggable = require('react-draggable');

@Radium
class ProgressTrack extends React.Component {

  constructor() {
    super();
    this.state = {
      position: {
        top: 0, left: 0
      },
      activeDrags: 0
    }
  }
  handleClick(e){
    this.setNewPosition(e);
  }
  handleDrag(e, ui) {
    this.setNewPosition(e);
    this.setState({
      position: ui.position
    });
  }
  onStart() {
    this.props.grabbingOn();
    this.setState({activeDrags: ++this.state.activeDrags});
  }
  componentDidMount() {
    this.target = React.findDOMNode(this);
  }
  componentWillUnmount() {
    this.target = null;
  }
  //
  // This avoid to seek before start playing
  //
  canSeek(){
    return (
      this.props.sound && this.props.sound.duration && (
        (this.props.sound.playState != 0 && !this.props.sound.paused) || 
          this.props.sound.paused
        )
    );
  }
  setNewPosition(e){

    var barX, barWidth, x, newPosition;
    var clientPos = utils.getXY(e);

    barX = utils.position.getOffX(this.target);
    barWidth = this.target.offsetWidth;

    x = (clientPos.clientX - barX);
    newPosition = (x / barWidth);

    if (this.canSeek()) {
      this.props.sound.setPosition(this.props.sound.duration * newPosition);
      // a little hackish: ensure UI updates immediately with current position, even if audio is buffering and hasn't moved there yet.
      this.props.sound._iO.whileplaying.apply(this.props.sound);
    }
  }
  onStop(e){
    this.props.grabbingOff();
    this.setState({activeDrags: --this.state.activeDrags});
  }
  render(){

    var progressMaxLeft = 100
    var left = Math.min(progressMaxLeft, Math.max(0, (progressMaxLeft * ( utils.getSoundPosition(this.props.sound) / utils.getSoundDuration(this.props.sound))))) + '%';
    var width = Math.min(100, Math.max(0, (100 * utils.getSoundPosition(this.props.sound) / utils.getSoundDuration(this.props.sound)))) + '%';
    return (
      
      /*jshint ignore:start */
      <div ref='progressTrack' style={styles.track} onClick={this.handleClick.bind(this)}>
        <ProgressBar sound={this.props.sound} width={width} />
        <Draggable bound="parent" 
            onDrag={this.handleDrag.bind(this)} 
            axis="x" 
            zIndex={100} 
            start={{x: left}} 
            handle=".handle" 
            onStart={this.onStart.bind(this)} 
            onStop={this.onStop.bind(this)}>
          <div className="handle" style={[styles.ball, {left: left}]} >
            <div className="icon-overlay"></div>
          </div>
        </Draggable>
      </div>
      /*jshint ignore:end */
    );
  }
}

var styles = {
  track: {
    cursor: 'pointer',
    position: 'relative',
    width: '100%',
    height: '0.65em',
    borderRadius: '0.65em',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backgroundImage: 'none, none'
  },
  ball: {
    /* element which follows the progres "ball" as it moves */
    position: 'absolute',
    left: 0,
    top: 0,
    width: ['1em', 14, '0.9333em'],
    height: ['1em', 14, '0.9333em'],
    margin: ['-0.2em 0px 0px -0.5em', '-2px 0px 0px -7px', '-0.175em 0px 0px -0.466em'],
    backgroundColor: '#fff',
    padding: 0,
    borderRadius: '0.65em',
    zIndex: '1'
  },
  ballPlaying: {
    cursor: ['-moz-grab', '-webkit-grab', 'grab']
  }
}

ProgressTrack.propTypes = {
  sound: React.PropTypes.object.isRequired
};


module.exports = ProgressTrack;