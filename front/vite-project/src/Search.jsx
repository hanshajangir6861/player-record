import React, { useState } from 'react'
import axios from 'axios'
import './Search.css'




function Search() {
  const [serial, setSerial] = useState("")
  const [aadharno, setAadharNo] = useState("")
  const [playername, setPlayerName] = useState("")
  const [game, setGame] = useState("")
  const [agegroup, setAgeGroup] = useState("")
  const [position, setPosition] = useState("")
  const [state, setState] = useState("")
  const [tournamentname, setTournamentName] = useState("")
  const [organisedat, setOrganisedAt] = useState("")
  const [venue, setVenue] = useState("")
  const [action, setAction] = useState("")



  const [search, setSearch] = useState("")
  const [showData, setshowData] = useState(false)
  const [noData, setnoData] = useState(false)




  const searchItem = async () => {
    let result = await axios.get(`http://localhost:8080/form/search/${search}`)
    const response = result.data
    if (response) {
      setSerial(response.serial)
      setPlayerName(response.playername)
      setAadharNo(response.aadharno)
      setGame(response.game)
      setAgeGroup(response.agegroup)
      setPosition(response.position)
      setState(response.state)
      setTournamentName(response.tournamentname)
      setOrganisedAt(response.organisedat)
      setVenue(response.venue)
      setAction(response.action)


      setshowData(true)
      setnoData(false)

    } else {
      setshowData(false)
      setnoData(true)
    }
  }



  return (
    <div className='head'>
      <div className='Search'>
        <input type="number" placeholder='Enter AadharNo' value={search} onChange={(e) => { setSearch(e.target.value) }} />
        <button id='searchbtn' onClick={(e) => {
          e.preventDefault();
          searchItem()
        }}>Search</button>


      </div>

      {
        showData && (
          <div className="form">
            <div className="table">
              <label htmlFor="serialno">Serial No</label>
              <input type="text" value={serial} />
            </div>
            <div className="table">
              <label htmlFor="Player">Player Name</label>
              <input type="text" value={playername} />
            </div>
            <div className="table">
              <label htmlFor="Aadhar">Aadhar No.</label>
              <input type="text" value={aadharno} />
            </div>
            <div className="table">
              <label htmlFor="Game">Game</label>
              <input type="text" value={game} />
            </div>
            <div className="table">
              <label htmlFor="dropdown">Select</label>
              <input type="text" value={agegroup} />
            </div>
            <div className="table">
              <label htmlFor="Position">Position</label>
              <input type="text" value={position} />
            </div>
            <div className="table">
              <label htmlFor="state">State</label>
              <input type="text" name="state" id="state" value={state} />
            </div>
            <div className="table">
              <label htmlFor="tournament">Tournament Name</label>
              <input type="text" id='tournamment' value={tournamentname} />
            </div>
            <div className="table">
              <label htmlFor="organised">Organised At</label>
              <input type="text" name="organises" id="organised" value={organisedat} />
            </div>
            <div className="table">
              <label htmlFor="venue">Venue</label>
              <input type="text" id='venue' value={venue} />
            </div>

            <div className="table">
              <label htmlFor="action">Action</label>
              <input type="text" id='action' value={action} />
            </div>

          </div>
        )
      }
      {
        noData && (
          <h3>No Information Yet........</h3>
        )
      }



    </div>
  )
}

export default Search
