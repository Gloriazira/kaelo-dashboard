import "./assetsummary.css";

export default function AssetSummary() {
    return(
        <div className="asset-summary mx-2 my-4">
            <h3>Asset Summary</h3>
            <ul className="asset-summary-info my-4 ml-3">
                <li>Class:<span> Renewable Energy</span></li>                
                <li>Collected:<span>  01-01-2023</span></li>
                <li>Total Amount:<span> $250,000</span></li>
                <li>Tenor:  <span>7 Months</span></li>
                <li>Status:  <span style={{ color: "#17E383"}}>Ongoing</span></li>
                <li><button className="btn">view</button></li>
                <hr />
            </ul>
                
            <ul className="asset-summary-info my-4 ml-3">
                <li>Class: <span>SMB Financing</span></li>                
                <li>Collected:<span> 01-01-2023</span></li>
                <li>Total Amount: <span>$250,000</span></li>
                <li>Tenor:  <span>5 Months</span></li>
                <li>Status:  <span style={{ color: "#FF8A00"}}>Pending</span></li>
                <li><button className="btn">Edit</button></li>
                <hr />
            </ul>
        </div>
    )
}