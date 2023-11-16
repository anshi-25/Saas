import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';

const Header = () => {

    const [price,setPrice] = useState(0);
     console.log(price);

        const getdata = useSelector((state)=> state.cartreducer.carts);
         console.log(getdata);

        const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id)=>{
        dispatch(DLT(id))
    }

    const total = ()=>{
        let price = 0;
        getdata.forEach((ele)=>{
            price += parseInt(ele.price, 10) 
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        
                                        <th>Plan Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : {e.price}</p>
                                                            <p>About Plan : {e.somedata}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                            <NavLink to ={`/cart/${e.id}`}>
                                                            <button variant="primary">View Details</button>
                                                            </NavLink>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total :{price}</p>
                                </tbody>
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"17rem",padding:2,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your cart is empty</p>
                  
                   </div>
                    }

                </Menu>
            </Navbar>
        </>
    )
}

export default Header
