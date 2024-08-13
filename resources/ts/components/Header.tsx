// ts/components/Header.tsx

import React from 'react';

const Header = () => {
    return (
        <div>
            <a href={'/'}>Top</a><br/>
            <a href={'/home'}>ホーム</a><br/>
            <a href={'/index'}>構成</a><br/>
            <a href={'/about'}>職務経歴</a><br/>
        </div>
    );
};

export default Header;
