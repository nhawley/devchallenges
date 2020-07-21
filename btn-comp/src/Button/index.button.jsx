import React from 'react';
import './style.button.css';

function Button({ type, name, disabled, icon, iconPos, size, color, text }) {
  switch (type) {
    case 'icon':
      type = 'icon';
      break;
    case 'disShad':
      type = 'disShad';
      break;
    case 'text':
      type = 'text';
      break;
    case 'outline':
      type = 'outline';
      break;
    default:
      type = 'normal';
      break;
  }
  let btnClass = [type, size, color];
  btnClass = btnClass.join(' ');
  let btnText = text ? text : 'Default';
  return (
    <div className="btn-cont">
      <p className="btn-name">{name}</p>
      {type === 'icon'
        ? <button className={btnClass} disabled={disabled}>
            {iconPos === 'left'
              ? <div><span class="material-icons left">{icon}</span> {btnText} </div>
              : <div>{btnText} <span class="material-icons right">{icon}</span> </div>
            }
          </button>
        : <button className={btnClass} disabled={disabled}> {btnText} </button>
      }
    </div>
  );
}

export default Button;