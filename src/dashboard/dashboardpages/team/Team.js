import TeamList from './teamlist/TeamList';
import AddTeam from './addteam/AddTeam';
import './team.css';
import { FilterListRounded } from "@material-ui/icons";

export default function Team() {
    return(
        <div className="team mx-5 py-5">
        <div className="team-content my-5 p-4">
          <div className="top-nav d-flex align-items-center justify-content-between">
            <p>Team Members: <span style={{ color: "#333333", fontWeight: "600" }}>4</span></p>
  
            <div className="filter-box">
              <FilterListRounded />
              {/* <FontAwesomeIcon icon={faFilter} className='search-icon' /> */}
              <form action="">
                <select name="" id="">
                  <option value="">Filter By</option>
                  <option value="dateadded">Date Added</option>
                  <option value="a-z">A - Z</option>
                  <option value="z-a">Z - A</option>
                </select>
              </form>
            </div>
  
          </div>
          <hr />
          <div className="d-flex flex-row">
            <TeamList />
            <AddTeam />
  
          </div>
  
        </div>
      </div>
    )
}