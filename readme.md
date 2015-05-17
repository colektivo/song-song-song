# Song Song Song

A song as a single page application using React to easily customize the player based on SoundManager2.

This is not production ready, is on exploring phase.

### Components

```
+---+Song Song Song App+---------------------------------------------------------------------------------------------------------------------+
|                                                                                                                                            |
| +--+Player Container+--------------------------------------------------------------------------------------------------------------------+ |
| |                                                                                                                                        | |
| | +----+Standard Player+---------------------------------------------------------------------------------------------------------------+ | |
| | |                                                                                                                                    | | |
| | | +-+Play Button+------+ +--+Song Info+----------------------------------------------------+ +-+Volume Control+--+ +-+Menu+--------+ | | |
| | | |                    | |                                                                 | |                   | |               | | | |
| | | |                    | |                                                                 | |                   | |               | | | |
| | | |                    | |                                                                 | |                   | |               | | | |
| | | |                    | |                                                                 | |                   | |               | | | |
| | | |                    | +-----------------------------------------------------------------+ |                   | |               | | | |
| | | |                    |                                                                     |                   | |               | | | |
| | | |                    | +--+Play progress+------------------------------------------------+ |                   | |               | | | |
| | | |                    | |                                                                 | |                   | |               | | | |
| | | |                    | | +--Time-----+  +----Track Progress---------------+ +-Duration-+ | |                   | |               | | | |
| | | |                    | | |           |  |                                 | |          | | |                   | |               | | | |
| | | |                    | | |           |  |          +--progress---+        | |          | | |                   | |               | | | |
| | | |                    | | |           |  |          |             |        | |          | | |                   | |               | | | |
| | | |                    | | |           |  |          |             |        | |          | | |                   | |               | | | |
| | | |                    | | |           |  |          |             |        | |          | | |                   | |               | | | |
| | | |                    | | |           |  |          |             |        | |          | | |                   | |               | | | |
| | | |                    | | |           |  |          |             |        | |          | | |                   | |               | | | |
| | | |                    | | |           |  |          |             |        | |          | | |                   | |               | | | |
| | | |                    | | |           |  |          |             |        | |          | | |                   | |               | | | |
| | | |                    | | |           |  |          +-------------+        | |          | | |                   | |               | | | |
| | | |                    | | |           |  |                                 | |          | | |                   | |               | | | |
| | | |                    | | +-----------+  +---------------------------------+ +----------+ | |                   | |               | | | |
| | | |                    | |                                                                 | |                   | |               | | | |
| | | +--------------------+ +-----------------------------------------------------------------+ +-------------------+ +---------------+ | | |
| | |                                                                                                                                    | | |
| | +------------------------------------------------------------------------------------------------------------------------------------+ | |
| |                                                                                                                                        | |
| |                                                                                                                                        | |
| |                                                                                                                                        | |
| |                                                                                                                                        | |
| +----------------------------------------------------------------------------------------------------------------------------------------+ |
|                                                                                                                                            |
+--------------------------------------------------------------------------------------------------------------------------------------------+

```

### Sample?

```javascript

soundManager.onready(function(){
  console.log("SoundManager ready");

  var sound = soundManager.createSound({

    id: 'mysong',
    autoLoad: false,
    autoPlay: false,
    url: url
  });

  React.render(
      /*jshint ignore:start */
      <SongSongSongApp sound={sound} songName='Morir por qué?' author='No Mataras' fullWidth='true' />,
      /*jshint ignore:end */
      document.getElementById('app')
  );
  
});

```


### ToDo

* Mouse handling on ProgressTrack seems ugly
* Fix bug when playing and grabbing the track position, eventually stop playing.
* Add tests (after exploring phase)
* Create Lyrics component
* Playlist is not a playlist (rename it)
* Refactor song metadata in one object.

