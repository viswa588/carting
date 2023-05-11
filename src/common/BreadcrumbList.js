import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
export const Loader = () => <div className="flone-preloader-wrapper"><div className="lds-ripple"><div></div><div></div></div></div>
export const BreadcrumbList = (props) => {
  const pathnames = props.url.pathname.split("/").filter(x => x);
  console.log(pathnames, 'props1111111112')
    return (
        <>{pathnames.length >= 1 ? <div className='bg-light'>
        <Breadcrumb className='container breadcrumb-custom py-3 mb-4'>
        <li className='breadcrumb-item'><Link to="/">Home</Link></li>
          {pathnames.map((data, index) => {
            console.log(index, 'index')
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            // const filteredURL = data.split('-').join(' ');
            const filteredURL = data.replaceAll('%20', ' ');
            const isLast = index === pathnames.length - 1;
            console.log(routeTo.replaceAll('%20',  '-'), 'routeTo')
            return isLast ? (<li key={data} className='breadcrumb-item'><span>{filteredURL}</span></li>)
              : 
              <li key={data} className='breadcrumb-item'><Link to={routeTo}>{filteredURL}</Link></li>
              }
            )}
        </Breadcrumb>
      </div> :  ''}</>
    );
  }
  export default BreadcrumbList