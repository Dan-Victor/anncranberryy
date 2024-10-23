import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu2 = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { id: 1, label: 'Home', link: '#' },
    { id: 2, label: 'About us', link: '#sec', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dropdown"><polyline points="6 9 12 15 18 9"></polyline></svg> },
    { id: 3, label: 'Bridal shop', link: '#cont', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dropdown"><polyline points="6 9 12 15 18 9"></polyline></svg> }
  ];

  return (
    <>
      <header className="for-header">
        <h1 className='an'>ANNCRANBERRY<br/><span className='couture'>COUTURE</span></h1>
        <nav className='for-nav'>
          <ul className={`for-ul ${isOpen ? 'active' : ''}`}>
            {menuItems.map(item => (
              <li key={item.id} className='for-li' onClick={toggleMenu2}>
                <a href={item.link} className='for-a'>
                  {item.label}
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <svg className='bag' width="38" height="45" viewBox="0 0 38 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.66667 42.3333H25.3333C26.0406 42.3333 26.7189 42.0524 27.219 41.5523C27.719 41.0522 28 40.3739 28 39.6667V25C28 24.6464 27.8595 24.3073 27.6095 24.0572C27.3594 23.8072 27.0203 23.6667 26.6667 23.6667H22.6667V22.6307C22.6667 19.152 20.1293 16.0373 16.6667 15.7C15.7398 15.6079 14.804 15.7108 13.9193 16.0021C13.0346 16.2935 12.2208 16.7668 11.53 17.3916C10.8393 18.0164 10.287 18.7789 9.90865 19.63C9.53033 20.4811 9.33435 21.4019 9.33333 22.3333V23.6667H5.33333C4.97971 23.6667 4.64057 23.8072 4.39052 24.0572C4.14048 24.3073 4 24.6464 4 25V39.6667C4 40.3739 4.28095 41.0522 4.78105 41.5523C5.28115 42.0524 5.95942 42.3333 6.66667 42.3333ZM22.6667 26.3333V29H20V26.3333H22.6667ZM12 22.3333C12 20.128 13.7947 18.3333 16 18.3333C18.2053 18.3333 20 20.128 20 22.3333V23.6667H12V22.3333ZM9.33333 26.3333H12V29H9.33333V26.3333Z" fill="black"/>
          <circle cx="29.5" cy="10.5" r="8.5" fill="#DF8E94"/>
          <path d="M27.842 10.1C27.842 9.64267 27.884 9.22733 27.968 8.854C28.052 8.47133 28.1733 8.14933 28.332 7.888C28.4907 7.61733 28.6773 7.412 28.892 7.272C29.116 7.12267 29.3633 7.048 29.634 7.048C29.9047 7.048 30.1473 7.12267 30.362 7.272C30.586 7.412 30.7773 7.61733 30.936 7.888C31.0947 8.14933 31.216 8.47133 31.3 8.854C31.384 9.22733 31.426 9.64267 31.426 10.1C31.426 10.5573 31.384 10.9773 31.3 11.36C31.216 11.7333 31.0947 12.0553 30.936 12.326C30.7773 12.5873 30.586 12.7927 30.362 12.942C30.1473 13.082 29.9047 13.152 29.634 13.152C29.3633 13.152 29.116 13.082 28.892 12.942C28.6773 12.7927 28.4907 12.5873 28.332 12.326C28.1733 12.0553 28.052 11.7333 27.968 11.36C27.884 10.9773 27.842 10.5573 27.842 10.1ZM25.56 10.1C25.56 11.164 25.728 12.074 26.064 12.83C26.4093 13.586 26.89 14.1693 27.506 14.58C28.122 14.9813 28.8313 15.182 29.634 15.182C30.474 15.182 31.1973 14.9813 31.804 14.58C32.4107 14.1693 32.8773 13.586 33.204 12.83C33.54 12.074 33.708 11.164 33.708 10.1C33.708 9.036 33.54 8.126 33.204 7.37C32.8773 6.614 32.4107 6.03533 31.804 5.634C31.1973 5.22333 30.474 5.018 29.634 5.018C28.8313 5.018 28.122 5.22333 27.506 5.634C26.89 6.03533 26.4093 6.614 26.064 7.37C25.728 8.126 25.56 9.036 25.56 10.1Z" fill="white"/>
        </svg>
        <div className='hamburger' onClick={toggleMenu}>
          <div className='hamburger-menu'></div>
          <div className='hamburger-menu'></div>
          <div className='hamburger-menu'></div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
