import React from "react";
const Years = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
];
const successfullLaunch = [true, false];
const successfullLanding = [true, false];
export class Filterbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { year: null, landing: null, launch: null };
  }
  filterYear = (year) => {
    console.log(year);
    this.setState({ year }, () => {
      this.props.onUpdateFilter(this.state);
    });
  };
  updateLandingStatus = (status) => {
    this.setState({ landing: status }, () => {
      this.props.onUpdateFilter(this.state);
    });
  };
  udpateLaunchingStatus = (status) => {
    this.setState({ launch: status }, () => {
      this.props.onUpdateFilter(this.state);
    });
  };
  render() {
    return (
      <div className="filterbar">
        {Years.map((y, index) => (
          <>
            <span
              className={`year ${
                this.state.year && this.state.year === y
                  ? "year-active"
                  : "year-inactive"
              }`}
              onClick={() => this.filterYear(y, index)}
              key={`year-${index}`}
            >
              {y}
            </span>
          </>
        ))}
        <br />
        <h4 className="text-style">successfull Landing</h4>
        <br />

        {successfullLanding.map((t, index) => (
          <span
            className={`landing ${
              typeof this.state.landing === "boolean" &&
              this.state.landing === t
                ? "success"
                : ""
            }`}
            onClick={() => this.updateLandingStatus(t)}
            key={`landing-${index}`}
          >
            {`${t}`}
          </span>
        ))}
        <h4 className="text-style">successfull Launch</h4>
        <br />
        {successfullLaunch.map((t, index) => (
          <span
            className={`launch ${
              typeof this.state.launch === "boolean" && this.state.launch === t
                ? "success"
                : ""
            }`}
            onClick={() => this.udpateLaunchingStatus(t)}
            key={`landing-${index}`}
          >
            {`${t}`}
          </span>
        ))}
      </div>
    );
  }
}
