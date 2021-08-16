import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon></FiberManualRecordIcon>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon></InfoIcon>
            </div>
            {newsArticle("New Signing", "Romelu Lukaku joins Chelsea for record signing")}
            {newsArticle("PL Kick Off", "PL season start with a bang")}
            {newsArticle("PL Predictions", "Chelsea among the Favourites")}
            {newsArticle("Super Cup", "Chelsea win Super Cup 2021, post CL 2021")}
            {newsArticle("Injury Update", "Hakim Ziyech won't require a Surgery")}
            {newsArticle("Striker Departs", "Tammy Abraham joins AS Roma on permanent deal.")}
        </div>
    )
}

export default Widgets
