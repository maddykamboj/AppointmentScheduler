import React from 'react';

export default ({history}) => (
    <div>
        <button onClick={() => { history.push('/search'); }}>Search</button>
        <button onClick={() => { history.push('/add'); }}>Add</button>
    </div>
);
