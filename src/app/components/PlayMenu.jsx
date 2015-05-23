var React = require('react');

var PlayMenu = React.createClass({
      render: function(){
        return (
          /*jshint ignore:start */
          <div className="sm2-inline-element sm2-button-element sm2-menu">
            <div className="sm2-button-bd">
              <a type="audio/mp3" href="#menu" className="sm2-inline-button menu">menu</a>
            </div>
          </div>
          /*jshint ignore:end */
        );
      }
    });

module.exports = PlayMenu;