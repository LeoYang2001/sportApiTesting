import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import TeamCell from './TeamCell'
import { formatDateString } from './teamNames'


const GameCard = ({gameInfo}) => {
  const [dateTime, setDateTime] = useState([])
  const [teamInfo, setTeamInfo] = useState(null)
  const [scores, setScores] = useState(null)
  const [gameStatus, setGameStatus] = useState(null)

  useEffect(() => {
    const date = gameInfo.date
    if(date)
    {
     setDateTime(formatDateString(date))
     setGameStatus(gameInfo.status.long)
     setTeamInfo(gameInfo.teams)
     setScores(gameInfo.scores)


    }
  }, [gameInfo])
  

  return (
    <div style={{width:300, height:180}} className=" bg-gray-700  rounded-2xl  flex flex-col py-3 px-4">
        <div className=' flex justify-between text-gray-100 items-center'>
            <span className=' font-semibold text-md'>{dateTime[0]} </span>
            <span className=' text-sm'>{dateTime[1]}</span>
        </div>
       {
        (teamInfo&&scores)&&
        (
          <>
            <TeamCell teamInfo={teamInfo.away} gameStatus={gameStatus} scores={scores.away.total} ifWin={scores.away.total > scores.home.total}/>
            <TeamCell teamInfo={teamInfo.home} gameStatus={gameStatus}   scores={scores.home.total} ifWin={scores.away.total < scores.home.total} />
          </>
        )
       }
        
        
    </div>
  )
}

export default GameCard