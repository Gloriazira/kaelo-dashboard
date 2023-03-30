import './teamlist.css';

export default function TeamList() {

    const data = [
        { name: "John Deo" },
        { name: "Daniel Ezekiel" },
        { name: "Daniel Ezekiel" },
        { name: "Daniel Ezekiel" },
    ]


    return (


        <div className="team-list">
            <div >
                <table>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>

        </div>
    )
}