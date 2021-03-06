import React from "react";
import PropTypes from "prop-types";

const EditStudentFormView = (props) => {
    return (
        <div className="jumbotron text-dark mt-5">
            <p className="lead" style={{ fontWeight: "bold" }}>Edit Student</p>
            <p className="lead">Emails must be unique and GPA is between 0.0 and 4.0</p>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:{" "}</label>
                    <input
                        value={props.firstName}
                        name="firstName"
                        id="firstName"
                        onChange={props.handleChange}
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:{" "}</label>
                    <input
                        value={props.lastName}
                        name="lastName"
                        id="lastName"
                        onChange={props.handleChange}
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Email:{" "}</label>
                    <input
                        value={props.email}
                        name="email"
                        id="email"
                        onChange={props.handleChange}
                        type="email"
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">GPA:{" "}</label>
                    <input
                        value={props.gpa}
                        name="gpa"
                        id="gpa"
                        onChange={props.handleChange}
                        type="number"
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Image URL:{" "}</label>
                    <input
                        value={props.imageUrl}
                        name="imageUrl"
                        id="imageUrl"
                        onChange={props.handleChange}
                    ></input>
                </div>
                <button className="btn btn-success">Edit Student</button>
            </form>
        </div>
    );
};

EditStudentFormView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gpa: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default EditStudentFormView;
