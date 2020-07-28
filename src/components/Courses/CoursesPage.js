import React from "react";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import *  as courseActions from "../../redux/actions/courseActions"
class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course))
  };
  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
      {this.props.courses.map((course, i) => (
        <div key={i}>{course.title}</div> 
      ))}
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}


CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    courses: state.courses

  }
}
export default connect(mapStateToProps)(CoursesPage);
