import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Timer extends Component {
  render() {
    const { timer } = this.props;
    return (
      <div>
        <span>
          {timer === 0 ? 'Time is over' : timer}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.triviaReducer.timer,
});

// const mapDispatchToProps = (dispatch) => ({
//   timerDispatch: () => dispatch(subTimer()),
// });

Timer.propTypes = {
  // timerDispatch: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Timer);
