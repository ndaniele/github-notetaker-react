var React = require('react');
var NotesList = require('./NotesList');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },
  render: function(){
    console.log('Notes: ',this.props.notes);
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        <NotesList notes={this.props.notes}></NotesList>
      </div>
    )
  }
});

module.exports = Notes;
