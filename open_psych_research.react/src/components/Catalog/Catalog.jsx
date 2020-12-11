import React, {Component} from 'react';
import OptionsList from "./OptionsList";

export default class Catalog extends Component {
    state = {
        optionsList: []
    }

    updateOptions = (newList) => {
        this.setState({optionsList: newList});
    }

    async componentDidMount() {
        try {
            const data_url = "https://api.npoint.io/aba77ace9ebffddf87fa"
            const data = await (await fetch(data_url)).json();
            this.updateOptions(data);
        } catch (error) {
            console.error(`fetch operation failed: ${error.message}`);
        }
    }

    render() {
        return (
            <>
                <OptionsList list_data={this.state.optionsList} />
            </>
        );
    }
}


