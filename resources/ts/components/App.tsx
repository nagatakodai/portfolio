// App.tsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../routes';

const App = () => {
    return (
        <Router>
            <div>
                <br></br>
                // ここからページごとにレンダリング
                <AppRoutes/>
                <br></br>
                // ここまでページごとにレンダリング
            </div>
        </Router>
    );
};

export default App;
