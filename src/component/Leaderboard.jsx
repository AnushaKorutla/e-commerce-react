import React from "react";

export default function Leaderboard(){
    
    const data= JSON.parse(localStorage.getItem('scores')||"[]");
    const sorted = data.sort((a,b)=> b.score- a.score);

    console.log("Leaderboard data:", sorted)
    return(
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <table className="leaderboard-table">
            <thead>
                <tr>
                    <th>User</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody>
                {sorted.map((u,i)=>(
                    <tr>
                        <td>{u.email}</td>
                        <td>{u.score}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}