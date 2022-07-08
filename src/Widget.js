import React from 'react';
import "./Widget.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';

function Widget() {
const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
        <div className="widget__articleLeft">
         <FiberManualRecordIcon />
        </div>

        <div className="widget__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
);

  return (
    <div className="widget">
<div className="widget__header">
<h2>LinkedIn News</h2>
<InfoIcon className="info__icon" />
</div>
{newsArticle("S&P 500 reaches all time high", "Top News - 9099 readers")}
        {newsArticle("Coronavirus: US updates", "Top News - 886 readers")}
        {newsArticle("Tesla hits new highs", "Cars & Auto - 300 readers")}
        {newsArticle("Bitcoin Breaks $55k", "Crypto - 8000 readers")}
        {newsArticle("React v.18 is here!", "Code - 123 readers")}
</div>
  );
  }

export default Widget