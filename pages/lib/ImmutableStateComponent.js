import Immutable from 'immutable';
import React from 'react';
import _ from 'lodash';

export default class ImmutableStateComponent extends React.Component {
	constructor() {
		super(...arguments);

		this.state = { data: this.getDefaultState(...arguments) };
	}

	getDefaultState() {
		return Immutable.Map();
	}

	getState() {
		return this.state.data;
	}

	getInState(path, defaultValue) {
		const state = this.state.data;
		const getInPath = _.isArray(path) ? path : [path];

		return state.getIn(getInPath, defaultValue);
	}

	updateState(mutator, callback = _.noop) {
		return new Promise(resolve => {
			this.setState(
				state => {
					return { data: mutator(state.data) };
				},
				() => {
					resolve(this.state.data);
					callback(this.state.data);
				}
			);
		});
	}

	setInState(path, value, callback = _.noop) {
		const setInPath = _.isArray(path) ? path : [path];

		return this.updateState(state => {
			return state.setIn(setInPath, value);
		}, callback);
	}

	updateInState(path, defaultValue, mutator, callback = _.noop) {
		const updateInPath = _.isArray(path) ? path : [path];

		const defaultValueProvided = !_.isFunction(defaultValue);
		const fixedDefaultValue = defaultValueProvided ? defaultValue : undefined;
		const fixedMutator = defaultValueProvided ? mutator : defaultValue;
		const fixedCallback = defaultValueProvided ? callback : mutator;

		return this.updateState(state => {
			return state.updateIn(updateInPath, fixedDefaultValue, fixedMutator);
		}, fixedCallback);
	}

	resetState(callback = _.noop) {
		return this.updateState(state => this.getDefaultState(this.props), callback);
	}
}
