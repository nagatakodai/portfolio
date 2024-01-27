// ts/components/Header.tsx

import React from 'react';

const Header = () => {
    return (
        <div>
            nagata-kodai 's portfolio<br/>
            <a href={'/'}>Top</a><br/>
            <a href={'/home'}>ひとこと</a><br/>
            <a href={'/index'}>なにで出来てるのか</a><br/>
            <a href={'/about'}>職務経歴</a><br/>
        </div>
    );
};

export default Header;
