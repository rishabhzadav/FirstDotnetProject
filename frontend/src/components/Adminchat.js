import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Linking } from './chatshow/Linking'
import {ProfileShow} from './chatshow/ProfileShow';
import { AdminUserList } from './chatshow/AdminUserList';
import { ProductListShow } from './chatshow/ProductListShow';
const config ={
    width: "350px",
    height: "400px",
    floating: true,
    headerTitle: 'ChatBot'
  };
class Adminchat extends Component 
{

  render() {
    return (
      <div>
           <ChatBot 
        steps={[
            {
                id: 'begin',
               message : 'hello  Admin Do you need some help',
               trigger : 'yes-no'
            },
            {
              id : 'yes-no',
              options : [
                 {value : 'yes' , label : 'yes' , trigger :'adminstuff'},
                 {value : 'no' , label : 'no' , trigger : 'stop'}
              ]
            },
            {
              id : 'adminstuff',
              message : 'Here is some stuff you can do a admin',
              trigger : 'response'
            },
            // {
            //     id : 'input',
            //     user : true,
            //     trigger : 'talk'
            // },
          // {
          //   id: 'talk',
          //   message : 'Hey!!   {previousValue}  you need to login to use the awesome feature\'s',
          //   trigger : 'response'
          // },
          {
              id : 'response',
              options: [
                {value: 'producttlist' , label: 'productlist', trigger: 'productlist'},
                {value : 'Adminuserlist' , label: 'Adminuserlist', trigger : 'Adminuserlist'},
                {value : 'see-profile' , label: 'see-profile', trigger : 'see-profile'},
                {value: 'goback' , label: 'goback' , trigger: 'begin'},
                {value:'stop' , label: 'stop' , trigger: 'stop'},
              ]
          },
          {
              id : 'stop',
              message : 'OK Thank You for giving your precious time!!!',
              end : true
          },
        //   {
        //     id:'user', 
        //     message:'here is some stuff you can do as a Guest', 
        //     trigger:'intro-user',
        //   },
          // {
          //   id:'login',
          //   component : <Linking/>,
          //   asmessage:true, 
          //   end:true,
          // },
          {
            id:'Adminuserlist', 
            component : <AdminUserList/> ,
            asmessage:true, 
            
          },
        //   {
        //     id: 'cart-show',
        //     component : <Cartshow/>,
        //     asmessage: true,
        //   },
          {
            id: 'see-profile',
            component : <ProfileShow/>,
            asmessage: true,
          },
        {
            id : 'productlist',
            component : <ProductListShow/>,
            asmessage:true
          }
        ]}
        {...config}
      />
      </div>
    )
  }
}

export default 
Adminchat