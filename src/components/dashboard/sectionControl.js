import React from 'react';
import PropTypes from 'prop-types'
import '../../styles/dashboard.scss'

const SectionControl =(props) => {
        return(
            <div className="control-section">
                <div className="control-section-text">
                    <h1>{props.sectionName}</h1>
                    <span className="control-section-text__books-num">{props.numOfbook}</span>
                </div>
                <div className="control-section-action">
                    <div className="control-section-action__back"></div>
                    <div className="control-section-action__next"></div>
                </div>
            </div>
        )
}

SectionControl.propTypes = {
    sectionName:PropTypes.string.isRequired,
    numOfbook:PropTypes.number.isRequired,
}

export default SectionControl;