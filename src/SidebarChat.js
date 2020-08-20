import React, { useState, useEffect } from 'react'
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import db from './firebase';


function SidebarChat({ addNewChat, id, name, }) {
  const [seed, setSeed] = useState('')
  const [messages, setMessages] = useState({})
  const addChat = () => {
    const roomName = prompt("Please enter name for the chat");

    if (roomName) {
      //do some clever staff in the database
      db.collection("room").add({ name: roomName })
    }
  }

  useEffect(() => {
    if (id) {
      db.collection("room").doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
          setMessages(snapshot.docs.map(doc => (doc.data())))
        ))
    }
  }, [id])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
      <div onClick={addChat} className="sidebarChat">
        <h2>Add new Chat</h2>
      </div>
    )
}


export default SidebarChat
