const React = require('react')

var _ = require('underscore');


const HelloWorld = props => {
  return (
    <React.Fragment>
      {_.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 != 0)}
    </React.Fragment>
  )
}

module.exports =HelloWorld
