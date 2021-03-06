import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog } from "@fortawesome/free-solid-svg-icons"

const Filter = ({ showModal, openModal, qnsCount, filterUnanswered, filterNewest }) => {
    return (

        <section className="filter">
            <div className="top">
                <p><span>{qnsCount}</span> Questions</p>
                <button type="button" className="ask-btn" onClick={() => { openModal() }}>
                    Ask Question
                </button>
            </div>
            <div className="bottom">
                <div className="filter-bar">
                    <div onClick={filterNewest}>Newest</div>
                    <div>Active</div>
                    <div>Bountied</div>
                    <div onClick={filterUnanswered}>Unanswered</div>
                    <div>More</div>
                </div>
                <div className="filter-btn">

                    <FontAwesomeIcon className="cog" icon={faCog}></FontAwesomeIcon>
                    {/* <i className="fas fa-cog"></i> */}
                    <p>filter</p>

                </div>
            </div>
        </section>

    )
}

export default Filter
