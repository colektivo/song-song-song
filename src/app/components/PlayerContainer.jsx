var React = require('react');
var StandardUIPlayer = require('./StandardUIPlayer');

var PlayerContainer = React.createClass({

  propTypes: {
    id: React.PropTypes.string,
    autoLoad: React.PropTypes.bool,
    autoPlay: React.PropTypes.bool,
    html5Only: React.PropTypes.bool,
    url: React.PropTypes.string.isRequired,
    authenticated: React.PropTypes.bool,
    fullWidth: React.PropTypes.string,
    songName: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      authenticated: false,
      id: 'mysong'
    };
  },

  handlePlayClick: function(e){
    this.sound.togglePause();
  },

  bindToEvents: function(){

    // update on current position
    var updatePlay = function(){this.update()}.bind(this);

    var onFinish = function(){this.finish()}.bind(this);

    // try to catch the events when load
    this.sound.load({

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

    this.sound = soundManager.createSound({
      id: this.props.id,
      autoLoad: this.props.autoLoad,
      autoPlay: this.props.autoPlay,
      html5Only: this.props.html5Only,
      url: this.props.url
    });

    // this is the way that I found to be able to update the component from the sound object callback
    this.bindToEvents();

  },

  getInitialState: function() {
    return {sound: this.sound};
  },

  finish: function() {

    this.refs.player.setState({ playing: false});

    // after finishing the events attached are gone, we need to attach them again
    this.bindToEvents();

  },
  
  update: function() {
    this.setState({ sound: this.sound});
  },
  
  render: function(){
    return (
      /*jshint ignore:start */
      <StandardUIPlayer ref='player' handlePlay={this.handlePlayClick} sound={this.sound} 
          author={this.props.author} songName={this.props.songName} fullWidth={this.props.fullWidth} />
      /*jshint ignore:end */
    );
  }
});

module.exports = PlayerContainer;