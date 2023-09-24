import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const CustomForm = ({ onValidated }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf('@') > -1) {
      onValidated({ EMAIL: email });
    }
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title" style={{ fontSize: 40 }}>
        Join our email list for future updates.
      </h3>
      <Box x={{ display: 'flex' }}> 
        
      <div className="mc__field-container" >
        
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="your@email.com"
            required
            sx = {{width: 400}}
          />
     
        <TextField label="" type="submit" value="Submit" />
        </div>
        </Box>
    
    </form>
  );
};

const MailchimpForm = (props) => {
  const url = `https://gmail.us13.list-manage.com/subscribe/post?u=cad956b516420b2618586c34b&id=532aea6cb8`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe url={url} render={({ subscribe }) => <CustomForm onValidated={(formData) => subscribe(formData)} />} />
    </div>
  );
};

export default MailchimpForm;
