import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        
        alert("Thanks for contacting us");
        setphone('')
        setname('')
        setdesc('')
        setemail('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
  }
  return (
    <div className={styles.container}>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
          <input className={styles.input} type="text" value={name} onChange={handleChange}  id="name" aria-describedby="emailHelp" name='name' required/>
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input className={styles.input} type="email" value={email} onChange={handleChange} id="email" aria-describedby="emailHelp" name='email' required/>
          <div id="emailHelp" className={styles.formtext}>We will never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Enter your phone</label>
          <input className={styles.input} type="phone" value={phone} onChange={handleChange} id="phone" aria-describedby="emailHelp" name='phone' required/>
        </div>
        <div className={styles.mb3}>
          <label className={styles.formlabel} htmlFor="desc">Concern</label>
          <textarea className={styles.input} value={desc} htmlFor="desc" onChange={handleChange} placeholder="Write your concern here" id="desc" name='desc' required/> 
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact