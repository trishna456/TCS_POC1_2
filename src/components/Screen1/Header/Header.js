import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <h1>Data Maintenance Application (DMA V2)</h1>
      <p className='Version'>version 1.1</p>

      <nav className='Nav'>
        <p className='NavItem'>Home</p>
        <p className='NavItem'>Package Management</p>
        <p className='NavItem'>List Manager</p>
        <p className='NavItem'>Map Manager</p>
        <p className='NavItem'>Generic Resource</p>
        <p className='NavItem'>Reports</p>
        <p className='NavItem NavActive'>Rule set Authoring</p>
        <p className='NavItem'>Resource Management</p>
      </nav>
    </div>
  );
};

export default Header;
