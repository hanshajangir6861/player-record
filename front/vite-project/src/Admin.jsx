import React, { useState } from 'react'
import './Admin.css'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Admin() {
    const [serial, setSerial] =useState("")
    const [aadharno,setAadharNo] = useState("")
    const [playername, setPlayerName] =useState("")
    const [game, setGame] =useState("")
    const [agegroup, setAgeGroup] =useState("")
    const [position, setPosition] =useState("")
    const [state, setState] =useState("")
    const [tournamentname, setTournamentName] =useState("")
    const [organisedat, setOrganisedAt] =useState("")
    const [venue, setVenue] =useState("")
    


const Addproduct = async()=>{
    let result = await axios.post("http://localhost:8080/form/add" ,{
serial, playername, game,agegroup,position,state,tournamentname,organisedat,venue
    } )
    console.log(result)
    result = result.data
}
    
    return (

        <div className="main">

<Link to="/Admin">Admin</Link>
<Link to="/User">User</Link>

            <div className='form'>
                <div className='table'>
                    <label htmlFor="Serial No">Serial No</label>
                    <input type="text" placeholder='Enter Serial No.' value={serial} onChange={(e)=>{setSerial(e.target.value)}}/><br />
                </div>

                <div className='table'>
                    <label htmlFor="Player Name">Player Name</label>
                    <input type="text" placeholder='Enter Player Name'value={playername} onChange={(e)=>{setPlayerName(e.target.value)}}/><br />
                </div>

                <div className='table'>
                    <label htmlFor="Aadhar No">Aadhar No</label>
                    <input type="text" placeholder='Enter Aadhar No.'value={aadharno} onChange={(e)=>{setAadharNo(e.target.value)}}/><br />
                </div>

                <div className='table'>
                    <label htmlFor="Game">Game</label>
                    <input type="text" placeholder='Enter Game'value={game} onChange={(e)=>{setGame(e.target.value)}}/><br />
                </div>

                <div className='table'>
                    <label htmlFor="Age Group">Age Group</label>
                    <select name="" id="" value={agegroup} onChange={(e)=>{setAgeGroup(e.target.value)}}>
                    <option value="Select">Select</option>

                        <option value="Senior">Senior</option>

                        <option value="Junior">Junior</option>

                    </select>
                </div>


                <div className='table'>
                    <label htmlFor="Position">Position</label>
                    {/* <input type="text" placeholder='Enter Position'value={position} onChange={(e)=>{setPosition(e.target.value)}}/><br /> */}
                    <select name="" id="" value={position}  onChange={(e)=>{setPosition(e.target.value)}}>
                    <option value="Position">Not Selected</option>

                    <option value="First Position">First Position</option>
                    <option value="Second Position">Second Position</option>
                    <option value="Three Position">Three Position</option>
                    <option value="Qualifid">Qualifid</option>

                    </select>
                </div>

                <div className='table'>
                    <label htmlFor="State">State</label>
                    <input type="text" placeholder=' State'value={state} onChange={(e)=>{setState(e.target.value)}}/><br />
                </div>

                <div className='table'>
                    <label htmlFor="Tournament Name">Tournament Name</label>
                    <input type="text" placeholder='Tournament Name'value={tournamentname} onChange={(e)=>{setTournamentName(e.target.value)}}/><br />
                </div>

                <div className='table'>
                    <label htmlFor="Organised At">Organised At</label>
                    <input type="text" placeholder='Organised At'value={organisedat} onChange={(e)=>{setOrganisedAt(e.target.value)}}/><br />

                    
                </div>

                <div className='table'>
                    <label htmlFor="Venue">Venue</label>
                    <input type="text" placeholder=' Venue' value={venue} onChange={(e)=>{setVenue(e.target.value)}}/><br />
                </div>


                <button type='Submit' className='formbtn' onClick={(e)=>{
                    e.preventDefault();
                    Addproduct()
                }}> Submit</button>
            </div>
        </div>
    )
}

export default Admin