import React from 'react';

const Title = ({title,paragrap}) => {
     return (
          <div className=' mt-3 mx-auto text-center'>
                <h1 className=' text-center text-4xl  font-semibold my-2'> {title} </h1>
                <p className=' text-center  my-3 font-medium'> {paragrap} </p>
               
          </div>
     );
};

export default Title;
