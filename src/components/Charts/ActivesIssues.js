import React from 'react';
import { Chart } from '@progress/kendo-charts-react-wrapper';

const ActiveIssues = (props) => {
    const seriesDefault = { type: 'column', stack: true, gap: '0.5', overlay: false };
    const series = [{ data: props.active, field: 'count', categoryField: 'date', aggregate: 'count'}]
    const categoryAxis = { baseUnit: 'months', majorTicks: { visible: false  }, labels: { step: 4, skip: 2, font: '10px sans-serif' }, line: { visible: false } };
    const valueAxis = { visible: false, majorGridLines: { visible: false } };
    return (
        <div className="card">
            <h3 className="card-header">Active Issues</h3>
            <div className="card-block">

                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg active-issues" >
                        <span className="comp-label">
                            {/* <strong>{{ issues.open + issues.closed }}</strong> */}
                            <small>Active issues</small>
                        </span>
                        <Chart
                            chartArea={{height:80}}
                            seriesDefaults={seriesDefault}
                            series={series}
                            categoryAxis={categoryAxis}
                            valueAxis={valueAxis}
                            >

                        </Chart>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default ActiveIssues;