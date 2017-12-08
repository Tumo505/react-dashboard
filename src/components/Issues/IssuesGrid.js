import React, { Component } from 'react';
import { Grid, Column, GridCell } from '@progress/kendo-react-grid';

const cellWithTemplate = (Component) => {
    return class extends React.Component {
        render() {
            return (<td><Component {...this.props} /></td>);
        }
    }
}

const IssuesGrid = (props) => {
    return(
        <Grid data={props.issues}>
            <Column field="number" title="ID" _width="80px" cell={cellWithTemplate(NumberCellTemplate)} />
            <Column field="title" title="Title" cell={cellWithTemplate(TitleCellTemplate)} />
            <Column field="labels" title="Labels" _width="100px" cell={cellWithTemplate(LabelCellTemplate)} />
            <Column field="milestone" title="Milestone" _width="150px" cell={cellWithTemplate(MilestoneCellTemplate)} />
            <Column field="assignee" title="Assignee" cell={cellWithTemplate(AssigneeCellTemplate)} />
        </Grid>
    );
}

const AssigneeCellTemplate = (props) => {
    if (!props.dataItem.assignee) {
        return '';
    }
    let assignee = props.dataItem.assignee;
    return <img src={assignee.avatar_url} style={{width: '30px', height: '30px'}} className='img-circle' />;{assignee.login};
}

const MilestoneCellTemplate = (props) => {
    return props.dataItem.milestone ? props.dataItem.milestone.title : '';
}

const NumberCellTemplate = (props) => {
    return <a href={props.dataItem.html_url}>{props.dataItem.number}</a>
}

const TitleCellTemplate = (props) => {
    let classes = [props.dataItem.state === 'open' ? 'issue-open': 'issue-closed', 'issue-status'].join(' ');
    return <span className={classes}>{props.dataItem.title}</span>
}

const LabelCellTemplate = (props) => {
    let colors = {
        'SEV: LOW' : '#ff9800',
        'SEV: MEDIUM' : '#ff5d2a',
        'SEV: HIGH' : '#d50000',
        'ENHANCEMENT' : '#00c853',
        'FEATURE' : '#2e7d32',
        'OTHER' : '#1ca8dd',
        'PASSED QA' : '#57b45b',
        'BUG' : '#cf3257',
        'NEEDS QA' : '#bc007c',
        'DOCUMENTATION' : '#455a64',
        'DEMO' : '#673ab7',
        'DELETED' : '#f44336',
        'IN PROGRESS' : '#ffd600'
    };
    return props.dataItem.labels.map(label => {
            let color = colors[label.name.toUpperCase()] || colors.OTHER;

            return <span key={label.name} className="badge" style={{ backgroundColor: color }}>
                    {label.name}
                   </span>
    });
}

export default IssuesGrid;