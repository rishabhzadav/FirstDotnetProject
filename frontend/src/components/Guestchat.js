import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Linking } from './chatshow/Linking'
const config ={
    width: "350px",
    height: "600px",
    floating: true,
    headerTitle: 'ChatBot'
  };
class Guestchat extends Component 
{

  render() {
    return (
      <div>
           <ChatBot 
        steps={[
            {
                id: 'begin',
               message : ' Hey there! what is your name',
               trigger : 'input'
            },
            {
                id : 'input',
                user : true,
                trigger : 'talk'
            },
          {
            id: 'talk',
            message : 'Hey!!   {previousValue}  you need to login to use the awesome feature\'s',
            trigger : 'response'
          },
          {
              id : 'response',
              options: [
                {value: 'login' , label: 'login', trigger: 'login'},
                {value: 'goback' , label: 'goback' , trigger: 'begin'},
                {value:'stop' , label: 'stop' , trigger: 'deny'}
              ]
          },
          {
              id : 'deny',
              message : 'OK Thank You for giving your precious time!!!',
              end : true
          },
        //   {
        //     id:'user', 
        //     message:'here is some stuff you can do as a Guest', 
        //     trigger:'intro-user',
        //   },
          {
            id:'login',
            component : <Linking/>,
            asmessage:true, 
            end:true,
          },
        //   {
        //     id:'AdminUserList', 
        //     component : <AdminUserList/> ,
        //     asmessage:true, 
            
        //   },
        //   {
        //     id: 'cart-show',
        //     component : <Cartshow/>,
        //     asmessage: true,
        //   },
        //   {
        //     id: 'see-profile',
        //     component : <ProfileShow/>,
        //     asmessage: true,
        //   }
        //   {
        //     id : 'productlist',
        //     component : <ProductListShow/>,
        //     asmessage:true
        //   }
        ]}
        {...config}
      />
      </div>
    )
  }
}

export default 
Guestchat