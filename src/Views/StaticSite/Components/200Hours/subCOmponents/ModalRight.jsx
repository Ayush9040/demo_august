import React from 'react'

const ModalRight = ({ joinedCount }) => {

    const navigateRegister = () => {
        const section = document.getElementById('registerLink');
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="modal-sticky">
            <img src="/images/200-hours/modalRightImg.png" />

            <div className="title-wrap">
                <div className="Certified-header">Certified Yoga Teacher</div>
                {/* <div className="course-price text-gradient">₹{courseFee}</div> */}
            </div>

            <div className="benefit-points">

                <div className="bp-bar">
                    <div className="point-ico">
                        <img className='ben-icon' src="/icons/200-hours/Group.svg" alt="" />
                    </div>
                    <div className="point-content">English and Hindi</div>
                </div>

                <div className="bp-bar">
                    <div className="point-ico">
                        <img className='ben-icon' src="/icons/200-hours/sessions 1.svg" alt="" />
                    </div>
                    <div className="point-content">Various yoga sessions</div>
                </div>

                <div className="bp-bar">
                    <div className="point-ico">
                        <img className='ben-icon' src="/icons/200-hours/community 1.svg" alt="" />
                    </div>
                    <div className="point-content">Supportive community</div>
                </div>

                <div className="bp-bar">
                    <div className="point-ico">
                        <img className='ben-icon' src="/icons/200-hours/Group (1).svg" alt="" />
                    </div>
                    <div className="point-content">Suitable for all levels.</div>
                </div>

                <div className="bp-bar">
                    <div className="point-ico">
                        <img className='ben-icon' src="/icons/200-hours/trackingg 1.svg" alt="" />
                    </div>
                    <div className="point-content">Progress Checking tracking tools</div>
                </div>
            </div>

            <div className="sticky-btn-container">

                <div className="joined-peoples">🎉<span className='joined-peoples-span'>{joinedCount} Peoples</span> have joined in last 1 hour</div>
                {/* <div className="sticky-base-btn" onClick={navigateRegister}>Register Now</div> */}
            </div>

        </div>
    )
}

export default ModalRight
