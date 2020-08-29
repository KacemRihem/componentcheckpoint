import React from 'react';
import ProfilePhoto from './profile/ProfilePhoto';
import FullName from './profile/FullName';
import Adress from './profile/Adress'

function App() {
    return (
    <div className="Main">
        <ProfilePhoto />;
        <FullName />;
        <Adress />;
    </div>
);
}

export default App;
