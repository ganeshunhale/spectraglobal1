import React, { useState } from 'react'
import { ImLocation } from 'react-icons/im'
import { MdCall, MdOutlineMail } from 'react-icons/md'
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import contactStyle from "./ContactUs.module.scss";

const ContactUs = () => {
  const [FormData, setFormData] = useState({
    "FullName": "",

    "Email": "",
    "Phone": "",
    "Comment": "",

  })

  // const handlesubmit= async (event)=>{
  //   event.preventDefault();
  //   console.log("FormData",FormData);
  //   try {
  //     const response = await axios.post('https://formsubmit.co/ajax/6ebe6ad1f56c79c1224504d4c7825cb8', {
  //       ...FormData
  //     });
  //     console.log(response.data); // Handle the response data
  //     alert("submited",response.data)
  //   } catch (error) {
  //     console.error(error); // Handle any errors
  //     alert("Failed To Submit",error)
  //   }
  // };
  const [status, setStatus] = useState("Send Message");
  const handlesubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message, number } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      number: number.value,

    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Send Message");
    let result = await response.json();
    alert(result.status);
  };

  return (


    <div className={contactStyle.contactMainSection}>
      <div className={`row ${contactStyle.ContentNImgWrapper}`}>
        <div className={` col-md-5 ${contactStyle.welcomeToSpectra}`}>
          <p
            className={contactStyle.Header}
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="500"
          >
            Connect with us
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="50"
          >
            <div className={contactStyle.iconAndHeader}>
              <ImLocation className={contactStyle.icon} />
              <div className={contactStyle.HeaderAndDescripton}>
                <p className={contactStyle.ContentText} >SpectraGlobal Ltd, Level 1, xyz Tower, wall Street, abc,  Republic of xyz</p>
              </div>
            </div>
            <div className={contactStyle.iconAndHeader}>
              <MdCall className={contactStyle.icon} />
              <div className={contactStyle.HeaderAndDescripton}>
                <p className={contactStyle.ContentText} >+1234455651</p>
              </div>
            </div>
            <div className={contactStyle.iconAndHeader}>
              <MdOutlineMail className={contactStyle.icon} />
              <div className={contactStyle.HeaderAndDescripton}>
                <p className={contactStyle.ContentText} >support@spectragloballtd.com</p>
              </div>
            </div>
          </div>

        </div>
        <div
          className={`col-md-6 ${contactStyle.FormMainSection}`}
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="50"
        >
          <div className={contactStyle.ShadowDiv}></div>

          <div
            className={` ${contactStyle.FormSection}`}

          >

            <form onSubmit={handlesubmit}>
              <Grid container spacing={2}>
                <TextField
                  placeholder="Enter Full name"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  id="name"
                  className={contactStyle.MuiTextField}
                  required
                  InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      width: '100%',
                      color: 'white',

                    }
                  }}
                  value={FormData.FullName}
                  onChange={(e) => { setFormData(prev => ({ ...prev, FullName: e.target.value })) }}

                />

                <TextField
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  id="email"
                  fullWidth
                  required
                  InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      width: '100%',
                      color: 'white'
                    }
                  }}
                  value={FormData.Email}
                  className={contactStyle.MuiTextField}
                  onChange={(e) => { setFormData(prev => ({ ...prev, Email: e.target.value })) }}
                />

                <TextField

                  type="number"
                  placeholder="Enter phone number"
                  label="Phone"
                  variant="outlined"
                  id="number"
                  fullWidth
                  required
                  InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      width: '100%',
                      color: 'white',
                    }
                  }}
                  value={FormData.Phone}
                  className={contactStyle.MuiTextField}
                  onChange={(e) => { setFormData(prev => ({ ...prev, Phone: e.target.value })) }}
                />
                <TextField
                  label="Your Message (optional)"
                  multiline
                  rows={4}
                  placeholder="Your Message (optional)"
                  variant="outlined"
                  id="message"
                  value={FormData.Comment}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      width: '100%',
                      color: 'white'
                    }
                  }}
                  className={contactStyle.MuiTextField}
                  onChange={(e) => { setFormData(prev => ({ ...prev, Comment: e.target.value })) }}

                />
                <div className={contactStyle.ButtonWrapper}>
                  <Button
                    size="large"
                    type="submit"
                    variant="outlined"

                    className={contactStyle.MuiButtonField}
                  >
                    {status}
                  </Button>
                </div>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};




export default ContactUs