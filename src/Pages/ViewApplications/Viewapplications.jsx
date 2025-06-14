import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const Viewapplications = () => {
    const {job_id} = useParams();
    const applications = useLoaderData();

    const handleStatusChange  = (e, app_id) =>{
        console.log(e.target.value, app_id)

        axios.patch(`http://localhost:3000/applications/${app_id}`, {status: e.target.value})
        .then(res =>{
             console.log(res.data)
             if(res.data.modifiedCount){
                Swal.fire({
                                    position:"top-right",
                                    icon: "success",
                                    title: "Application status updated",
                                    showConfirmButton: false,
                                    timer:1500
                                });
             }
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <h2 className='text-4xl'>{applications.length} Applications for: {job_id}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        applications.map(application => <tr key={application._id}>
        <th>1</th>
        <td>{application.applicant}</td>
        <td>{}</td>
        <td>
            <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application.status} className="select">
                <option disabled={true}>Update Status</option>
                <option>Under Review</option>
                <option>Call for Interview</option>
                <option>Hired</option>
                <option>Rejected</option>
                <option>Pending</option>
</select>
        </td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Viewapplications;