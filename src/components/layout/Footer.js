import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="m-row">
                <div className="col-md-12">
                    <div className="footer p-3 text-center bg-dark text-light d-flex justify-content-center align-items-center">
                        Developed By: 
                        <span className="text-warning font-weight-normal">
                             Slavko Vranesevic
                        </span>, Using 
                        <i className="fab fa-react" /> React JS &amp; Redux JS integrated with external movies data API
                        <a href="http//www.omdbapi.com/" target="_blank" rel="noopener noreferrer"> OMDB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer