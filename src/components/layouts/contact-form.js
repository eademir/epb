import React from 'react';


const Form = () => {
  return (
      <div class='col-md-6'>
        <div class='in'>
          <form method='post' action='/contact'>
              <div class='form-group'>
                  <label for='inputEmail'>E-mail Adress</label>
                  <input type='email' class='form-control' name='email' id='email' aria-describedby='email' placeholder='e-mail adress'/>
                  <small id='emailHelp' class='form-text text-muted'>We don't share your e-mail adress with third one</small>
              </div>
              <div class='form-group'>
                  <label for='inputName'>Full Name</label>
                  <input type='text' class='form-control' name='name' id='name' placeholder='full name'/>
              </div>
              <div class='form-group'>
                  <label for='inputTextarea'>Your Mesaage</label>
                  <textarea class='form-control' name='message' id='text' rows='3'></textarea>
              </div>
              <button type='submit' class='btn btn-success' value='submit'>Submit</button>
          </form>
        </div>
      </div>
  )
}

export default Form
