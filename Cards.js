import React  from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const data = Cardsdata;
  // console.log(data);


  const dispatch = useDispatch();


  const send = (e)=>{
    console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
      <h2 className='text-center  mb-4'> View Plans</h2>

      <div className="row d-flex justify-content-center align-items-center ">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:'1px solid black' }} className="mx-2 mt-4 card_style">

                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    <b> Price :</b>  {element.price}
                    <br/>
                    <b> About Plan :</b>{element.somedata}
                  
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards