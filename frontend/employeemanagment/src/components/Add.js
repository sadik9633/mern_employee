import {React,useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Add.css'


function Add() {

const [id,setId]=useState('')
const [userName,setUserName]=useState('')
const [age,setAge]=useState('')
const [desig,setDesig]=useState('')
const [salary,setSalary]=useState('')

const addEmployee=(e)=>{
  console.log(age);
}

  return (
    <div>
   <h1 className='mt-5'><i class="text-white fa-solid  fa-house-user"> </i> Employee Management App</h1>
        
        <p>You are one of the people who makes this business great!” “This company's future is sure to be bright with team members like you! Your hard work and creativity is an inspiration to all of your colleagues!. If you don’t understand, ask questions. If you’re uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It’s easy to tell when a question is coming from a good place. Then listen some more</p>

       <div> <h3 className=' mt-3 text-center'><i class="fa-solid fa-shake fa-user-plus"></i> Add New Employee</h3></div>

        <Form className='container pt-0 mt-3 p-5 w-50'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Name</Form.Label>
            <Form.Control onChange={(e)=>setUserName(e.target.value)} type="text" placeholder=""></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Age</Form.Label>
            <Form.Control  onChange={(e)=>setAge(e.target.value)} type="text" placeholder=""></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Designation</Form.Label>
            <Form.Control  onChange={(e)=>setDesig(e.target.value)} type="text" placeholder=""></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Salary</Form.Label>
            <Form.Control  onChange={(e)=>setSalary(e.target.value)} type="text" placeholder=""></Form.Control>
          </Form.Group>

          <Button onClick={(e)=>addEmployee(e)} className='' variant='success'>Add</Button>
          <Button className='ms-3' variant='warning'>cancel</Button>
        </Form>

    </div>
  )
}

export default Add