import React from "react";
import { connect } from "react-redux";
import './CounterContainer.css'

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
    onAdd1: () => dispatch({ type: "add1" }),
    onAdd10: () => dispatch({ type: "add10" }),
    onRemove1: () => dispatch({ type: "remove1" }),
    onRemove10: () => dispatch({ type: "remove10" }),
    onReset: () => dispatch({ type: "RESET" })
});

const CounterComponent = ({counter, onAdd1, onAdd10, onRemove1, onRemove10, onReset}) => (
    <div>
        <p>{counter}</p>
        <button onClick={onAdd1}>ADD 1</button>
        <button onClick={onAdd10}>ADD 10</button>
        <button onClick={onRemove1}>REMOVE 1</button>
        <button onClick={onRemove10}>REMOVE 10</button>
        <button onClick={onReset}>RESET</button>
    </div>
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);