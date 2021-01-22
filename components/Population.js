import React, { Component } from 'react';
import fetchData from "../services/fetchData"
import { Bar, Line } from 'react-chartjs-2';

/* 
* Population Country Wise
*/
class PopulationComponent extends Component{
    constructor() {
        super()
        this.state = {
            population: {}
        }
    }
    componentDidMount() {
        this.getChartData();
    }
    getChartData() {
        fetchData().then(
            data => {
                this.setState({
                    population: data.populationChart
                })
            }
        )
    }

    render() {
        return (
            <div className=".chart">
                <Line data={this.state.population} options={{ title:{ display: true, text: "Population" , fontSize:25,
                    fontColor: "black",responsive: true }, legend:{ display:true, position: 'bottom' } }} />
            </div>
        );
    }
}

export default PopulationComponent;