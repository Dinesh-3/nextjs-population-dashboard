import React, { Component } from 'react';
import fetchData from "../services/fetchData"
import { Bar } from 'react-chartjs-2';

/* 
* Population Density Country Wise
*/
class DensityComponent extends Component{
    constructor() {
        super()
        this.state = {
            density: {}
        }
    }

    componentDidMount() {
        this.getChartData();
    }

    getChartData() {
        fetchData().then(
            data => {
                this.setState({
                    density: data.densityChart
                })
            }
        )
    }

    render() {
        return (
            <div className=".chart">
                <Bar data={this.state.density} options={{ title:{ display: true, text: "Density" , fontSize:25,
                    fontColor: "black", responsive: true }, legend:{ display:true, position: 'bottom' } }} />
            </div>
        );
    }
}

export default DensityComponent;
