import './reflist.css';

export default function ReferralList() {

    const data = [
        { title: "Piman Technology", date: "01-01-2023", reward: "$20" },
        { title: "Piman Technology", date: "01-01-2023", reward: "$20" },
        { title: "Piman Technology", date: "01-01-2023", reward: "$20" },
        { title: "Piman Technology", date: "01-01-2023", reward: "$20" },
        { title: "Piman Technology", date: "01-01-2023", reward: "$20" },
    ]


    return (


        <div className="ref-list">
            <div >
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Reward</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.title}</td>
                                <td>{val.date}</td>
                                <td>{val.reward}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>

        </div>
    )
}