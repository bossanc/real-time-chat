import React from 'react'
import { Popover } from 'antd';
import moment from 'moment';
let defaults = {
    height: 50,
    width: 50,
  };

const Message = (props) => {

    return (
        <div style={{ marginTop:10 }}>
            {
                props.listMsg.map( msg =>{
                    const content = (
                        <div>
                          <p>Email : {msg.user}</p>
                          <p>Date : {moment(msg.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        </div>
                      );
                    return <p key = { msg.key }><Popover content={content} title="User detail" trigger="hover"><img src ={`https://ui-avatars.com/api/?name=${msg.user}&rounded=true`} style = {defaults} /></Popover> { msg.message }</p>
                }) 
            }
        </div>        
    )
}

export default Message