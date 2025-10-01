import React from 'react'

const LeaderboardTable = ({ data, title }) => {
    return (
        <div className='w-100'>
            <div className='wpo-section-title'>
                <h2 className='w-100 text-center mb-5' style={{ fontSize: '38px', color: '#2D4277' }}>{title}</h2>
            </div>
            <div className='w-100 overflow-auto'>
                <table className='w-100 border tablee' border="1" cellPadding="10" cellSpacing="0" style={{ borderRadius: '50px' }}>
                    <thead className='table-headinggg'>
                        <tr className=''>
                            <th className='border text-nowrap text-center'>Rank</th>
                            <th className='border text-nowrap'>Name</th>
                            <th className='border text-nowrap'>Hours</th>
                            <th className='border text-nowrap'>Contributions</th>
                            <th className='border text-nowrap'>Last Contribution</th>
                            <th className='border text-nowrap text-center'>Badge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className='table-rowww'>
                                <td className='table-dataa text-center'>{row.rank}</td>
                                <td className='table-dataa'>{row.name}</td>
                                <td className='table-dataa'>{row.hours}</td>
                                <td className='table-dataa'>{row.contributions}</td>
                                <td className='table-dataa'>{row.lastContribution}</td>
                                <td className='table-dataa text-center'>
                                    <span
                                        style={{
                                            backgroundColor:
                                                row.badge === "Gold" ? "gold" :
                                                    row.badge === "Silver" ? "silver" : "#C77B30",
                                            color: "black",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        {row.badge}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LeaderboardTable