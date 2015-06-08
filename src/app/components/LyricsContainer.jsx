var React = require('react');
var utils= require('../utilities/helpers');

var LyricsContainer = React.createClass({

  // this is because the different browser implementations
  createCue: function(start, end, text){
    return new(window.VTTCue || window.TextTrackCue)(start, end, text);
  },

  componentWillMount: function(){

    this.soundForTrack = new Audio();
    this.track = this.soundForTrack.addTextTrack("metadata", "Lyrics", "es");
    // Add cues for sounds we care about.
    this.track.addCue(this.createCue(1, 3, 'surcando'));
    this.track.addCue(this.createCue(4, 6, 'la noche'));
    this.track.addCue(this.createCue(6.5, 8.5, 'yo voy'));
    this.track.addCue(this.createCue(9, 10.7, 'en mi auto'));
    this.track.addCue(this.createCue(11.5, 13, 'luces largas'));
    this.track.addCue(this.createCue(14.2, 15.8, 'piernas largas'));
    this.track.addCue(this.createCue(17, 18, 'cuando llegue'));
    this.track.addCue(this.createCue(19.2, 20.5, 'voy a estar'));
    this.track.addCue(this.createCue(20.5, 22.8, '1 2, 1 2 3 4'));
    this.track.addCue(this.createCue(23, 25.4, 'inconcien inconcien...'));
    this.track.addCue(this.createCue(25.6, 28, 'estaré inconciente'));
    this.track.addCue(this.createCue(28.2, 30.4, 'inconcien inconcien...'));
    this.track.addCue(this.createCue(30.6, 33.8, 'estaré inconciente'));
    this.track.addCue(this.createCue(34.7, 36.6, 'pendejas'));
    this.track.addCue(this.createCue(37.6, 39.6, 'bailando'));
    this.track.addCue(this.createCue(40.1, 42.1, 'mi mente'));
    this.track.addCue(this.createCue(42.5, 45, 'volando'));
    this.track.addCue(this.createCue(45.4, 47, 'luces largas'));
    this.track.addCue(this.createCue(48, 49.7, 'piernas largas'));
    this.track.addCue(this.createCue(50.2, 52, 'cuando llegue'));
    this.track.addCue(this.createCue(53.2, 54.2, 'voy a estar'));
    this.track.addCue(this.createCue(54.2, 56.7, '1 2, 1 2 3 4'));
    this.track.addCue(this.createCue(56.8, 58.8, 'inconcien inconcien...'));
    this.track.addCue(this.createCue(59, 61.7, 'estaré inconciente'));
    this.track.addCue(this.createCue(61.9, 64.3, 'inconcien inconcien'));
    this.track.addCue(this.createCue(64.4, 67.4, 'estaré inconciente'));
    this.track.addCue(this.createCue(77, 78.5, 'aunque'));
    this.track.addCue(this.createCue(79.2, 82.5, 'quisiera perderte hoy'));
    this.track.addCue(this.createCue(82.5, 84.5, 'aunque'));
    this.track.addCue(this.createCue(84.8, 86.8, 'no puedo salir'));
    this.track.addCue(this.createCue(87, 88.8, 'de tu voz'));
    this.track.addCue(this.createCue(89.3, 91, 'de tu voz'));
    this.track.addCue(this.createCue(92, 93.5, 'de tu voz'));
    this.track.addCue(this.createCue(95, 97, 'de tu voz'));
    this.track.addCue(this.createCue(109.5, 112, 'inconcien inconcien...'));
    this.track.addCue(this.createCue(112.2, 114.6, 'estaré inconciente'));
    this.track.addCue(this.createCue(114.8, 117, 'inconcien inconcien...'));
    this.track.addCue(this.createCue(117.2, 119.5, 'estaré inconciente'));
    this.track.addCue(this.createCue(120, 124, 'quiero estar inconsciente'));
    this.track.addCue(this.createCue(125, 129, 'quiero estar inconsciente'));
    this.track.addCue(this.createCue(130, 131.5, 'aunque'));
    this.track.addCue(this.createCue(132.5, 135.5, 'quisiera perderte hoy'));
    this.track.addCue(this.createCue(135.5, 137.5, 'aunque'));
    this.track.addCue(this.createCue(137.8, 140, 'no puedo salir'));
    this.track.addCue(this.createCue(160, 163, '1 2, 1 2 3 4'));
    this.track.addCue(this.createCue(165, 168, 'estaré inconciente'));
    this.track.addCue(this.createCue(170, 172.5, 'estaré inconciente'));
    this.track.addCue(this.createCue(172.5, 175.5, 'quiero estar inconciente'));
    this.track.addCue(this.createCue(175.5, 177.7, 'estaré inconciente'));
    this.track.addCue(this.createCue(177.7, 180.5, 'quiero estar inconciente'));
    this.track.addCue(this.createCue(180.5, 183.5, 'estaré inconciente'));
    
    this.cueText = '';

  },

  getText: function(){
    var currentPosition = (this.props.sound.position / 1000 || 0);

    for (var i = 0; i != this.track.cues.length; ++i) {

      //safari needs time adjustments
      if (this.track.cues[i].startTime <= currentPosition && currentPosition <= this.track.cues[i].endTime) {
        return {
          'text': this.track.cues[i].text,
          'length': this.track.cues[i].endTime - currentPosition
        };
      }
    }
    return {
      'text':'',
      'length': 0.25
    };
  },

  render: function(){
    cueInfo = this.getText();
    if (this.cueText !== cueInfo.text){
      this.cueText = cueInfo.text;
      var duration = cueInfo.length - 0.75;
      var animation = {
        'animation-duration':duration+'s'
      };
    }
    

    return (
      /*jshint ignore:start */
      <div className={'lyrics'} style={animation}>{this.cueText}</div>
      /*jshint ignore:end */
    );
  }
});

module.exports = LyricsContainer;