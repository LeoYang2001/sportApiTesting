import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import { formatString, nbaTeamsDict } from './teamNames'

const imgStyle = {
  width: '34px',
  height: '34px',
};

const TeamCell = ({teamInfo,scores, ifWin,gameStatus}) => {
    

    useEffect(() => {
     console.log(gameStatus)
     
    }, [teamInfo])

  return (
    <div className=' flex flex-1 justify-start items-center text-white'>
            <img style={imgStyle} className="  rounded-full object-cover" src={teamInfo.logo} alt="" />
            {
              gameStatus === "Not Started" ? (
                <div className={` ml-6 flex flex-col justify-center mr-auto items-start ${'text-white'}`}>
                <span>{nbaTeamsDict[teamInfo.name]}</span>
                {/* <span className={`text-xs`}>{"teamStanding"}</span> */}
            </div>
              ):(
                <div className={` ml-6 flex flex-col justify-center mr-auto items-start ${ifWin ? 'text-white':'text-gray-500'}`}>
                <span>{nbaTeamsDict[teamInfo.name]}</span>
                {/* <span className={`text-xs`}>{"teamStanding"}</span> */}
            </div>
              )
            }
            <div className=' font-bold text-2xl'>
              <span className={`${ifWin ? 'text-white':'text-gray-500'}`}>{scores}</span>
            </div>
        </div>
  )
}

export default TeamCell