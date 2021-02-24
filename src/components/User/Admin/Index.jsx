import React, { useContext, useState } from 'react';
import { UserContext } from "../../UserContext";

const Index = () => {
    const [users, setUsers] = useContext(UserContext);

    return (
        <div>
            {users.map(user => (
                //Can split this into a component once I see if this works
                <div key={user.id}>
                    <div>
                        {user.firstName}
                    </div>
                    <div>
                        {user.lastName}
                    </div>
                    <div>
                        {user.email}
                    </div>
                    <div>
                        {user.username}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Index;