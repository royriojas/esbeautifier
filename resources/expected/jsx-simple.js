var React = require( 'react' );

module.exports = React.createClass( {
  render: function () {
    var someProp = 'some value';
    var more = this.props.more;
    return <a data-some-vale="some"
              data-prop={ someProp }
              data-more={ more }><span>Some button</span></a>;
  }
} );
