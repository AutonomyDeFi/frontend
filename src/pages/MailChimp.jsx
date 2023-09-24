import React, {useState, useEffect} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import TextField from "@mui/material/TextField";

const CustomForm = ({  onValidated }) => {

    const [email, setEmail] = useState('');

  
    const handleSubmit = (e) => {
          e.preventDefault();
          email &&
          email.indexOf("@") > -1 &&
          onValidated({
              EMAIL: email,
          });
      }
  
      return (
        <form 
          className="mc__form"
          onSubmit={(e) => handleSubmit(e)}
        >
          
        <h3 className="mc__title">Join our email list for future updates.</h3>
        <div className="mc__field-container">
          

          <TextField
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />

        </div>

        <TextField
          label="subscribe"
          type="submit"
          formValues={[email]}
        />
      </form>
      );
  };
  
const MailchimpForm = props => {
    const postUrl = 'https://gmail.us13.list-manage.com/subscribe/post?u=${ad956b516420b2618586c34b}&id=${532aea6cb8}';

    return (

        <div className="mc__form-container">
            <MailchimpSubscribe
                url={url}
                render={({ subscribe }) => (
                    <CustomForm
                        
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>

    )
}

export default MailchimpForm;