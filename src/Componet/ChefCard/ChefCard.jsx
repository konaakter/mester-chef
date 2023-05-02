import React from 'react';

const ChefCard = (props) => {
    const {bio, id} = props.loder;


    return (
        <div>
            <div>
                <div>
                    <p>{bio}</p>
                </div>
            </div>
            
        </div>
    );
};

export default ChefCard;