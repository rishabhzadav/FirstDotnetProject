import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Linking } from './chatshow/Linking';
import { Cartshow } from './chatshow/Cartshow';
import {ProfileShow} from './chatshow/ProfileShow';
import { AdminUserList } from './chatshow/AdminUserList';
import { ProductListShow } from './chatshow/ProductListShow';
//import { UserShow } from './chatshow/UserShow';
// all available config props
const config ={
  width: "350px",
  height: "400px",
  floating: true,
  headerTitle: 'ChatBot'
};

class Chating extends Component {
  render() {
      let {name} = this.props;
    return (
      <ChatBot 
        steps={[
          {
            id: 'begin',
            message : `Hey!!  ${name} Do you need some help` ,
            trigger : 'response'
          },
          {
              id : 'response',
              options: [
                {value: 'yes' , label: 'yes', trigger: 'user'},
                {value: 'no' , label: 'no' , trigger: 'stop'},
                {value: 'go-back' , label : 'go-back' , trigger : 'begin'}
              ]
          },
          {
              id : 'stop',
              message : 'OK Thank You for giving your precious time!!!',
              end : true
          },
          {
            id:'user', 
            message:'here is some stuff you can do as a user', 
            trigger:'intro-user',
          },
          {
            id:'intro-user', 
            options:[
            {value:'cart' , label : 'cart' , trigger: 'cart-show'},
            {value : 'see-profile' , label:'see-profile' , trigger: 'see-profile'}
            ] 
          },
        //   {
        //     id:'login',
        //     component : <Linking/>,
        //     asmessage:true, 
        //     end:true,
        //   },
        //   {
        //     id:'AdminUserList', 
        //     component : <AdminUserList/> ,
        //     asmessage:true, 
            
        //   },
          {
            id: 'cart-show',
            component : <Cartshow/>,
            asmessage: true,
          },
          {
            id: 'see-profile',
            component : <ProfileShow/>,
            asmessage: true,
          }
        //   {
        //     id : 'productlist',
        //     component : <ProductListShow/>,
        //     asmessage:true
        //   }
        ]}
        {...config}
      />
        
        );
      }

    }

    export default Chating;