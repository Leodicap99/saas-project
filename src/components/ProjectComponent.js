import { useEffect, useState } from "react";

function ProjectComponent(){
    const [projects,setProjects] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>{
        async function fetchData(){
            let response = await fetch(
              "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
            );
            let data = await response.json();
            setProjects(data);
            console.log(data);
        }
        fetchData();
    },[]);
     const currentProjects = projects.slice(
       (page - 1) * 5,
       page * 5
     );
    const handlePagination = (pageNo) => {
        if(pageNo>=1){
            setPage(pageNo);
        }
    }
    return (
      <>
        <table>
          <tr>
            <th>S.No.</th>
            <th>Percentage funded</th>
            <th>Amount pledged</th>
          </tr>
          {currentProjects.map((project) => (
            <tr>
              <td>{project["s.no"]}</td>
              <td>{project["percentage.funded"]}</td>
              <td>{project["amt.pledged"]}</td>
            </tr>
          ))}
        </table>

        <div className="pagination">
          <button onClick={() => handlePagination(page - 1)}>Prev</button>
          <div className="page">{page}</div>
          <button onClick={() => handlePagination(page + 1)}>Next</button>
        </div>
      </>
    );
}
export default ProjectComponent;