import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import SongSongSongApp from './components/SongSongSongApp';

const url = "https://api.soundcloud.com/tracks/202637761/stream?client_id=728189eaa03c689c2bd4eaf42f410196&secret_token=s-SFJ0A";

const soundManager = require('SoundManager2').soundManager;

soundManager.onready(function() {

  var bg = require('../assets/images/inconsciente01.jpg');

  var rootInstance = render(
      /*jshint ignore:start */
      <SongSongSongApp background={bg} url={url} songName='Inconsciente' author='No Mataras' fullWidth={true} flat={true} fixed={true} />,
      /*jshint ignore:end */
      document.getElementById('app')
  );

  if (module.hot) {
    module.hot.accept('./components/SongSongSongApp', () => {
      rootInstance
    })
  }
});
