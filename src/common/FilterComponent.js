import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router';
import {Accordion} from 'react-bootstrap';
import { createSearchParams, useSearchParams} from "react-router-dom";
import { FilterAction } from '../action/Action';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../services/Auth';


const FilterComponent = ({applyFilter, category, searchParams}) => {
    // const getFilter = useSelector((state) => state.filterParams)
    const dispatch = useDispatch()
    // const filterAction = (data) => dispatch(FilterAction(data))
    return(
        <div className='product-filter'>
                {category?.map((data, index) => {
                    return(
                        <Accordion key={`${index}_${data.heading}`} defaultActiveKey={index}>
                            {/* {test} */}
                            <Accordion.Item eventKey={index} className="mb-3">
                                <Accordion.Header>{data.heading}</Accordion.Header>
                                <Accordion.Body className="accordion-body pt-0 pb-2 px-2">
                                    <ul className='list-unstyled'>
                                        {data.data.map((val, index) => {
                                            return(
                                                <li key={`${index}_${val}`} className="mb-1">
                                                <label className='cursor-pointer'>
                                                    <input value={val} type="checkbox" onChange={
                                                        (e) => applyFilter(
                                                            e.target.value === 'Men' || e.target.value === 'Women' || e.target.value === 'men' || e.target.value === 'women' ? e.target.value.toUpperCase() : e.target.value,
                                                         data, 
                                                         searchParams)} />
                                                    <span>{val}</span> 
                                                    {/* checked={message === val} */}
                                                </label>
                                            </li>
                                            )
                                        })}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })}
        </div>
    )
}

export default FilterComponent