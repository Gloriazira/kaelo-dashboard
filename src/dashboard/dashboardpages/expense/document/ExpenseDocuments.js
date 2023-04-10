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
                <div className='upload-btn  d-flex align-items-center my-5'>
                    <input
                        type="file"
                        // accept="image/*"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                    />
                    <label htmlFor="contained-button-file" className='d-flex align-items-center'>
                        {/* <button '> */}
                            <Icon icon="material-symbols:upload-rounded" className='upload-icon' />
                            <p>Upload Receipt</p>
                        {/* </button> */}
                    </label>

                </div>

            </div>
        </div>
    )
}