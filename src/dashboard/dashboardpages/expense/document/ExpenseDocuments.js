import { Icon } from '@iconify/react';
import pdf from './pdf-img.png'
import './expensedocument.css'

export default function ExpenseDocuments() {
    return (
        <div className="d-flex flex-column justify-content-between expense-document ">
            <div className="document-list ">
                <ul>
                    <li>
                        <p>Solar panel purchase</p>
                        <img src={pdf} alt="" />
                    </li>
                    <li>
                        <p>Battery purchase</p>
                        <img src={pdf} alt="" />
                    </li>
                    <li>
                        <p>Solar panel purchase</p>
                        <img src={pdf} alt="" />
                    </li>
                </ul>
            </div>
            <div className="d-flex flex-column align-items-center document-upload px-2 ">
                <hr />
                <p>Upload documents to support your expenses. </p>
                <button className='d-flex align-items-center btn my-5'><Icon icon="material-symbols:upload-rounded" className='upload-icon' /><p>Upload Receipt</p></button>
            </div>
        </div>
    )
}