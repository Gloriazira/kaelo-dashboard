import { Icon } from '@iconify/react';
import team from './team.png';
import './addteam.css';



export default function AddTeam() {

    return (
        <div className="add-team px-2 py-2">
            <div className="d-flex flex-column align-items-center justify-content-center my-5 px-auto">
                <img src={team} alt="" />
                <p className="text-center my-5">Enter the email address of the team member you wish to add.</p>
                <form className="d-flex flex-column  align-items-center justify-content-around ">
                    <input type="email" name="emial" id="" placeholder='Email' />
                    <button className='d-flex justify-content-around  btn'>
                        <Icon icon="lucide:user-plus" />
                        Add Team Member
                    </button>
                </form>
                <hr />
            </div>
        </div>
    )

}