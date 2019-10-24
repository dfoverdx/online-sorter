import React, { PureComponent } from 'react';
import Context from '../context';
import DataEntry from './data-entry';

interface Props {}

export default class Stages extends PureComponent<Props> {
    context!: CT;

    render() {
        return <DataEntry />;
    }

    static contextType = Context;
}