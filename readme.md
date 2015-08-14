[![Dependency Status](http://david-dm.org/colektivo/song-song-song.svg)](http://david-dm.org/colektivo/song-song-song)

# Song Song Song

A song as a single page application using React to easily customize the player based on SoundManager2.

This is not production ready, is on exploring phase.

### Components

```
+---+Song Song Song App+--------------------------------------------------------------------------+
|                                                                                                 |
| +--+Player Container+-------------------------------------------------------------------------+ |
| |                                                                                             | |
| | +----+Standard Player+--------------------------------------------------------------------+ | |
| | |                                                                                         | | |
| | | +-+Play Button+-----+ +-+Song Info+---------------------------------------+ +-+Volume-+ | | |
| | | |                   | |                                                   | |         | | | |
| | | |                   | |                                                   | |         | | | |
| | | |                   | |                                                   | |         | | | |
| | | |                   | |                                                   | |         | | | |
| | | |                   | +---------------------------------------------------+ |         | | | |
| | | |                   |                                                       |         | | | |
| | | |                   | +-+Play progress+-----------------------------------+ |         | | | |
| | | |                   | |                                                   | |         | | | |
| | | |                   | |+--Time-----+  +Track Progress-------+ +-Duration-+| |         | | | |
| | | |                   | ||           |  |                     | |          || |         | | | |
| | | |                   | ||           |  |      +--progress--+ | |          || |         | | | |
| | | |                   | ||           |  |      |            | | |          || |         | | | |
| | | |                   | ||           |  |      |            | | |          || |         | | | |
| | | |                   | ||           |  |      |            | | |          || |         | | | |
| | | |                   | ||           |  |      |            | | |          || |         | | | |
| | | |                   | ||           |  |      |            | | |          || |         | | | |
| | | |                   | ||           |  |      |            | | |          || |         | | | |
| | | |                   | ||           |  |      |            | | |          || |         | | | |
| | | |                   | ||           |  |      +------------+ | |          || |         | | | |
| | | |                   | ||           |  |                     | |          || |         | | | |
| | | |                   | |+-----------+  +---------------------+ +----------+| |         | | | |
| | | |                   | |                                                   | |         | | | |
| | | +-------------------+ +---------------------------------------------------+ +---------+ | | |
| | |                                                                                         | | |
| | +-----------------------------------------------------------------------------------------+ | |
| |                                                                                             | |
| |                                                                                             | |
| |                                                                                             | |
| |                                                                                             | |
| +---------------------------------------------------------------------------------------------+ |
|                                                                                                 |
+-------------------------------------------------------------------------------------------------+

```

### Usage

```

npm install
npm start

# open http://localhost:3000/

```


### ToDo

* move sample app to examples
* Implement onError
* Implement onLoad
* review directory structure
* complete package.json
* check what to do with warnings and unsupported properties on Radium
* make it major browsers resistent
* Add tests (after exploring phase)
* Implement whileloading for flash player
