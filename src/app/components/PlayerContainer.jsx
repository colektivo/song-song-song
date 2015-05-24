var React = require('react');
var StandardUIPlayer = require('./StandardUIPlayer');

var PlayerContainer = React.createClass({
  
  propTypes: {
      authenticated: React.PropTypes.bool,
      fullWidth: React.PropTypes.string,
      sound: React.PropTypes.object.isRequired,
      songName: React.PropTypes.string.isRequired,
      author: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      authenticated: false
    };
  },

  handlePlayClick: function(e){
    this.props.sound.togglePause();
  },

  bindToEvents: function(){

    // update on current position
    var updatePlay = function(){this.update()}.bind(this);

    var onFinish = function(){this.finish()}.bind(this);

    // try to catch the events when load
    this.props.sound.load({

      whileplaying: function() {
        updatePlay();
      },

      onplay: function() {
        updatePlay();
      },

      onpause: function() {
        updatePlay();
      },

      onresume: function() {
        updatePlay();
      },

      whileloading: function() {

        if (!this.isHTML5) {
          //dom.duration.innerHTML = getTime(this.durationEstimate, true);
        }

      },

      onload: function(ok) {

        if (ok) {
          console.log("onload ok");
          // dom.duration.innerHTML = getTime(this.duration, true);
        } else if (this._iO && this._iO.onerror) {
          console.log("onload error");
          //this._iO.onerror();

        }
      },

      onerror: function() {

        // sound failed to load.
        var item, element, html;

        item = playlistController.getItem();

        if (item) {

          // note error, delay 2 seconds and advance?
          // playlistTarget.innerHTML = '<ul class="sm2-playlist-bd"><li>' + item.innerHTML + '</li></ul>';

          if (extras.loadFailedCharacter) {
            dom.playlistTarget.innerHTML = dom.playlistTarget.innerHTML.replace('<li>' ,'<li>' + extras.loadFailedCharacter + ' ');
            if (playlistController.data.playlist && playlistController.data.playlist[playlistController.data.selectedIndex]) {
              element = playlistController.data.playlist[playlistController.data.selectedIndex].getElementsByTagName('a')[0];
              html = element.innerHTML;
              if (html.indexOf(extras.loadFailedCharacter) === -1) {
                	element.innerHTML = extras.loadFailedCharacter + ' ' + html;
                }
            }
          }

        }

        // load next, possibly with delay.

          if (navigator.userAgent.match(/mobile/i)) {
            // mobile will likely block the next play() call if there is a setTimeout() - so don't use one here.
          actions.next();
        } else {
          if (playlistController.data.timer) {
          	window.clearTimeout(playlistController.data.timer);
          }
          playlistController.data.timer = window.setTimeout(actions.next, 1000);
        }

      },

      onstop: function() {
        updatePlay();
      },

      onfinish: function() {
        onFinish();
      }
      
    });
    
  },
  
  componentWillMount: function(){

    // this is the way that I found to be able to update the component from the sound object callback
    this.bindToEvents();
    
  },

  getInitialState: function() {
    return {sound: this.props.sound};
  },

  finish: function() {

    this.refs.player.setState({ playing: false});

    // after finishing the events attached are gone, we need to attach them again
    this.bindToEvents();

  },
  
  update: function() {
    this.setState({ sound: this.props.sound});
  },
  
  render: function(){
    return (
      /*jshint ignore:start */
      <StandardUIPlayer ref='player' handlePlay={this.handlePlayClick} sound={this.state.sound} 
          author={this.props.author} songName={this.props.songName} fullWidth={this.props.fullWidth} />
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayerContainer;