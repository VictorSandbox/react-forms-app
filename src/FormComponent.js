import React, { Component } from 'react'

function FormComponent (props) {
  let isRoundTrip = props.data.isRoundTrip
    ? 'this is a Round Trip'
    : 'this is not a Round Trip'
  return (
    <div>
      <form>
        <input
          placeholder='First Name'
          name='firstName'
          type='text'
          value={props.data.firstName}
          onChange={props.onValueChange}
        />
        <br />
        <input
          placeholder='Last Name'
          name='lastName'
          type='text'
          value={props.data.lastName}
          onChange={props.onValueChange}
        />
        <br />
        <input
          placeholder='Age'
          name='age'
          type='text'
          value={props.data.age}
          onChange={props.onValueChange}
        />
        <br />
        <br />
        {/*Crete radio button for gender here */}
        <div>
          <label>
            <input
              name='gender'
              type='radio'
              value='male'
              checked={props.data.gender === 'male'}
              onChange={props.onValueChange}
            />
            Male
          </label>
        </div>
        <div>
          <label>
            <input
              name='gender'
              type='radio'
              value='female'
              checked={props.data.gender === 'female'}
              onChange={props.onValueChange}
            />
            Female
          </label>
        </div>
        <br />
        {/*Create checkbox for dietay restrictions   */}
        <br />
        <label>
          <input
            type='checkbox'
            name='isRoundTrip'
            checked={props.data.isRoundTrip}
            onChange={props.onValueChange}
          />
          RoundTrip ?
        </label>
        <br />
        {/*Create checkbox for dietay restrictions   */}
        <label>
          <input
            type='checkbox'
            name='isVegan'
            onChange={props.onValueChange}
            checked={props.data.isVegan}
          />
          IsVegan?
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            name='isKosher'
            onChange={props.onValueChange}
            checked={props.data.isKosher}
          />
          IsKosher?
        </label>
        <br />
        <label>
          <input
            type='checkbox'
            name='isLactoseFree'
            onChange={props.onValueChange}
            checked={props.data.isLactoseFree}
          />
          IsLactoseFree?
        </label>
        {/*Crete select box location here  */}
        <div>
          <select
            value={props.data.destination}
            name='destination'
            onChange={props.onValueChange}
          >
            <option value=''>---Please Choose Your Destination ---</option>
            <option value='Havana'>Havana</option>
            <option value='New York'>New York</option>
            <option value='Mexico City'>Mexico City</option>
          </select>
        </div>
        <br />
        {/*  submit code */}
        <input type='submit' value='Submit' />
        <hr />
        <h2>Your name: {props.data.firstName + ' ' + props.data.lastName} </h2>
        <h2>Your age : {props.data.age}</h2>
        <h2>Your gender : {props.data.gender} </h2>

        <h2>{isRoundTrip}</h2>
        <h2>Location : {props.data.destination}</h2>
        <p>Vegan {props.data.isVegan ? 'Yes' : 'No'}</p>
        <p>Kosher {props.data.isKosher ? 'Yes' : 'No'}</p>
        <p>Lactose {props.data.isLactoseFree ? 'Yes' : 'No'}</p>
      </form>
    </div>
  )
}

export default FormComponent
