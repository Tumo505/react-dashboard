import React from 'react';
import ActiveIssuesDash from './../Charts/ActiveIssues';
import IssuesTypes from './../Charts/IssuesTypes';
import TypesDistribution from './../Charts/TypesDistribution';

const Statistics = (props) => {
    return (
        <div className="row">
        <div className="col-md-12">
            <ActiveIssuesDash
               {...props}
            />
        </div>
        <div className="col-md-4">
            <IssuesTypes data={props.issuesTypes} />
        </div>
        <div className="col-md-8">
            <TypesDistribution data={props.typesDistribution} months="months" />
        </div>
        </div>
    );
}

export default Statistics;
