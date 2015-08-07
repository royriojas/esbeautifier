var React = require( 'react' );

module.exports = React.createClass( {
  render: function () {
    return <div className="list-item"
                data-id={ entry.id }
                key={ entry.id }
                data-page={ entry.pages[ 0 ].label }>
             <div className="thumb-image"
                  data-label={ entry.label }
                  data-deferred-image
                  data-img-src={ entry.pages[ 0 ].thumbUrl }></div>
             <div className="page-info">
               <div className="label-chapter">
                 { entry.shortName }
               </div>
               <div className="label-page">
                 { entry.pages[ 0 ].label }
               </div>
             </div>
           </div>
  }
} );
