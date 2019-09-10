import React from "react";
import { connect } from "react-redux";
import { addItem } from "../src/actions/actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = ({ car, store, additionalPrice, addItem }) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = (e, item) => {
    // dipsatch an action here to add an item
    e.preventDefault();
    console.log(item);
    addItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} store={store} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { addItem }
)(App);
