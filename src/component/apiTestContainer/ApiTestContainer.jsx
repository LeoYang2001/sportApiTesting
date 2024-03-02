import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import FilterBox from '../filterBox/FilterBox'
import GameCard from '../games/GameCard'



const ApiTestContainer = () => {

    const [gameId, setGameId] = useState('')
    const [leagueId, setLeagueId] = useState('')
    const [teamId, setTeamId] = useState('')
    const [season, setSeason] = useState('')
    const [date, setDate] = useState('')
    const [selectedOption, setSelectedOption] = useState('');
    const [filterList, setFilterList] = useState([
        {
            label:"Game ID",
            tag:"gameId",
            filterId:gameId,
            setFilterId:setGameId,
            isDisabled:false
        },
        {
            label:"League ID",
            tag:'leagueId',
            filterId:leagueId,
            setFilterId:setLeagueId,
            isDisabled:false
    
        },
        {
            label:"Team ID",
            tag:'teamId',
            filterId:teamId,
            setFilterId:setTeamId,
            isDisabled:false
    
        },
        {
            label:"Season",
            tag:'season',
            filterId:season,
            setFilterId:setSeason,
            isDisabled:false
    
        },
        {
            label:"Date",
            tag:'date',
            filterId:date,
            setFilterId:setDate,
            isDisabled:false
    
        }
    ])
    const [ApiUrl, setApiUrl] = useState('')
    const [response, setResponse] = useState('')
    const [gameList, setGameList] = useState([])

    useEffect(() => {
          // Reset all ids when selectedOption changes
          reset()
      
        const newFilterList= filterList.map((filter) => {

            const option = selectedOption
            const ifDisabled = !option.includes(filter.tag)

            return ({
                ...filter,
                isDisabled:ifDisabled
              })
        })
        setFilterList(newFilterList)
        
    }, [selectedOption])



    useEffect(() => {
        setApiUrl(switchApiUrl(selectedOption))
    }, [gameId, teamId, leagueId, season, date,selectedOption])


    const fetchGameFromAPISPORTS = async () => {
        var myHeaders = new Headers();
          myHeaders.append("x-rapidapi-key",process.env.REACT_APP_API_KEY);
          myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");
    
          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
    
          fetch(ApiUrl, requestOptions)
            .then(response => response.text())
            .then(result => {
                setResponse(result)
                console.log(JSON.parse(result).response)
                //set games
                setGameList(JSON.parse(result).response)
            })
            .catch(error => console.log('error', error));
      }
    
      const reset = ()=>{
        setGameId('');
        setLeagueId('');
        setTeamId('');
        setSeason('');
        setDate('');
        setResponse("")
      }
    
    const switchApiUrl = (selectedOption)=>{
        switch(selectedOption){
            case "gameId": return `https://v1.basketball.api-sports.io/games?id=${gameId}` 
            case "seasonId&leagueId":  return `https://v1.basketball.api-sports.io/games?league=${leagueId}&season=${season}` 
            case "teamId&season": return `https://v1.basketball.api-sports.io/games?team=${teamId}&season=${season}`
            case "leagueId&season&date": return `https://v1.basketball.api-sports.io/games?date=${date}&league=${leagueId}&season=${season}&timezone=America/Kentucky/Louisville`
        }
    }


    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };


  

    
  return (
    <>
    <div>
            <select className=' border rounded-md p-2' value={selectedOption} onChange={handleSelectChange}>
                <option value="">select api use cases</option>
                <option value="gameId">fetch game</option>
                <option value="seasonId&leagueId">fetch season games</option>
                <option value="teamId&season">fetch a team from certain season</option>
                <option value="leagueId&season&date">fetch games from certain date</option>
            </select>
        </div>
    <div className=' w-full gap-4 px-20 py-4 flex flex-wrap justify-between m-2'>
            <FilterBox ifDisable={filterList[0].isDisabled} key={filterList[0].label} label={filterList[0].label} filterId={gameId} setFilterId={setGameId} />
            <FilterBox ifDisable={filterList[1].isDisabled} key={filterList[1].label} label={filterList[1].label} filterId={leagueId} setFilterId={setLeagueId} />
            <FilterBox ifDisable={filterList[2].isDisabled} key={filterList[2].label} label={filterList[2].label} filterId={teamId} setFilterId={setTeamId} />
            <FilterBox ifDisable={filterList[3].isDisabled} key={filterList[3].label} label={filterList[3].label} filterId={season} setFilterId={setSeason} />
            <FilterBox ifDisable={filterList[4].isDisabled} key={filterList[4].label} label={filterList[4].label} filterId={date} setFilterId={setDate} />
    </div>
    <div className=' w-full px-20 flex justify-end m-2'>
        <button onClick={fetchGameFromAPISPORTS} className=' border px-3 py-2 rounded-md btn'>apply</button>
    </div>
    <div className=' w-full gap-4 px-20 py-4 flex flex-wrap justify-start m-2'>
    {
        gameList.map(game => (
            <GameCard key={game.id} gameInfo={game}/>
        ))
    }

    </div>

    {/* {
        response && (
            <div>
                {response}
            </div>
        )
    } */}
    </>
  )
}

export default ApiTestContainer