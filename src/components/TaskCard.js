import React from 'react';
import './TaskCard.scss';
import comment from '../assets/icons/comment.svg';
import clip from '../assets/icons/clip.svg';
import user from '../assets/icons/user.png';


export default function TaskCard(props) {
  return (
    <div className="task-card" draggable="true" id={[props.timeId]} onDragStart={props.onDragStart}>
      <input id={props.timeId} type="checkbox" />
      <label for={props.timeId} className="labelView">
        <span className="taskText">{props.taskText}</span>
        <div className="iconView">
          <span className="simpleTxt">75%</span>
          <span className="simpleTxt"><img src={comment} className="commentImg" alt="comment" />1</span>
          <span className="simpleTxt"><img src={clip} className="clipImg" alt="clip" />5</span>
        </div>
        <div className="userImgView">
        <span className="todaytxt">Today</span>
        <img src={user} className="userImg" alt="user" />
        </div>
      </label>

    </div>
  )
};

