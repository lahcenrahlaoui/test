import arg from '../img/arg.jpg';

const Teacher = ({teacher}) =>{
    return(
        <div className="teacher-parent">
            <div className="teacher">
                <div className='imgclass'>
                    <div>
                        {/* <img className="teacher-img" src={arg}/> */}
                        <img className="teacher-img"  src={teacher.img} />
                        <div className='teacher-price'> {teacher.price} DA/HOUR</div>
                    </div>
                </div>
                <div className='data-class'>
                    <div>
                        <div className="teacher-name">{teacher.fname} {teacher.lname}</div>
                        <div className="teacher-email">{teacher.email}</div>
                        <div className="teacher-description">{teacher.description}</div>
                        <div className="teacher-language">{teacher.language}</div>
                    </div>
                </div>
                <div className='data-class'>
                    <div>
                        <div className="teacher-rating">{teacher.rating}</div>
                        <button className="teacher-book">click</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher