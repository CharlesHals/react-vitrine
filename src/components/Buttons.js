import React from 'react';
import { NavLink } from 'react-router-dom';

const Buttons = (props) => {
    return (
        <div className='scroll-bottom'>
            {props.left &&
                <NavLink to={props.left} className="left hover">
                    <div><span>&#10092;</span></div>
                </NavLink>
            }
            {props.right &&
                <NavLink to={props.right} className="right hover">
                    <div>
                        <span>&#10093;</span>
                    </div>
                </NavLink>}
        </div>
    );
};

export default Buttons;