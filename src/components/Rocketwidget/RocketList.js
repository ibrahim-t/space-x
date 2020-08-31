import React from "react";
import { withReducer } from "../HOC/withReducer";
import { doFetchData, doUpdateFilter } from "./actions";
import { reducer } from "./reducer";
import { Filterbar } from "../Filterbar";
class RocketList extends React.Component {
  componentWillMount() {
    if (this.props.onFetchData) {
      this.props.onFetchData();
    }
  }

  render() {
    const { records } = this.props;
    return (
      <div className="main-content">
        <Filterbar onUpdateFilter={this.props.onUpdateFilter} />
        {records && records.length > 0 ? (
          <div className="Rocket-list">
            {records.map((r) => {
              return (
                <div className="rocket-card">
                  <div className="rocket-image-view">
                    <img
                      className="rocket-image"
                      alt={r.rocket["rocket_name"]}
                      src={r.img}
                    />
                  </div>
                  <div className="rocket-detail">
                    <h4 className="rocket-name">{`${r.mission_name} #${r.flight_number}`}</h4>
                    <table>
                      <tr>
                        <th>
                          <td>Mission Ids : </td>
                        </th>
                        <td>{r.mission_id}</td>
                      </tr>
                      <tr>
                        <th>
                          <td>Launch Year : </td>
                        </th>
                        <td>{r.launch_year}</td>
                      </tr>
                      <tr>
                        <th>
                          <td>Successful Launch : </td>
                        </th>
                        <td>{r.launch_success ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <th>
                          <td>Successful Landing : </td>
                        </th>
                        <td>
                          {r.rocket["first_stage"]["cores"][0]["land_success"]? "Yes":"No"}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "No records"
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: () => dispatch(doFetchData()),
    onUpdateFilter: (evt) => dispatch(doUpdateFilter(evt)),
  };
};
export default withReducer(
  mapStateToProps,
  mapDispatchToProps,
  reducer
)(RocketList);
