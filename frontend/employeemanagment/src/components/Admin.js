import {React,useEffect,useState} from 'react'
import './Admin.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';





function Admin() {
    const [allEmployees,setAllEmployees]=useState([])

    const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/allEmployees')
        setAllEmployees(result.data.employees);
      }
console.log(allEmployees);
useEffect(()=>{
  fetchData()
},[])
    

  return (
    
        <div>

            <div className='text-end mt-2 me-4'>
           <Link to={'/add'}> <Button variant="success"><i class="fa-solid fa-shake fa-user-plus"></i> Add Employee</Button> </Link>   
         </div>
        
                <h1 className='mt-5'><i class="text-white fa-solid  fa-house-user"> </i> Employee Management App</h1>
        
                <p>You are one of the people who makes this business great!” “This company's future is sure to be bright with team members like you! Your hard work and creativity is an inspiration to all of your colleagues!. If you don’t understand, ask questions. If you’re uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It’s easy to tell when a question is coming from a good place. Then listen some more</p>
        
                <Table className='w-75 container text-center' striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Designation</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>

{
  allEmployees?.map((item,index)=>(
<tr>
                  <td>{index+1}</td>
                  <td>{item.username}</td>
                  <td>{item.age}</td>
                  <td>{item.designation}</td>
                  <td>{item.salary}</td>
                  <td>
                  <Button variant="light" className='me-3 p-2'> <i class="fa-solid fa-shake fa-user-pen"></i> Edit</Button>
                  <Button variant="info" className='p-2 me-3'> <i class="fa-solid fa-shake fa-book-open-reader"></i> View</Button>
        
                  <Button variant="danger" className='p-2'> <i class="fa-solid fa-shake fa-user-xmark"></i> Delete</Button>
                  </td>
                </tr>
  ))
}

                
              </tbody>
            </Table>

        
</div>
      
   


  )
  }

export default Admin