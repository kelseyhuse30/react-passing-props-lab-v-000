import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null,
		}
	}

	componentWillMount() {
    this.getFilters();
    this.getFruit();
  }

	getFruit() {
	  fetch('/api/fruit')
	  .then(res => res.json())
	  .then(fruit => this.setState({ fruit: fruit }));	
	}

	getFilters() {
    fetch('/api/fruit_types')
    .then(res => res.json())
    .then(filters => this.setState({filters: filters}));
	}

	updateFilter(event) {
		this.setState({
			currentFilter: event.target.value,
		})
	}

	render() {
		return (
			<FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilter} />
		);
	}
}

export default App;
