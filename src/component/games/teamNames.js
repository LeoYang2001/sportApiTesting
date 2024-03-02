export const nbaTeamsDict = {
  "Atlanta Hawks": "ATL Hawks",
  "Boston Celtics": "BOS Celtics",
  "Brooklyn Nets": "BKN Nets",
  "Charlotte Hornets": "CHA Hornets",
  "Chicago Bulls": "CHI Bulls",
  "Cleveland Cavaliers": "CLE Cavaliers",
  "Dallas Mavericks": "DAL Mavericks",
  "Denver Nuggets": "DEN Nuggets",
  "Detroit Pistons": "DET Pistons",
  "Golden State Warriors": "GSW Warriors",
  "Houston Rockets": "HOU Rockets",
  "Indiana Pacers": "IND Pacers",
  "LA Clippers": "LAC Clippers",
  "Los Angeles Lakers": "LAL Lakers",
  "Memphis Grizzlies": "MEM Grizzlies",
  "Miami Heat": "MIA Heat",
  "Milwaukee Bucks": "MIL Bucks",
  "Minnesota Timberwolves": "MIN Timberwolves",
  "New Orleans Pelicans": "NOP Pelicans",
  "New York Knicks": "NYK Knicks",
  "Oklahoma City Thunder": "OKC Thunder",
  "Orlando Magic": "ORL Magic",
  "Philadelphia 76ers": "PHI 76ers",
  "Phoenix Suns": "PHX Suns",
  "Portland Trail Blazers": "POR Trail Blazers",
  "Sacramento Kings": "SAC Kings",
  "San Antonio Spurs": "SAS Spurs",
  "Toronto Raptors": "TOR Raptors",
  "Utah Jazz": "UTA Jazz",
  "Washington Wizards": "WAS Wizards"
}


  export const  formatString = (number, conference)=> {
    let ordinalSuffix;
  
    // Determine the ordinal suffix based on the number
    if (number % 100 >= 11 && number % 100 <= 13) {
      ordinalSuffix = 'th';
    } else {
      switch (number % 10) {
        case 1:
          ordinalSuffix = 'st';
          break;
        case 2:
          ordinalSuffix = 'nd';
          break;
        case 3:
          ordinalSuffix = 'rd';
          break;
        default:
          ordinalSuffix = 'th';
      }
    }
  
    const conferenceWithoutSuffix = conference.replace(" Conference", "");

    // Format the string
    const formattedString = `${number}${ordinalSuffix} ${conferenceWithoutSuffix}`;
  
    return formattedString;
  }
  
  export function formatDateString(inputDate) {
    const dateObject = new Date(inputDate);
  
    // Format time string (e.g., "7:00PM")
    const timeString = dateObject.toLocaleTimeString('en-US', { timeStyle: 'short' });
  
    // Format date string (e.g., "2024 Feb 26th")
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = dateObject.toLocaleDateString('en-US', options).replace(/\d{1,2}$/, (day) => {
      const dayInt = parseInt(day);
      const suffix = dayInt >= 11 && dayInt <= 13 ? 'th' : ['st', 'nd', 'rd'][dayInt % 10 - 1] || 'th';
      return `${dayInt}${suffix}`;
    });
  
    return [timeString, dateString];
  }
  